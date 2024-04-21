'use client'
import Link from 'next/link'
import React from 'react'
import { HoverEffect } from "./ui/card-hover-effect";

const featuredWebinars = [
    {
      title: 'Front-End Development Fundamentals',
      description:
        'Dive deep into the fundamentals of front-end development and enhance your coding skills.',
      slug: 'front-end-development-fundamentals',
      isFeatured: true,
    },
    {
      title: 'Back-End Development Techniques',
      description:
        'Learn the craft of back-end development from experienced developers and engineers.',
      slug: 'back-end-development-techniques',
      isFeatured: true,
    },
    {
      title: 'Full-Stack Development Mastery',
      description:
        'Advanced techniques to master both front-end and back-end development.',
      slug: 'full-stack-development-mastery',
      isFeatured: true,
    },
    {
      title: 'Responsive Web Design Principles',
      description:
        'Get started with responsive web design with this comprehensive overview.',
      slug: 'responsive-web-design-principles',
      isFeatured: true,
    },
    // Added two more topics
    {
      title: 'UI/UX Design Fundamentals',
      description:
        'Enhance your user interface and user experience design skills with expert guidance.',
      slug: 'ui-ux-design-fundamentals',
      isFeatured: true,
    },
    {
      title: 'Web Development Best Practices',
      description:
        'Learn how to implement industry best practices for efficient and effective web development.',
      slug: 'web-development-best-practices',
      isFeatured: true,
    },
  ];

function UpcomingWebinars() {
  return (
    <div className='p-12 bg-gray-900 '>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <div className='text-center'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED WEBINARS</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhance your Coding journey</p>
            </div>
            <div className='mt-10'>
                <HoverEffect
                items={featuredWebinars.map(webinar =>(
                    {
                        title: webinar.title,
                        description: webinar.description,
                        link: '/'
                    }
                ))}
                
                />
            </div>
            <div className='mt-10 text-center'>
                <Link href={'/'} className=''>
                <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
                         View all webinars
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default UpcomingWebinars