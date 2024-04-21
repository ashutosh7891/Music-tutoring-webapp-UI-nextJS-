'use Client'

import Link from 'next/link'
import React from 'react'

function HeroSection() {
  return (
    <div className='h-auto md:h-[40rem] flex w-full rounded-md flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:p-0'>
        <div className='p-4 relative z-10 w-full text-center'>
            <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl bg-clip-text font-bold text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 '>
                Master the art of music
            </h1>
            <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
                Dive into our comprehensive music courses and transform the musical journey today. Weather you're a beginner or looking to refine your skills, join to unlock our true potential 
            </p>
            <div className="mt-4 ">
                <Link href = {'/courses'}>
                    Explore courses
                </Link>
            </div>
        </div>
        </div>
  )
}

export default HeroSection