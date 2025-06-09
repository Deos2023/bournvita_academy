'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Image from 'next/image';
import heroImg from "../../public/assests/img11.jpeg"
const faqData = [
    {
      question: "What age groups do you train at Bournvita Cricket Academy?",
      answer: "We offer structured coaching for boys and girls in Under-8, Under-10, Under-14, Under-16, and Under-18 categories, with programs tailored to each age group's physical and technical development."
    },
    {
      question: "Who is the head coach of the academy?",
      answer: "Our academy is led by Mr. Arun Lal, former Indian Test cricketer and Bengal Ranji Captain, with a team of 14 experienced coaches under his guidance."
    },
    {
      question: "What special facilities does the academy offer?",
      answer: "We provide: 8 practice pitches (including 5 all-weather pitches), bowling machine training, Pitch Vision 360° video analysis system, and regular practice matches."
    },
    {
      question: "Do you offer physical fitness training?",
      answer: "Yes, all students receive professional physical training focusing on strength & conditioning, agility, endurance, and injury prevention from qualified trainers."
    },
    {
      question: "What is Pitch Vision and how does it help?",
      answer: "Pitch Vision is our state-of-the-art 360° video analysis system that helps students analyze techniques, receive visual feedback, track improvements, and compare performance with professionals."
    },
    {
      question: "Has the academy produced any notable players?",
      answer: "Yes, we've developed players who've represented Bengal State Teams in U-16, U-19, U-23 categories and the Ranji Trophy, demonstrating our training methodology's effectiveness."
    },
    {
      question: "Do students get to play competitive matches?",
      answer: "Absolutely. We organize regular practice matches and participate in CAB-organized tournaments for U-13, U-15, and U-19 age groups for real-game experience."
    },
    {
      question: "What makes Bournvita Cricket Academy unique?",
      answer: "Our combination of Mr. Arun Lal's elite mentorship, professional coaching staff, advanced training facilities, and proven track record of developing top talent sets us apart."
    },
    {
      question: "How can I enroll my child in the academy?",
      answer: "For admissions, please contact Mr. Sanjay Tewari at 9874134353 or tewarisanjay2@gmail.com, or Mr. SK. Altab at 9836049537."
    },
    {
      question: "What values does the academy emphasize beyond cricket skills?",
      answer: "Mr. Arun Lal personally mentors students in mental toughness, strategy, sportsmanship, discipline, and leadership - shaping well-rounded individuals beyond just cricket."
    }
  ];
export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
    <div className='bg-[#1e1e1e]'>
 {/* Hero Section */}
                <div className="relative h-[30vh] min-h-[500px] w-full">
                  <Image
                    src={heroImg}
                    alt="Hero Image"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white px-4">
                    <div className="text-center max-w-4xl px-4">
                      <p className="text-4xl sm:text-8xl font-bold mb-6 md:mb-8">
                     FAQ's
                      </p>
                    </div>
                  </div>
                </div>

    <div className="max-w-3xl mx-auto p-6 text-white">
      {faqData.map((item, index) => (
        <div
          key={index}
          className="border border-yellow-400 mb-2 p-4 transition-all duration-300"
        >
          <div
            onClick={() => toggleIndex(index)}
            className="flex justify-between items-center cursor-pointer font-semibold text-white"
          >
            <h3>{item.question}</h3>
            {activeIndex === index ? (
              <Minus className="text-yellow-400" />
            ) : (
              <Plus className="text-yellow-400" />
            )}
          </div>
          {activeIndex === index && (
            <p className="mt-2 text-sm text-gray-300">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
    </div>
    </>
  );
}
