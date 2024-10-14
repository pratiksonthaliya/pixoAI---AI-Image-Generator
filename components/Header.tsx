"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {Button} from './ui/button'
import {signIn, useSession} from 'next-auth/react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { BiLoaderCircle } from 'react-icons/bi'

export default function Header() {
  const [initialLoading, setInitialLoading] = useState<boolean>(true);
  const { data : session, status} = useSession();

  useEffect(() => {
    if (status !== 'loading'){
        setInitialLoading(false);
    }
  }, [session, status])

  return (
    <div className='fixed top-0 w-full h-[60px] bg-black border-b border-white/60 p-3 flex justify-between items-center'>
        <Link href='/'>
            <h2 className='ml-2 text-2xl font-bold'>PixoAI</h2>
        </Link>
        {initialLoading && status === 'loading' ? (
            <BiLoaderCircle className='animate-spin text-4xl' />
        ) : !session ? (
            <div className='__menu'>
                <Button onClick={() => signIn("google")}>Login</Button>
            </div>
        ) : (
            <Avatar>
                <AvatarImage src={session?.user?.image || ""} />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        )
    }
    </div>
  )
}
