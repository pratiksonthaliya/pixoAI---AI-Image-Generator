"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from 'next/image'
import { useToast } from '@/hooks/use-toast'
 
const formSchema = z.object({
  prompt: z.string().min(3, { message: "Prompt must be at least 3 characters long" }),
})


export default function Page() {
  const [outputImage, setOutputImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  })
 
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);
      const response = await fetch("/api/image", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
      const data = await response.json();
      if(response.status === 200){
        setOutputImage(data.url);
      } else {
        toast({variant:'destructive' , description: data.error || 'An error occured.'})
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className='w-full min-h-dvh p-3 pt-[72px] flex justify-start items-start flex-col'>
      <div className='w-full p-3'>
        <h1 className='text-center font-semibold text-white text-3xl'>Create</h1>
        <p className='text-white/50 text-center text-md'>
            Create Stunning Images from Text using AI for FREE.
        </p>
      </div>
      <div className='w-full p-2 flex gap-3 h-[calc(100dvh-200px)] lg:flex-row flex-col'>
        <div className='__form flex-[2] flex justify-center items-start flex-col gap-3 px-5'>
          <p className='text-center w-full lg:text-left text-md md:text-lg text-white/80'>Type your prompt to create any image you can imagine!</p>
          <div className='flex gap-2 w-full'>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full gap-2">
                <FormField
                  control={form.control}
                  name="prompt"
                  render={({ field }) => (
                    <FormItem className='w-full max-w-full lg:max-w-[70%]'>
                      <FormControl >
                        <Input placeholder='a monkey eating an icecream...' className='transition-all w-full border-white' {...field}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button loading={loading} type="submit">Generate</Button>
              </form>
            </Form>
          </div>
        </div>
        <div className='__output flex-[1] min-h-[300px] lg:min-h-full lg:h-full bg-white/5 rounded-lg relative overflow-hidden md:mr-10 w-full h-full' >
        {outputImage ? (
          <Image src={outputImage} alt="output image" width={300} height={300} className='w-full h-full object-contain' />
        ) : (
          <>
            <div className='w-full h-full flex justify-center items-center text-center text-white/70 p-3'>
              <p>Output Image will be displayed here.</p>
            </div>
          </>
        )}
        </div>
      </div>
    </div>
  )
}
