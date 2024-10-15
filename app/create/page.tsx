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
 
const formSchema = z.object({
  prompt: z.string().min(3, { message: "Prompt must be at least 3 characters long" }),
})


export default function Page() {
  const [outputImage, setOutputImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  })
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className='w-full h-dvh p-3 pt-[72px] flex justify-start items-start flex-col'>
      <div className='w-full border border-red-500 p-3'>
        <h1 className='text-center font-semibold text-white text-3xl'>Create</h1>
        <p className='text-white/50 text-center text-md'>
            Create Stunning Images from Text using AI for FREE.
        </p>
      </div>
      <div className='w-full border border-green-500 p-3 flex h-full gap-3'>
        <div className='__form flex-[2] border border-yellow-500 flex justify-center items-start flex-col gap-3 px-5'>
          <p className='text-left text-lg text-white/80'>Type your prompt to create any image you can imagine!</p>
          <div className='flex gap-2 w-full'>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full gap-2">
                <FormField
                  control={form.control}
                  name="prompt"
                  render={({ field }) => (
                    <FormItem className='w-full max-w-[70%]'>
                      <FormControl >
                        <Input placeholder='a monkey eating an icecream...' className='transition-all w-full border-white' {...field}/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Generate</Button>
              </form>
            </Form>
          </div>
        </div>
        <div className='__output flex-[1] border border-white bg-white/5 rounded-lg'>

        </div>
      </div>
    </div>
  )
}
