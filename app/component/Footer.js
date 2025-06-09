// components/Footer.tsx
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Footer() {
  const pathname = usePathname();
  const navItemContainerClass = "group relative cursor-pointer";
  const renderNavLink = (href, label, onClickHandler = null) => {
    const isActive = pathname === href;
    const activeTextClass = isActive ? "text-black" : "";
    const underlineClass =
      "absolute left-0 -bottom-1 w-full h-0.5 bg-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left";

    return (
      <li onClick={onClickHandler} className={navItemContainerClass}>
        <Link href={href}>
          <span
            className={`relative ${activeTextClass} py-1 hover:text-black  transition-colors duration-300  text-sm tracking-wider`}
          >
            {label}
            <span className={underlineClass}></span>
          </span>
        </Link>
      </li>
    );
  };
  return (
    <footer className="bg-[#F3FF00]  text-[#343F1E] pt-16 pb-8 px-6 border border-neutral-400">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Description */}
        <div>
          <h3 className="text-2xl  font-semibold mb-4">
          Bournvita  Cricket Academy
          </h3>
          <p className="text-sm text-gray-700">
            
Right
Train With The Best Coaches
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className=" text-xs ">
            {renderNavLink("/", "Home")}
            {renderNavLink("/about", "About Us")}
            {/* {renderNavLink("/service", "History")} */}
            {renderNavLink("/blog", "Blog")}
            {renderNavLink("/faq", "FAQ's")}
            {renderNavLink("/contact", "Contact us")}

          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <p className="text-sm text-gray-700">
          Metropolitan Building, magistrate court tennis club, Mayo Rd, Maidan, Kolkata, West Bengal 700016
          </p>
          <p className="text-sm text-gray-700 mt-2">
            Email: tewarisanjay2@gmail.com
          </p>
          <p className="text-sm text-gray-700">Phone: +91 9874134353 </p>
          <p className="text-sm text-gray-700">Phone: +91 9836049537 </p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Location</h4>
          <div className="flex flex-col gap-4">
          {/* <div className="flex space-x-4 text-[#343F1E] text-xl">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div> */}
          <div className="overflow-hidden h-30 shadow-md">
            <div className="overflow-hidden shadow-md">
              <iframe
                title="Jalsa Banquet & Hotel Location"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.537914346163!2d88.34872419999999!3d22.5589762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277d7d88d5187%3A0xaffea1d9cbabd8d0!2sBournvita%20Cricket%20Academy%20(Arun%20Lal)!5e0!3m2!1sen!2sin!4v1746616177044!5m2!1sen!2sin"
                className="border-0"
              ></iframe>
            </div>
          </div>
          </div>
        </div>
      </div>

      {/* Divider and Copyright */}
      <div className="border-t border-black mt-10 pt-6 text-center text-sm text-gray-600">
         Copyright © {new Date().getFullYear()}. All Rights Reserved.
        Website Developed & Maintained by Digital Exposure Online Services
      </div>
    </footer>
  );
}
