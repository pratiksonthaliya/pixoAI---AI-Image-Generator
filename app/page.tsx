"use client"

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
return (
    <div className="w-full h-dvh flex justify-center items-center">
      <div className="flex justify-center items-center flex-col">
        <motion.h1 
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
            duration: 0.25
          }}
          className="text-4xl sm:text-6xl font-bold"
        >
          Pixo AI
        </motion.h1>
        <motion.p 
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
            delay: 0.25
          }}
          className="text-white/50"
        >
          Generate stunning images from text using AI for free.
        </motion.p>
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
            delay: 0.5
          }}
          className="text-white/50"
        >
          <Link href="/create">
            <Button className="mt-3 font-semibold p-5">Start Creating</Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
