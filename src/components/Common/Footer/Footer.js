import React from 'react'
import AnimatedElement from '../Animation/AnimatedElement'
import Link from "next/link";

export default function Footer() {

  return (
    <div className="relative bottom-0 bg-[#272626]">
      <footer className="text-white body-font">
        <div className="container px-8 py-16 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          {/* G Map  */}
          <AnimatedElement className=" rounded-lg ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.7634141148237!2d77.40502631445676!3d28.63685199063754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cefd994642ed5%3A0xed8c1aadecd16718!2sCompassion%20academy!5e0!3m2!1sen!2sin!4v1605971059020!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </AnimatedElement>

          {/* Footer Links  */}
          {/* Departments */}
          <AnimatedElement className=" flex-grow flex flex-wrap mb-10 text-left order-first">
            {/* Downloads */}
            {/* Admission Enquiry */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">
                Admission Enquiry
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    target="_blank"
                    href="/DocFiles/somatosensory.pdf"
                    className="text-white hover:text-gray-300 cursor-pointer"
                  >
                    {" "}
                    &#8658; Documents for Admission
                  </a>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white hover:text-gray-300 cursor-pointer"
                  >
                    {" "}
                    &#8658; Contact Us
                  </Link>
                </li>
              </nav>
            </div>

            {/* AOT Online */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">
                Compassion Academy Online
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    target="_blank"
                    href="/"
                    className="text-white hover:text-gray-300 cursor-pointer"
                  >
                    {" "}
                    &#8658; LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="/"
                    className="text-white hover:text-gray-300 cursor-pointer"
                  >
                    {" "}
                    &#8658; Instagram
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="/"
                    className="text-white hover:text-gray-300 cursor-pointer"
                  >
                    {" "}
                    &#8658; YouTube
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="/"
                    className="text-white hover:text-gray-300 cursor-pointer"
                  >
                    {" "}
                    &#8658; Moodle Portal Login
                  </a>
                </li>
              </nav>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">
                Address
              </h2>

              <p className="text-white hover:text-gray-300 cursor-pointer">
                Street no. 8,
              </p>
              <p className="text-white hover:text-gray-300 cursor-pointer">
                Shiv mandir wali gali,
              </p>
              <p className="text-white hover:text-gray-300 cursor-pointer">
                Rahul vihar, 1, Bahrampur,
              </p>
              <p className="text-white hover:text-gray-300 cursor-pointer">
                Ghaziabad, Uttar Pradesh 201009
              </p>
              <p className="text-white hover:text-gray-300 cursor-pointer">
                infocompassionacademy@gmail.com
              </p>
              <h4 className="text-white hover:text-gray-300 cursor-pointer">
                +91 8368095727
              </h4>
            </div>
          </AnimatedElement>
        </div>

        <div>
          <div>
            <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
              <p className="text-gray-300 text-sm text-center sm:text-left">
                © 2020 Compassion Academy —
                <a
                  rel="noopener noreferrer"
                  className="text-gray-300 ml-1"
                  target="_blank"
                >
                  @compassionacademy
                </a>
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a
                  className="text-gray-300"
                  href="https://m.facebook.com/"
                  target="_blank"
                >
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-gray-300">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a
                  className="ml-3 text-gray-300"
                  href="https://www.instagram.com/"
                  target="_blank"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a
                  className="ml-3 text-gray-300"
                  href="https://www.linkedin.com/"
                  target="_blank"
                >
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}