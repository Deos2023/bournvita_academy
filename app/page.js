"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import img1 from "../public/assests/grp.jpg";
import img2 from "../public/assests/img2.jpg";
import img3 from "../public/assests/grp.jpg";
import Hero from "./component/Hero";
import prof from "../public/assests/profile1.jpg"
import prof2 from "../public/assests/profile2.jpg"
import { AnimatePresence, motion } from "framer-motion";
import ch1 from "../public/assests/img3.jpeg"
import ch2 from "../public/assests/img17.jpeg"
import ch3 from "../public/assests/img4.jpeg"
import ch4 from "../public/assests/grp.jpg"
import tst from "../public/assests/test.png"
import { Phone, Quote } from 'lucide-react';
import bgImage from "../public/assests/bg1.png" 
import CountUp from 'react-countup';
import heroimg from "../public/assests/hero.jpeg"
import heroimg2 from "../public/assests/hero2 (1).png"

const slides = [
  {
    leftImage: heroimg,
    rightImage: heroimg2,
    heading: "Your Cricket Journey Starts Here",
    description: "We'll Help You Find It. We're Your First Step To Becoming Everything You Want To Be.",
    button: "EXPLORE",
  },
  {
    leftImage: heroimg2,
    rightImage: heroimg,
    heading: "Train With The Best Coaches",
    description: "Access top-level coaching and structured training sessions.",
    button: "JOIN NOW",
  },
  {
    leftImage: heroimg,
    rightImage: heroimg2,
    heading: "Unleash Your Potential",
    description: "Unlock opportunities in leagues, teams, and tournaments.",
    button: "GET STARTED",
  },
];
const testimonials = [
  {
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem has been the industry's standard dummy ever since.",
    author: "James Anderson",
  },
  {
    text: "The coaching here transformed my game completely. My batting average improved by 40% in just 6 months of training.",
    author: "Sarah Williams",
  },
  {
    text: "Best cricket academy in the region. The facilities are world-class and the coaches are incredibly knowledgeable.",
    author: "Rahul Sharma",
  },
  {
    text: "I went from club level to state team selection within two years of joining this academy. Highly recommended!",
    author: "Michael Chen",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div>
        {/* Hero Section */}
        <div>
        <section className="bg-[#1e1e1e] h-screen w-full flex items-center justify-center relative overflow-hidden px-4">
  {/* Vertical Dots - Hidden on mobile */}
  <div className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 space-y-3 z-50">
    <span className="block w-3 h-3 rounded-full bg-white"></span>
    <span className="block w-3 h-3 rounded-full bg-lime-400"></span>
  </div>

  <div className="flex flex-col md:flex-row items-center w-full h-full">
    <AnimatePresence mode="wait">
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="relative flex items-center justify-center w-full h-full"
      >
        {/* Container for Centered Content - Now full height */}
        <div className="relative flex flex-col md:flex-row items-center justify-center w-full h-full max-w-[1800px]">
          
          {/* Left Floating Image - Now larger and visible on all screens */}
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="z-30 w-[400px] md:w-[600px] lg:w-[800px] h-[300px] md:h-[400px] lg:h-[600px] overflow-hidden shadow-2xl relative md:-mr-32 lg:-mr-64"
          >
            <Image
              src={slides[index].leftImage}
              alt="Left"
              fill
              className="object-cover rounded-none"
              priority
            />
          </motion.div>

          {/* Right Image + Text - Now larger */}
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative w-full md:w-[900px] lg:w-[1100px] h-[400px] md:h-[700px] lg:h-[800px] z-20 overflow-hidden shadow-xl rounded-none"
          >
            <Image
              src={slides[index].rightImage}
              alt="Right"
              fill
              className="object-cover rounded-none"
              priority
            />
            <div className="absolute inset-0 md:pl-44 lg:pl-72 bg-black/50 backdrop-blur-sm px-8 md:px-16 py-8 md:py-12 text-white flex flex-col justify-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 md:mb-8 drop-shadow-md">
                {slides[index].heading}
              </h1>
              <p className="text-base md:text-lg max-w-lg mb-6 md:mb-8 opacity-90">
                {slides[index].description}
              </p>
              <button className="bg-[#f3ff00] hover:bg-lime-300 transition px-8 py-4 w-max text-base md:text-lg font-semibold text-black shadow-lg">
                {slides[index].button}
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  </div>
</section>
        </div>

{/* Bar Section */}
        <div>
        <section className="bg-[#f3ff00] py-20">
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-8 text-center text-black font-bold">
    <div>
      <h2 className="text-4xl sm:text-5xl">
        <CountUp end={90} duration={2} />
        +
      </h2>
      <p className="mt-2 text-sm font-medium text-zinc-800">People</p>
    </div>
    <div>
      <h2 className="text-4xl sm:text-5xl">
        <CountUp end={2548} duration={2.5} />
      </h2>
      <p className="mt-2 text-sm font-medium text-zinc-800">Matches</p>
    </div>
    <div>
      <h2 className="text-4xl sm:text-5xl">
        <CountUp end={24} duration={2} />
        +
      </h2>
      <p className="mt-2 text-sm font-medium text-zinc-800">Years</p>
    </div>
    <div>
      <h2 className="text-4xl sm:text-5xl">
        <CountUp end={235} duration={2.5} />
      </h2>
      <p className="mt-2 text-sm font-medium text-zinc-800">Trophies</p>
    </div>
  </div>
</section>

        </div>

{/* ABOUT US */}
        <div>
        <section className="bg-[#1e1e1e] text-white py-16 px-4">
  <div className="max-w-7xl mx-auto">
    {/* Main About Section */}
    <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
      {/* Image Gallery */}
      <div className="grid grid-cols-2 gap-4 h-full">
        <div className="relative rounded-xl overflow-hidden shadow-lg h-64 sm:h-96">
          <Image
            src={prof}
            alt="Mr. Arun Lal mentoring students"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative rounded-xl overflow-hidden shadow-lg h-64 sm:h-96">
          <Image
            src="/assests/img13.jpeg" // Add your training image path
            alt="Students training"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative rounded-xl overflow-hidden shadow-lg h-64 sm:h-96">
          <Image
            src="/assests/img14.jpeg" // Add your facility image path
            alt="Academy facilities"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative rounded-xl overflow-hidden shadow-lg h-64 sm:h-96">
          <Image
            src="/assests/img15.jpeg" // Add your match image path
            alt="Practice matches"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Detailed Content */}
      <div>
        <h2 className="text-3xl md:text-5xl font-bold text-[#f3ff00] mb-6">
          BOURNVITA CRICKET ACADEMY
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          <strong>Mayo Road, Kolkata-700016 (Near Gandhi Statue)</strong><br />
          Established in 1995 at the Metropolitan Magistrate Courts Tennis Club under the mentorship of <strong>Mr. Arun Lal</strong> - Former Indian Test Cricketer and Bengal Ranji Captain.
        </p>

        <div className="space-y-8">
          {/* Age Group Coaching */}
          <div className="bg-[#2a2a2a] p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[#f3ff00] mb-3">Age Group Coaching</h3>
            <p className="mb-3">Structured programs for boys and girls in:</p>
            <ul className="grid grid-cols-2 gap-2 list-disc list-inside text-gray-200">
              <li>Under-8</li>
              <li>Under-10</li>
              <li>Under-14</li>
              <li>Under-16</li>
              <li>Under-18</li>
            </ul>
            <p className="mt-3">Each program is tailored to the players' physical and technical development stages.</p>
          </div>

          {/* Facilities */}
          <div className="bg-[#2a2a2a] p-6 rounded-lg">
            <h3 className="text-xl font-bold text-[#f3ff00] mb-3">World-Class Facilities</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Practice Pitches:</h4>
                <ul className="list-disc list-inside text-gray-200 space-y-1">
                  <li>5 all-season pitches (monsoon-proof)</li>
                  <li>3 premium turf pitches</li>
                  <li>Total 8 dedicated practice pitches</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Training Technology:</h4>
                <ul className="list-disc list-inside text-gray-200 space-y-1">
                  <li>Bowling machine for precision training</li>
                  <li>Pitch Vision 360° video analysis</li>
                  <li>Performance tracking systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Additional Detailed Sections */}
    <div className="grid md:grid-cols-3 gap-8 mb-20">
      {/* Coaching Methodology */}
      <div className="bg-[#2a2a2a] p-6 rounded-lg">
        <h3 className="text-xl font-bold text-[#f3ff00] mb-4">Our Methodology</h3>
        <ul className="space-y-3 text-gray-200">
          <li className="flex items-start">
            <span className="text-[#f3ff00] mr-2">•</span>
            <span>Professional physical conditioning program</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#f3ff00] mr-2">•</span>
            <span>Weekly practice matches for real-game experience</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#f3ff00] mr-2">•</span>
            <span>Technical skill development sessions</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#f3ff00] mr-2">•</span>
            <span>Mental toughness and strategy workshops</span>
          </li>
        </ul>
      </div>

      {/* Achievements */}
      <div className="bg-[#2a2a2a] p-6 rounded-lg">
        <h3 className="text-xl font-bold text-[#f3ff00] mb-4">Our Legacy</h3>
        <p className="mb-4 text-gray-200">We've nurtured players who represent:</p>
        <ul className="space-y-3 text-gray-200">
          <li className="flex items-start">
            <span className="text-[#f3ff00] mr-2">•</span>
            <span>Bengal State Teams (U-16, U-19, U-23)</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#f3ff00] mr-2">•</span>
            <span>Ranji Trophy Teams</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#f3ff00] mr-2">•</span>
            <span>Domestic Cricket Circuits</span>
          </li>
        </ul>
        <p className="mt-4 text-gray-200">Our alumni success speaks to our training quality.</p>
      </div>

      {/* Mentorship */}
      <div className="bg-[#2a2a2a] p-6 rounded-lg">
        <h3 className="text-xl font-bold text-[#f3ff00] mb-4">Elite Mentorship</h3>
        <p className="mb-4 text-gray-200">Under guidance of <strong>Mr. Arun Lal</strong>:</p>
        <ul className="space-y-3 text-gray-200">
          <li className="flex items-start">
            <span className="text-[#f3ff00] mr-2">•</span>
            <span>Former Indian Test Batsman</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#f3ff00] mr-2">•</span>
            <span>Ex-Bengal Ranji Team Captain</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#f3ff00] mr-2">•</span>
            <span>Former Head Coach of Bengal Senior Team</span>
          </li>
          <li className="flex items-start">
            <span className="text-[#f3ff00] mr-2">•</span>
            <span>Current CAB Cricket Committee Member</span>
          </li>
        </ul>
      </div>
    </div>

    {/* WHY CHOOSE US */}
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#f3ff00] mb-4">WHY CHOOSE US?</h2>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12">
        We go beyond coaching — building confident, disciplined, match-ready cricketers under elite mentorship.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            title: "Expert Coaching",
            img: ch1,
            desc: "14 certified coaches led by Mr. Arun Lal with international experience.",
          },
          {
            title: "Modern Facilities",
            img: ch2,
            desc: "8 practice pitches, bowling machines, and Pitch Vision analysis technology.",
          },
          {
            title: "Proven Curriculum",
            img: ch3,
            desc: "Comprehensive training covering fitness, technique, and match strategy.",
          },
          {
            title: "Tournament Exposure",
            img: ch4,
            desc: "Regular participation in CAB tournaments across all age groups.",
          },
        ].map((item, idx) => (
          <div key={idx} className="bg-[#2a2a2a] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="relative h-48 w-full">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-300 mb-4">{item.desc}</p>
              <a href="#" className="text-[#f3ff00] font-semibold inline-flex items-center group">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Contact Section */}
    <div className="mt-20 bg-[#2a2a2a] rounded-xl p-8 md:p-12">
      <h3 className="text-2xl font-bold text-[#f3ff00] mb-6">Contact Us</h3>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-xl font-semibold mb-4">Academy Address:</h4>
          <p className="text-gray-300 mb-6">
            Metropolitan Magistrate Courts Tennis Club<br />
            Mayo Road, Kolkata - 700016<br />
            (Near Gandhi Statue)
          </p>
          
          <h4 className="text-xl font-semibold mb-4">Training Hours:</h4>
          <p className="text-gray-300">
            Monday to Saturday: 6:00 AM - 9:00 AM & 3:00 PM - 6:00 PM<br />
            Sunday: Closed
          </p>
        </div>
        
        <div>
          <h4 className="text-xl font-semibold mb-4">For Admissions:</h4>
          <div className="space-y-4 text-gray-300">
            <p>
              <strong>Mr. Sanjay Tewari</strong><br />
              <span className="flex items-center mt-1">
                <Phone className="w-4 h-4 mr-2" />
                9874134353
              </span>
              <span className="flex items-center mt-1">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                tewarisanjay2@gmail.com
              </span>
            </p>
            
            <p>
              <strong>Mr. SK. Altab</strong><br />
              <span className="flex items-center mt-1">
                <Phone className="w-4 h-4 mr-2" />
                9836049537
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>


{/* Services */}
        <div>
        <section className="relative bg-[#1e1e1e]  text-white py-20">
        {/* Background Image */}
  <div className="absolute inset-0 -z-10">
    <Image
      src={bgImage}
      alt="Background"
      fill
      quality={100}
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-black/40"></div> {/* Optional overlay */}
  </div>
  <div className="text-center mb-12">
    <h2 className="text-3xl text-[#F3FF00] font-bold">OUR SERVICES</h2>
    <p className="text-sm mt-2">Empowering young cricketers through expert training and technology.</p>
  </div>
  <div className="container mx-auto grid md:grid-cols-3 gap-6 px-4">
    <div className="border border-[#F3FF00] p-6 text-center hover:bg-[#F3FF00] hover:text-black transition">
      <h3 className="font-bold text-lg mb-2">Age Group Coaching</h3>
      <p className="text-sm">Structured programs from U-8 to U-18 tailored to each stage of development.</p>
    </div>
    <div className="border border-[#F3FF00] p-6 text-center hover:bg-[#F3FF00] hover:text-black transition">
      <h3 className="font-bold text-lg mb-2">Physical Conditioning</h3>
      <p className="text-sm">Endurance, strength, agility, and injury prevention with certified trainers.</p>
    </div>
    <div className="border border-[#F3FF00] p-6 text-center hover:bg-[#F3FF00] hover:text-black transition">
      <h3 className="font-bold text-lg mb-2">PitchVision Analysis</h3>
      <p className="text-sm">360° video analysis to improve technique and track performance.</p>
    </div>
    <div className="border border-[#F3FF00] p-6 text-center hover:bg-[#F3FF00] hover:text-black transition">
      <h3 className="font-bold text-lg mb-2">Bowling Machine</h3>
      <p className="text-sm">Consistent deliveries for focused batting practice and technique correction.</p>
    </div>
    <div className="border border-[#F3FF00] p-6 text-center hover:bg-[#F3FF00] hover:text-black transition">
      <h3 className="font-bold text-lg mb-2">Tournaments</h3>
      <p className="text-sm">Participation in official CAB tournaments for real-game exposure.</p>
    </div>
    <div className="border border-[#F3FF00] p-6 text-center hover:bg-[#F3FF00] hover:text-black transition">
      <h3 className="font-bold text-lg mb-2">Mentorship by Arun Lal</h3>
      <p className="text-sm">Guidance from a former Indian Test player and Bengal coach.</p>
    </div>
  </div>
</section>

        </div>

{/* testimonials */}
        <div>
        <section className="bg-[#1d1d1d] text-white py-12">
        <div className="container mx-auto px-4 md:flex md:items-center md:gap-8">
          {/* Static Image */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Image
              src={tst} 
              alt="Stadium testimonial"
              className="w-full h-auto rounded"
              priority
            />
          </div>

          {/* Testimonial Text (Animated) */}
          <div className="md:w-1/2">
            <h2 className="text-[#F3FF00] text-2xl md:text-3xl font-bold mb-2">TESTIMONIALS</h2>
            <p className="text-sm mb-4">We'll help you find it. We're your first step to becoming everything you want to be.</p>

            <div className="border border-[#F3FF00] p-6 relative min-h-[250px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <Quote className="text-[#F3FF00] w-6 h-6 mb-4" />
                  <p className="text-sm md:text-base font-semibold leading-relaxed mb-4">
                    {testimonials[currentTestimonial].text}
                  </p>
                  <p className="font-semibold">– {testimonials[currentTestimonial].author}</p>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${currentTestimonial === index ? 'bg-[#F3FF00]' : 'bg-gray-500'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
        </div>
      </div>
    </>
  );
}