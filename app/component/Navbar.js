"use client"
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FaChevronDown } from 'react-icons/fa'
import logo from "../../public/assests/logo.png"
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false)
  const pathname = usePathname()
  const moreRef = useRef(null)

  const toggleMenu = () => setIsOpen(!isOpen)

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setIsMoreOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Close menus on route change
  useEffect(() => {
    setIsMoreOpen(false)
    setIsOpen(false)
    setIsMobileMoreOpen(false)
  }, [pathname])

  const navItemClass = "relative text-white hover:text-amber-400 transition flex items-center gap-1.5 cursor-pointer"

  const isActive = (href) => pathname === href ? "text-amber-400 font-bold" : ""
  const isMoreActive = (pathname === "/gallery" || pathname === "/faq") ? "text-amber-400 font-bold" : ""

  return (
    <header className="w-full bg-[#222] py-4 px-4 font-semibold font-mono shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex sm:justify-around justify-between items-center text-center">
        
        {/* Left Navigation */}
        <ul className="hidden md:flex gap-6 items-center text-sm">
          <li className={`${navItemClass} ${isActive("/")}`}>
            <Link href="/">HOME</Link>
          </li>
          <li className={`${navItemClass} ${isActive("/about")}`}>
            <Link href="/about">ABOUT US</Link>
          </li>
          <li className={`${navItemClass} ${isActive("/blog")}`}>
            <Link href="/blog">BLOG</Link>
          </li>

          {/* MORE Dropdown */}
          <li className="relative" ref={moreRef}>
            <button
              type="button"
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className={`${navItemClass} ${isMoreActive} focus:outline-none`}
            >
              <span>MORE</span>
              <FaChevronDown className={`text-xs transition-transform duration-200 ${isMoreOpen ? 'rotate-180 text-amber-400' : ''}`} />
            </button>

            {isMoreOpen && (
              <ul
                className="absolute left-0 mt-3 bg-[#2a2a2a] border border-gray-700 shadow-2xl rounded-md py-2 w-44 z-50 text-left transition-all duration-200"
              >
                <li className="px-4 py-2 hover:bg-[#333] transition">
                  <Link
                    href="/gallery"
                    onClick={() => setIsMoreOpen(false)}
                    className={`block w-full text-white hover:text-amber-400 ${isActive("/gallery")}`}
                  >
                    GALLERY
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-[#333] transition">
                  <Link
                    href="/faq"
                    onClick={() => setIsMoreOpen(false)}
                    className={`block w-full text-white hover:text-amber-400 ${isActive("/faq")}`}
                  >
                    FAQ'S
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className={`${navItemClass} ${isActive("/contact")}`}>
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>

        {/* Center Logo */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image src={logo} alt="Bournvita Academy Logo" className="w-14 h-14 object-contain" />
          </Link>
        </div>

        {/* Call Button */}
        <div className="hidden md:flex items-center">
          <a href="tel:9874134353">
            <button className="rounded-full border border-[#F3FF00] text-[#F3FF00] px-6 py-2 text-sm font-semibold hover:bg-[#F3FF00] hover:text-black transition cursor-pointer">
              CALL: +91 9874134353
            </button>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white text-2xl">
          <button onClick={toggleMenu} aria-label="Toggle Navigation Menu">
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1e1e1e] border-t border-gray-800 px-6 py-6 transition-all duration-300">
          <ul className="flex flex-col gap-4 text-white font-medium">
            <Link href="/" onClick={toggleMenu} className={`${isActive("/")}`}>HOME</Link>
            <Link href="/about" onClick={toggleMenu} className={`${isActive("/about")}`}>ABOUT US</Link>
            <Link href="/blog" onClick={toggleMenu} className={`${isActive("/blog")}`}>BLOG</Link>
            
            {/* Mobile MORE Section Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setIsMobileMoreOpen(!isMobileMoreOpen)}
                className={`flex justify-between items-center w-full py-1 text-left ${isMoreActive}`}
              >
                <span>MORE</span>
                <FaChevronDown className={`text-xs transition-transform duration-200 ${isMobileMoreOpen ? 'rotate-180 text-amber-400' : ''}`} />
              </button>
              
              {isMobileMoreOpen && (
                <div className="flex flex-col gap-3 pl-4 mt-2 border-l-2 border-amber-400/50 py-1">
                  <Link href="/gallery" onClick={toggleMenu} className={`hover:text-amber-400 ${isActive("/gallery")}`}>
                    GALLERY
                  </Link>
                  <Link href="/faq" onClick={toggleMenu} className={`hover:text-amber-400 ${isActive("/faq")}`}>
                    FAQ'S
                  </Link>
                </div>
              )}
            </div>

            <Link href="/contact" onClick={toggleMenu} className={`${isActive("/contact")}`}>CONTACT</Link>

            <a href="tel:9874134353" className="mt-2">
              <button className="w-full rounded-full border border-[#F3FF00] text-[#F3FF00] py-2 text-sm font-semibold hover:bg-[#F3FF00] hover:text-black transition">
                CALL: +91 9874134353
              </button>
            </a>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar

