import React from 'react'
import heroImg from "../../public/assests/img3.jpeg"
import Image from 'next/image'
import prof from "../../public/assests/profile2.jpg"
import ch1 from "../../public/assests/img3.jpeg"
import ch2 from "../../public/assests/img17.jpeg"
import ch3 from "../../public/assests/img4.jpeg"
import ch4 from "../../public/assests/grp.jpg"
import { Phone } from 'lucide-react'

const page = () => {
  return (
    <>
    <div className="relative   overflow-hidden">

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
                      About Us
                      </p>
                    </div>
                  </div>
                </div>
             
             {/* ABOUT US */}
                     <div>
                     <section className="bg-[#1e1e1e] text-white py-16 px-4">
               
               <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                 <Image
                   src={prof}
                   alt="Cricket Academy"
                   className="w-full h-[90%] rounded-xl shadow-md"
                 />
             
                 <div>
                   <h2 className="text-3xl md:text-6xl font-bold text-[#f3ff00] mb-4">
                     ABOUT US
                   </h2>
                   <p className="text-sm sm:text-lg text-gray-300 mb-4">
                     <strong>Bournvita Cricket Academy</strong> (Mayo Road, Kolkata-700016, near Gandhi Statue) was established in 1995 under the mentorship of Mr. Arun Lal (Former Indian Test Cricketer and Bengal Ranji Captain). It operates at the Metropolitan Magistrate Courts Tennis Club.
                   </p>
                   <ul className="list-disc list-inside space-y-2 text-sm sm:text-lg text-gray-200">
                     <li>Structured coaching for age groups: U-8 to U-18</li>
                     <li>Professional strength, agility & injury prevention training</li>
                     <li>Bowling machine facility for precision practice</li>
                     <li>360° video analysis via Pitch Vision</li>
                     <li>Regular practice matches to build game awareness</li>
                     <li>8 all-weather practice pitches (5 all-season, 3 turf)</li>
                     <li>Track record of producing players for Bengal & Ranji teams</li>
                     <li>14 expert coaches led by Mr. Arun Lal</li>
                     <li>Participation in CAB tournaments (U-13 to U-19)</li>
                     <li>Mentorship on leadership and sportsmanship</li>
                   </ul>
                   <div className="mt-4 text-sm sm:text-lg text-gray-400">
                     <p>📞 Mr. Sanjay Tewari: 9874134353</p>
                     <p>📧 tewarisanjay2@gmail.com</p>
                     <p>📞 Mr. SK. Altab: 9836049537</p>
                   </div>
                 </div>
               </div>
             
               {/* WHY CHOOSE US */}

{/* ABOUT section 2 */}
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

               <div className="mt-20 text-center">
                 <h2 className="text-3xl md:text-4xl font-bold text-[#f3ff00] mb-2">WHY CHOOSE US?</h2>
                 <p className="text-sm text-gray-300 max-w-xl mx-auto">
                   We go beyond coaching — building confident, disciplined, match-ready cricketers under elite mentorship.
                 </p>
                 <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
                   {[
                     {
                       title: "Expert Coaching",
                       img: ch1,
                       desc: "Led by Mr. Arun Lal, supported by 14 certified coaches.",
                     },
                     {
                       title: "Modern Facilities",
                       img: ch2,
                       desc: "8 practice pitches, bowling machine, Pitch Vision analysis.",
                     },
                     {
                       title: "Performance Focused",
                       img: ch3,
                       desc: "Fitness, match-play, and video-based skill improvement.",
                     },
                     {
                       title: "Proven Results",
                       img: ch4,
                       desc: "Alumni representing Bengal & Ranji levels consistently.",
                     },
                   ].map((item, idx) => (
                     <div key={idx} className="text-left bg-[#2a2a2a] rounded-lg overflow-hidden shadow-md">
                       
                       <Image
                                     src={item.img}
                                     alt="Left"
                                     
                                     objectFit="cover"
                                     className="w-full h-40 object-cover"
                                   />
                       <div className="p-4">
                         <h3 className="text-md font-bold text-white">{item.title}</h3>
                         <p className="text-xs text-gray-400 mt-2">{item.desc}</p>
                         <a href="#" className="text-[#f3ff00] text-xs font-bold mt-3 inline-block">
                           READ MORE
                         </a>
                       </div>
                     </div>
                   ))}
                 </div>
               </div>
             </section>
             
                     </div>


                     {/* ABOUT section 2 */}
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
             
    </div>
    </>
  )
}

export default page
