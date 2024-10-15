import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const { prompt } = await request.json();

    function generateRandomNumber(): number {
        return Math.floor(Math.random() * 100000000);
    }
    const randomSeed = generateRandomNumber();

    const imageUrl = `https:/image.pollinations.ai/prompt/${encodeURIComponent(prompt)}&seed=${randomSeed}`;
    await fetch(imageUrl);

    return NextResponse.json({ url: imageUrl });
}