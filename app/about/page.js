import React from 'react';
import heroImg from "../../public/assests/img3.jpeg";
import Image from 'next/image';
import prof from "../../public/assests/profile2.jpg";
import ch1 from "../../public/assests/img3.jpeg";
import ch2 from "../../public/assests/img17.jpeg";
import ch3 from "../../public/assests/img4.jpeg";
import ch4 from "../../public/assests/grp.jpg";
import { Phone, Mail } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="relative bg-[#1e1e1e] text-white font-sans overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[350px] w-full">
        <Image
          src={heroImg}
          alt="Bournvita Cricket Academy Banner"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={80}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] via-black/50 to-black/70 flex items-center justify-center text-white px-4">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-4xl sm:text-7xl font-extrabold tracking-wide">
              ABOUT <span className="text-[#f3ff00]">US</span>
            </h1>
            <p className="text-gray-300 mt-3 text-sm sm:text-lg">
              Nurturing Cricket Champions Since 1995 Under the Mentorship of Mr. Arun Lal
            </p>
          </div>
        </div>
      </div>

      {/* Main About Content */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6">
        {/* Intro Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-80 sm:h-[450px]">
            <Image
              src={prof}
              alt="Mr. Arun Lal Mentoring Students"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-[#f3ff00] mb-4">
              BOURNVITA CRICKET ACADEMY
            </h2>
            <p className="text-base sm:text-lg text-gray-300 mb-6 leading-relaxed">
              Established in 1995 at the <strong>Metropolitan Magistrate Courts Tennis Club</strong> (Mayo Road, Kolkata-700016), under the visionary leadership of <strong>Mr. Arun Lal</strong> (Former Indian Test Cricketer & Bengal Ranji Captain).
            </p>

            <ul className="space-y-3 text-gray-200 text-sm sm:text-base mb-6">
              <li className="flex items-start">
                <span className="text-[#f3ff00] font-bold mr-2">✓</span>
                <span>Structured coaching programs for age groups: <strong>U-8 to U-18</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-[#f3ff00] font-bold mr-2">✓</span>
                <span>8 Practice Pitches (5 All-Weather & 3 Premium Turf)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#f3ff00] font-bold mr-2">✓</span>
                <span>Advanced 360° Video Analysis via Pitch Vision & Bowling Machines</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#f3ff00] font-bold mr-2">✓</span>
                <span>14 Certified Expert Coaches producing Bengal & Ranji Trophy Players</span>
              </li>
            </ul>

            <div className="p-4 bg-[#2a2a2a] rounded-xl border border-gray-800 space-y-2 text-sm text-gray-300">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#f3ff00]" /> <strong>Mr. Sanjay Tewari:</strong> +91 9874134353
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#f3ff00]" /> <strong>Email:</strong> tewarisanjay2@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#f3ff00]" /> <strong>Mr. SK. Altab:</strong> +91 9836049537
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {/* Methodology */}
          <div className="bg-[#2a2a2a] p-8 rounded-xl border border-gray-800 shadow-lg hover:border-[#f3ff00]/40 transition">
            <h3 className="text-xl font-bold text-[#f3ff00] mb-4">Our Methodology</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start"><span className="text-[#f3ff00] mr-2">•</span> Professional strength & conditioning programs</li>
              <li className="flex items-start"><span className="text-[#f3ff00] mr-2">•</span> Weekly practice matches for real-game experience</li>
              <li className="flex items-start"><span className="text-[#f3ff00] mr-2">•</span> Precision technique and video feedback sessions</li>
              <li className="flex items-start"><span className="text-[#f3ff00] mr-2">•</span> Mental toughness & strategic decision-making</li>
            </ul>
          </div>

          {/* Legacy */}
          <div className="bg-[#2a2a2a] p-8 rounded-xl border border-gray-800 shadow-lg hover:border-[#f3ff00]/40 transition">
            <h3 className="text-xl font-bold text-[#f3ff00] mb-4">Our Legacy</h3>
            <p className="text-sm text-gray-300 mb-3">Our alumni proudly represent:</p>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start"><span className="text-[#f3ff00] mr-2">•</span> Bengal State Teams (U-16, U-19, U-23)</li>
              <li className="flex items-start"><span className="text-[#f3ff00] mr-2">•</span> Ranji Trophy Senior Squads</li>
              <li className="flex items-start"><span className="text-[#f3ff00] mr-2">•</span> Top Domestic Cricket Leagues</li>
            </ul>
          </div>

          {/* Mentorship */}
          <div className="bg-[#2a2a2a] p-8 rounded-xl border border-gray-800 shadow-lg hover:border-[#f3ff00]/40 transition">
            <h3 className="text-xl font-bold text-[#f3ff00] mb-4">Elite Mentorship</h3>
            <p className="text-sm text-gray-300 mb-3">Led by <strong>Mr. Arun Lal</strong>:</p>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-start"><span className="text-[#f3ff00] mr-2">•</span> Former Indian Test Batsman</li>
              <li className="flex items-start"><span className="text-[#f3ff00] mr-2">•</span> Ex-Bengal Ranji Team Captain</li>
              <li className="flex items-start"><span className="text-[#f3ff00] mr-2">•</span> Former Head Coach of Bengal Senior Team</li>
            </ul>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-[#f3ff00] mb-4">WHY CHOOSE US?</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-12 text-sm sm:text-base">
            We go beyond coaching — building confident, disciplined, match-ready cricketers under elite mentorship.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Expert Coaching",
                img: ch1,
                desc: "14 certified coaches led by Mr. Arun Lal with international experience.",
              },
              {
                title: "Modern Facilities",
                img: ch2,
                desc: "8 practice pitches, bowling machines, and Pitch Vision video analysis.",
              },
              {
                title: "Proven Curriculum",
                img: ch3,
                desc: "Comprehensive training covering fitness, technique, and match strategy.",
              },
              {
                title: "Tournament Exposure",
                img: ch4,
                desc: "Regular participation in CAB tournaments across all age categories.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#2a2a2a] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-left border border-gray-800">
                <div className="relative h-44 w-full">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

