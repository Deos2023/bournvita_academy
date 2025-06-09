import React from 'react'
import heroImg from "../../public/assests/img12.jpeg"
import Image from 'next/image'
import ch1 from "../../public/assests/img3.jpeg"
import ch2 from "../../public/assests/img17.jpeg"
import ch3 from "../../public/assests/img4.jpeg"
import ch4 from "../../public/assests/grp.jpg"
import tst from "../../public/assests/test.png"

const page = () => {
  return (
    <div>
      <div>
      <div className="bg-[#1d1d1d] text-white min-h-screen">
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
                            Blog
                            </p>
                          </div>
                        </div>
                      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <aside className="md:col-span-1 space-y-6">
          
          

          {/* Recent Posts */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Recent Posts</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Image src={ch1}
                 alt="thumb" 
                 className="w-10 h-10 object-cover" />
                <div>
                  For the Love of the Game <br />
                  <span className="text-gray-400">January 28, 2025</span>
                </div>
              </li>
              <li className="flex items-center gap-2">
              <Image src={ch2}
                 alt="thumb" 
                 className="w-10 h-10 object-cover" />
                <div>
                  Unleash Cricket Passion <br />
                  <span className="text-gray-400">January 28, 2025</span>
                </div>
              </li>
              <li className="flex items-center gap-2">
              <Image src={ch3}
                 alt="thumb" 
                 className="w-10 h-10 object-cover" />
                <div>
                  Where Cricket Comes Alive <br />
                  <span className="text-gray-400">January 28, 2025</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Comments (placeholder) */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Recent Comments</h3>
            <p className="text-sm text-gray-400">No comments to show.</p>
          </div>
        </aside>

        {/* Blog Grid */}
        <main className="md:col-span-3 grid sm:grid-cols-2 gap-6">
          {[
            {
              title: 'For The Love Of The Game',
              img: ch1,
              date: 'January 28, 2025',
              excerpt: 'An overview of the passion and spirit behind cricket...',
            },
            {
              title: 'Unleash Cricket Passion',
              img: ch2,
              date: 'January 28, 2025',
              excerpt: 'To achieve this, it would be necessary to form uniform programs...',
            },
            {
              title: 'Where Cricket Comes Alive',
              img: ch3,
              date: 'January 28, 2025',
              excerpt: 'Magic happens on the pitch as young stars rise...',
            },
            {
              title: 'Cricket At Its Best',
              img: ch4,
              date: 'January 28, 2025',
              excerpt: 'In the heat of competition, greatness shines through...',
            },
          ].map((post, i) => (
            <div key={i} className="space-y-2">
              <Image
               src={post.img} 
               alt={post.title} 
               className="w-full h-48 object-cover" />
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p className="text-sm text-gray-400">{post.date}</p>
              <p className="text-sm">{post.excerpt}</p>
              <a href="#" className="text-[#F3FF00] text-sm font-semibold">READ MORE</a>
            </div>
          ))}
        </main>
      </div>
    </div>
      </div>
    </div>
  )
}

export default page
