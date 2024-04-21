'use client'
import React from 'react'
import { InfiniteMovingCards } from './ui/infinte-moving-cards';

const webDevSchoolTestimonials = [
  {
    quote:
      'Enrolling in this web development school was a game-changer for me. The instructors are incredibly knowledgeable and supportive!',
    name: 'Alex Johnson',
    title: 'Front-End Development Student',
  },
  {
    quote:
      "The learning environment and resources here are top-notch. I've gained valuable skills in back-end development that have boosted my career.",
    name: 'Samantha Lee',
    title: 'Back-End Development Student',
  },
  {
    quote:
      "This school provided me with the foundation and mentorship to excel as a full-stack developer. I'm grateful for the comprehensive curriculum.",
    name: 'Michael Chen',
    title: 'Full-Stack Development Student',
  },
  {
    quote:
      'The advanced web technologies course opened my eyes to the possibilities in modern web development. Highly recommend!',
    name: 'Emily Taylor',
    title: 'Web Technologies Student',
  },
  {
    quote:
    'The advanced web technologies course opened my eyes to the possibilities in modern web development. Highly recommend!',
  name: 'joe rogan',
  title: 'UX/UI design',
  },
];


function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony: Voices of success</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={webDevSchoolTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}



export default TestimonialCards