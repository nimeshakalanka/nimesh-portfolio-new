'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id='main' className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-6 pt-20 gap-6 md:gap-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        className="relative overflow-hidden rounded-b-[100px] flex-shrink-0 md:-mt-20"
      >
        <Image 
          src="/assets/Mine.png" 
          alt="Nimesh Akalanka" 
          width={350} 
          height={525} 
          className="object-contain w-[180px] h-[270px] sm:w-[220px] sm:h-[330px] md:w-[280px] md:h-[420px] lg:w-[320px] lg:h-[480px]"
        />
      </motion.div>
      <div className="max-w-3xl text-center md:text-left md:self-center md:-mt-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi, I'm <motion.span 
              className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >Nimesh Akalanka</motion.span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-400 dark:text-gray-400 light:text-gray-600 mb-4 md:mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Full Stack Developer | Software Engineer
          </motion.p>
          <motion.p 
            className="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-500 light:text-gray-700 mb-3 md:mb-4 px-4 md:px-0 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            I am a 22-year-old undergraduate pursuing my B.Sc. (Hons) in Information Systems at Sabaragamuwa University of Sri Lanka. I am a passionate full-stack website developer, with skills in both front-end and back-end development.
          </motion.p>
          <motion.p 
            className="text-xs sm:text-sm md:text-base text-gray-500 dark:text-gray-500 light:text-gray-700 mb-4 md:mb-5 px-4 md:px-0 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Since 2021, I have worked as a freelancer on platforms like Fiverr, where I specialize in creating Telegram bots and web applications. This freelance experience has allowed me to apply my technical knowledge to real-world projects and build a strong professional portfolio.
          </motion.p>
          <div className="flex items-center gap-3 md:gap-4 align-center justify-center mb-4">
            
            <section className="flex justify-center items-center relative">
              <a
                href="https://github.com/nimeshakalanka"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex justify-center items-center p-3 w-14 h-14 rounded-md drop-shadow-xl bg-black font-semibold hover:translate-y-2 hover:rounded-[10%] transition-all duration-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 15 15"
                  className="w-6 h-6 text-white pointer-events-none"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    fill="currentColor"
                    d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                  ></path>
                </svg>
                <span
                  className="absolute left-1/2 -translate-x-1/2 top-0 opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-8 transition-all duration-500 whitespace-nowrap pointer-events-none"
                >
                  GitHub
                </span>
              </a>
            </section>

            <section className="flex justify-center items-center relative">
              <a
                href="https://linkedin.com/in/nimesha-akalanka"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex justify-center items-center p-3 w-14 h-14 rounded-md drop-shadow-xl bg-[#0077b5] font-semibold hover:translate-y-2 hover:rounded-[10%] transition-all duration-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1.1em"
                  viewBox="0 0 512 512"
                  strokeWidth="0"
                  fill="currentColor"
                  stroke="currentColor"
                  className="w-6 h-6 text-white pointer-events-none"
                >
                  <path
                    d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"
                  ></path>
                </svg>
                <span
                  className="absolute left-1/2 -translate-x-1/2 top-0 opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-8 transition-all duration-500 whitespace-nowrap pointer-events-none"
                >
                  LinkedIn
                </span>
              </a>
            </section>

            <section className="flex justify-center items-center relative">
              <a
                href="mailto:nimeshakalanka@gmail.com"
                className="group relative flex justify-center items-center p-3 w-14 h-14 rounded-md drop-shadow-xl bg-gradient-to-r from-red-400 to-pink-500 font-semibold hover:translate-y-2 hover:rounded-[10%] transition-all duration-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1.1em"
                  viewBox="0 0 32 32"
                  strokeWidth="0"
                  fill="currentColor"
                  stroke="currentColor"
                  className="w-6 h-6 text-white pointer-events-none"
                >
                  <path
                    d="M28 5H4c-1.104 0-2 .896-2 2v18c0 1.104.896 2 2 2h24c1.104 0 2-.896 2-2V7c0-1.104-.896-2-2-2zm0 4.879L16 18 4 9.879V7l12 8 12-8v2.879zM4 23V11.885l11.446 7.63c.269.18.594.274.921.274s.652-.094.92-.274L28 11.885V23H4z"
                  ></path>
                </svg>
                <span
                  className="absolute left-1/2 -translate-x-1/2 top-0 opacity-0 group-hover:opacity-100 group-hover:text-gray-700 group-hover:text-sm group-hover:-translate-y-8 transition-all duration-500 whitespace-nowrap pointer-events-none"
                >
                  Email
                </span>
              </a>
            </section>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex justify-center"
        >
          <a
            href="/assets/cv.pdf"
            download="Nimesh_Akalanka_CV.pdf"
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-5 h-5" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            <span>Download CV</span>
          </a>
        </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
