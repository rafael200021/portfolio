'use client'
import Image from 'next/image'
import Typewriter from 'typewriter-effect';
import Inicio from '@/app/assets/lotties/inicio.json'
import Lottie from 'lottie-react'

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row justify-center items-center w-full h-full px-20 gap-8">
      <div className='w-full flex justify-center items-center lg:w-2/4'>
        <div className='rounded-full w-96 h-96 p-10   bg-purple-500'>
          <Lottie animationData={Inicio} loop={true} />
        </div>
      </div>
      <div className='w-full flex flex-col justify-start items-start lg:w-2/4 pr-0 lg:pr-40'>
        <h1 className='text-purple-500 font-bold text-5xl'>

          <Typewriter
            options={{
              strings: ['Hello, My name is Rafael and I am a developer  ...',],
              autoStart: true,
              delay: 100,
              loop: true,
            }}
          />
        </h1>


        <p className='mt-10 text-gray-400'>
          My main area of expertise is front-end development, but I also venture into the world of back-end. I'm enthusiastic about exploring new programming languages and I'm constantly seeking to improve my skills in creating web systems.</p>
      </div>

    </main>
  )
}
