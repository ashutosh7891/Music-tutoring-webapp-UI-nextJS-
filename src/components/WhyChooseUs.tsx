'use client'
import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal'

//content

const webDevSchoolContent = [
    {
      title: 'Craft Your Digital Future: A Personal Journey in Web Development Mastery',
      description:
        'Embark on a digital journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our web development school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
    },
    {
      title: 'Craft Your Digital Future: A Personal Journey in Web Development Mastery',
      description:
        'Embark on a digital journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our web development school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
    },
    {
      title: 'Craft Your Digital Future: A Personal Journey in Web Development Mastery',
      description:
        'Embark on a digital journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our web development school, your aspirations meet our dedicated support, creating a harmonious path to mastery.',
    },
    {
      title: 'Interactive Learning & Collaboration',
      description:
        'Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of web development concepts and techniques.',
    },
    {
      title: 'Cutting-Edge Curriculum',
      description:
        'Our curriculum is continuously updated to include the latest web development trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.',
    },
    {
      title: 'Endless Learning Opportunities',
      description:
        'With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your web development skills are always advancing.',
    },
  ];
  

function WhyChooseUs() {
  return (
    <div>
        <StickyScroll content={webDevSchoolContent} />
    </div>
  )
}

export default WhyChooseUs