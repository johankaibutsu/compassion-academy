"use client"
// ======================== Imports ========================
import 'flowbite';
import React from 'react'
import AccordionCard from './AccordionCard';
import AnimatedElement from '@/components/Common/Animation/AnimatedElement';

export default function Accordion() {
    const AccordionData = [
      {
        title:
          "What is the total fee payable at the time of admission for regular students?",
        description:
          "The total fee payable at the time of admission for regular students is ₹1,05,200.",
      },
      {
        title:
          "What is the total fee payable at the time of admission for students allotted through TFW (Tuition Fee Waiver) scheme?",
        description:
          "The total fee payable at the time of admission for students allotted through TFW is ₹53,200.",
      },
      {
        title: "How much is the tuition fee per semester?",
        description: "The tuition fee per semester is ₹52,000.",
      },
      {
        title: "What is admission process like?",
        description:
          "Our admission process includes an online application, academic records review, teacher recommendations, a student essay, and potentially an interview. We assess each applicant holistically, considering academic achievements, extracurricular activities, and personal character.",
      },
      {
        title: "Is the caution deposit refundable?",
        description: "Yes, the caution deposit of ₹10,000 is refundable.",
      },
      {
        title: "How can the fees be paid?",
        description:
          "The fees can be paid by cash or online payment methods either by UPI or Net Banking.",
      },
      {
        title: "Are the tuition fees subject to change?",
        description:
          "Yes, the tuition fees may be revised based on directives from CBSE.",
      },
      {
        title: "What makes compassion Academy Unique?",
        description:
          "Compassion Academy stands out for its focus on combining academic excellence with emotional intelligence and social responsibility. Our curriculum is designed to nurture not just intellectual growth, but also empathy, compassion, and leadership skills.",
      },
      {
        title: "How does the academy support college preparation?",
        description:
          "We provide comprehensive college preparation support including SAT/ACT prep courses, college counseling, assistance with college applications and essays, and opportunities for college visits. Our rigorous curriculum and Advanced Placement courses also help prepare students for higher education.",
      },
    ];

    return (
        <div className='mb-10'>
            <AnimatedElement>
                <h1 className="m-4 mb-10 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-700 from-blue-400">| FAQ</span> :</h1>
            </AnimatedElement>
            {AccordionData.map((data, index) => (
                <AccordionCard key={index} title={data.title} description={data.description} />
            ))}
        </div>

    )
}
