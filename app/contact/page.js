"use client";
import { useState } from "react";
import heroImg from "../../public/assests/img4.jpeg"
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";
import Image from "next/image";

const page = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `New Website Enquiry:%0A%0AName: ${encodeURIComponent(
      form.firstname
    )} ${encodeURIComponent(form.lastname)}%0AEmail: ${encodeURIComponent(
      form.email
    )}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/919874134353?text=${text}`, "_blank");
  };
  return (
    <>
      <div className="relative bg-[#1e1e1e] font-cor overflow-hidden text-white">


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
                            Contact Us
                            </p>
                          </div>
                        </div>
                      </div>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className=" p-6 sm:p-8 rounded-xl ">
              <h2 className="text-3xl font-semibold mb-6 text-[#f3ff00]">
                Reach Us Through
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 text-xl gap-4">
                  <div>
                    <label
                      htmlFor="firstname"
                      className="block text-sm font-medium  mb-1"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      value={form.firstname}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border   border-[#f3ff00] rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastname"
                      className="block text-sm font-medium  mb-1"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      value={form.lastname}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border   border-[#f3ff00] rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium  mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border   border-[#f3ff00] rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium  mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2  border  border-[#f3ff00] rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#f3ff00] text-black px-6 py-3 rounded-full font-semibold hover:bg-green-900 transition duration-300 inline-block"
                >
                  Submit Via WhatsApp
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-6">
              <div className="p-6 ">
                <h3 className="text-3xl font-semibold mb-4 text-[#f3ff00]">
                  Contact Information
                </h3>

                <div className="space-y-4 text-sm sm:text-xl">
                  <div className="flex items-start ">
                    <FaMapMarkerAlt className="text-yellow-500 mt-1 mr-3 flex-shrink-0 " />
                    <div className="">
                      <p className=" ">Address:</p>
                      <p className="">
                      Metropolitan Building, magistrate court tennis club, Mayo Rd, Maidan, Kolkata, West Bengal 700016
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaPhone className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium ">Phone:</p>
                      <p className="">+91 9874134353 </p>
                      <p className="">+91 9836049537 </p>
                      
                    </div>
                  </div>

                  <div className="flex items-start">
                    <FaEnvelope className="text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <p className="font-medium ">Email:</p>
                      <p className=""> tewarisanjay2@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Updated Google Map with new coordinates */}
          <div className="h-64 sm:h-80 overflow-hidden shadow-md">
            <div className="h-64 sm:h-80 overflow-hidden shadow-md">
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
        </section>
      </div>
    </>
  );
};

export default page;
