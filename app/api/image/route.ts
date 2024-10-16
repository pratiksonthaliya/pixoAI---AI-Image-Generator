import { authOptions } from "@/utils/authOptions";
import prisma from "@/utils/prisma";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "You are Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({ where: { id: session.user?.id || "" } });
    if (!user) {
        return NextResponse.json({ error: "You are Unauthorized" }, { status: 401 });
    }

    const { prompt } = await request.json();

    function generateRandomNumber(): number {
        return Math.floor(Math.random() * 100000000);
    }
    const randomSeed = generateRandomNumber();

    const imageUrl = `https:/image.pollinations.ai/prompt/${encodeURIComponent(prompt)}&seed=${randomSeed}&width=512&height=512&noLogo=True`;
    await fetch(imageUrl);

    await prisma.post.create({
        data: {
            prompt: prompt,
            url: imageUrl,
            seed: randomSeed,
            user: {
                connect: {
                    id: user.id,
                },
            },
        }
    })

    return NextResponse.json({ url: imageUrl });
}

export async function GET() {
    const session = await getServerSession(authOptions);
    if (!session) {
        return NextResponse.json({ error: "You are Unauthorized" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({ where: { id: session.user?.id || "" } });
    if (!user) {
        return NextResponse.json({ error: "You are Unauthorized" }, { status: 401 });
    }

    const posts = await prisma.post.findMany({ where: { userId: session.user?.id }, orderBy: { createdAt: "desc" } });
    return NextResponse.json(posts);
}