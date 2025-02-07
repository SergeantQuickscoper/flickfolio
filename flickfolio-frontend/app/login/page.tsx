import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Login = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <Image className='-z-20'
              alt='background'
              src="/5.jpg"
              layout="fill"
              objectFit="cover"
              quality={100}
        />
      <div className='w-1/2 h-3/5 bg-opacity-80 rounded-[7.5rem] px-20 py-16 bg-secondaryBackground flex flex-col items-center justify-evenly container'>
        <div className='text-white font-bold text-5xl'>
          Welcome Back!
        </div>
        <div className='items-center w-7/12 mt-10 rounded-lg p-2 bg-white shadow-sm justify-center'>
          <input className='w-11/12 px-2 text-lg leading-tight focus:outline-none' placeholder="Email" />
        </div>

        <div className='items-center w-7/12 mt-10 rounded-lg p-2 bg-white shadow-sm justify-center'>
          <input className='w-11/12 px-2 text-lg leading-tight focus:outline-none' placeholder="Password" />
        </div>

        <Button className=" mt-10 bg-primaryBackground w-7/12 rounded-full px-10 py-9"><p className="text-xl">Login</p></Button>
        <div className='text-white font-bold text-2xl mt-10'>
          New User? Click here to Sign up.
        </div>
      </div>
    </div>
  )
}



export default Login