"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import { FaChevronDown } from 'react-icons/fa'
import logo from "../../public/assests/logo.png"
import Image from 'next/image'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItemClass = "relative group text-white hover:text-amber-400 transition"

  const isActive = (href) => pathname === href ? "text-amber-400" : ""

  return (
    <header className="w-full bg-[#222] py-4 px-4 font-semibold font-mono shadow-sm z-50 ">
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
  <li className="relative group">
    <span className={`${navItemClass} cursor-pointer`}>
      MORE
    </span>
    <ul className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-white shadow-lg rounded-md py-2 w-40 z-50">
      <li className={`${navItemClass} px-4 py-2 text-black hover:bg-gray-100 ${isActive("/gallery")}`}>
        <Link href="/gallery" className='text-black'>GALLERY</Link>
      </li>
      <li className={`${navItemClass} px-4 py-2 text-black hover:bg-gray-100 ${isActive("/faq")}`}>
        <Link href="/faq" className='text-black'>FAQ'S</Link>
      </li>
    </ul>
  </li>
  <li className={`${navItemClass} ${isActive("/contact")}`}>
    <Link href="/contact">CONTACT</Link>
  </li>
</ul>


        {/* Center Logo */}
        <div className="flex items-center gap-2">
<Link href="/">
<Image src={logo} alt="Logo" className="w-15 h-15" />
</Link>
          
        </div>

        {/* Call Button */}
        <div className="hidden md:flex items-center ">
          <a href="tel:9874134353">
            <button className="rounded-full border border-[#F3FF00] px-6 py-2 text-sm font-semibold hover:bg-[#232F1E] hover:text-white transition">
              CALL: +91 9874134353
            </button>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-white text-2xl">
          <button onClick={toggleMenu}>
            {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#222] px-4 py-4">
          <ul className="flex flex-col gap-4 text-white">
            <Link href="/" onClick={toggleMenu}>HOME</Link>
            <Link href="/about" onClick={toggleMenu}>ABOUT US</Link>
            <Link href="/blog" onClick={toggleMenu}>BLOG</Link>
            <Link href="/gallery" onClick={toggleMenu}>GALLERY</Link>
            <Link href="/faq" onClick={toggleMenu}>FAQ'S</Link>
            <Link href="/contact" onClick={toggleMenu}>CONTACT</Link>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
