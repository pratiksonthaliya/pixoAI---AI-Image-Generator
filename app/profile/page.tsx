'use client'

import { Post } from '@prisma/client';
import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { BiLoaderCircle } from 'react-icons/bi';
import {motion} from 'framer-motion';
import { toast } from '@/hooks/use-toast';

export default function Profile() {
    const [loading, setLoading] = useState<boolean>(true);
    const [posts, setPosts] = useState<Post[]>([]);

    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/image');
        const data = await response.json();
        setPosts(data);
        // console.log(data);
      } catch (error: Error | unknown) {
        toast({variant:'destructive' , description: 'An error occured.'})
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

  useEffect(() => {
    fetchPosts();
  }, [])
  
  return (
    <div className='w-full min-h-dvh p-3 pt-[72px] grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3'>
      {loading 
        ? <div className='col-span-full flex items-center justify-center text-4xl'><BiLoaderCircle className='animate-spin'/></div>
        : (
          <AnimatePresence mode='wait'>
            { posts.map((post, index) => {
                return (
                  <motion.div 
                    initial={{ 
                        opacity: 0,
                        scale: 0.5,
                        filter: "blur(10px)"
                    }}
                    animate={{ 
                        opacity: 1, 
                        scale: 1,
                        filter: "blur(0px)"
                    }}
                    transition={{ 
                        duration: 0.25,
                        delay: index * 0.1
                    }}
                    key={post.id} 
                    className='w-full h-fit p-2.5 border rounded-md'
                  >
                    <Image src={post?.url} alt={post.prompt} className='w-full object-contain rounded-md' width={250} height={250} />
                    <p className='text-white/80'>{post.prompt}</p>
                  </motion.div>
                )
            })} 
          </AnimatePresence>
        )
      }
    </div>
  )
}
