'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Home() {
  // State to control the display of sections
  const [isAboutVisible, setIsAboutVisible] = useState(true);

  // Function to toggle sections
  const toggleSection = () => {
    setIsAboutVisible(!isAboutVisible);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-green-300 via-teal-200 to-green-400">
      {/* HEADER WITH MOTION */}
      <header className="bg-gradient-to-r from-green-600 via-teal-700 to-green-900 text-white text-center py-16 shadow-lg border-b-4 border-teal-800">
        <motion.h1
          whileHover={{ scale: 1.1, color: '#FF5733' }}
          whileTap={{ scale: 0.9 }}
          className="text-5xl font-extrabold cursor-pointer drop-shadow-md"
        >
          Welcome to My Portfolio
        </motion.h1>

        <motion.p
          whileHover={{ scale: 1.1, color: '#FFC300' }}
          whileTap={{ scale: 0.9 }}
          className="mt-4 text-2xl font-medium drop-shadow-md"
        >
          Student in Laguna State Polytechnic University - San Pablo City
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.2, backgroundColor: '#FF5733' }}
          whileTap={{ scale: 0.8 }}
          onClick={toggleSection} // Toggle the section when clicked
          className="mt-6 px-8 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl focus:ring focus:ring-orange-300 border-2 border-white"
        >
          {isAboutVisible ? 'About IT' : 'About Me'}
        </motion.button>
      </header>

      {/* MAIN CONTENT WITH INFO */}
      <main className="flex-grow p-8 text-center bg-gradient-to-b from-green-50 to-teal-100">
        {/* About Me Section (Initial State) */}
        {isAboutVisible ? (
          <section className="mb-12">
            {/* Circle with Image */}
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-500 shadow-lg">
                <img
                  src="./portfolio.jpg"
                  alt="Profile Picture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <motion.h2
              whileHover={{ scale: 1.1, color: '#34D399' }}
              whileTap={{ scale: 0.9 }}
              className="text-3xl font-bold mb-4 text-gray-800"
            >
              About Me
            </motion.h2>
            <p className="text-lg leading-relaxed border border-green-300 rounded-md p-4 shadow-md bg-white">
              Hi! I'm <strong>Vriejeth R. Barcelos</strong>, a 19-year-old
              college student currently pursuing a
              <strong> Bachelor of Science in Information Technology</strong>. I
              live in Tiaong, Quezon, and I was born on{' '}
              <strong>July 28, 2005</strong>. I love to study because I learned
              a lot and my knowledge increased.
            </p>
            <section className="mt-8">
              <motion.h3
                whileHover={{ scale: 1.1, color: '#34D399' }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl font-bold mb-4 text-gray-800"
              >
                My Interests
              </motion.h3>
              <ul className="text-lg list-disc list-inside border border-green-400 rounded-lg p-6 bg-teal-50 shadow-md">
                <motion.li whileHover={{ scale: 1.1 }} className="py-2">
                  Travel
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }} className="py-2">
                  Game Dev
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }} className="py-2">
                  Photography
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }} className="py-2">
                  Computer Technician
                </motion.li>
              </ul>
            </section>
            <section className="mt-8">
              <motion.h3
                whileHover={{ scale: 1.1, color: '#34D399' }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl font-bold mb-4 text-gray-800"
              >
                My Hobbies
              </motion.h3>
              <ul className="text-lg list-disc list-inside border border-green-400 rounded-lg p-6 bg-teal-50 shadow-md">
                <motion.li whileHover={{ scale: 1.1 }} className="py-2">
                  Watching
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }} className="py-2">
                  Gaming
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }} className="py-2">
                  Eating
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }} className="py-2">
                  Cleaning the House
                </motion.li>
              </ul>
            </section>
            <section className="mt-8">
              <motion.h3
                whileHover={{ scale: 1.1, color: '#34D399' }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl font-bold mb-4 text-gray-800"
              >
                My Achievements
              </motion.h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="border border-green-400 rounded-lg shadow-md p-4 bg-white"
                >
                  <img
                    src="./UCMD.jpg"
                    alt="Achievement 1"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="border border-green-400 rounded-lg shadow-md p-4 bg-white"
                >
                  <img
                    src="./CHBB.jpg"
                    alt="Achievement 2"
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                </motion.div>
              </div>
            </section>
          </section>
        ) : (
          <section className="mb-12">
            <motion.h2
              whileHover={{ scale: 1.1, color: '#34D399' }}
              whileTap={{ scale: 0.9 }}
              className="text-3xl font-bold mb-4 text-gray-800"
            >
              About IT
            </motion.h2>
            <p className="text-lg leading-relaxed border border-gray-300 rounded-md p-4 shadow-md bg-white">
              The field of IT is constantly evolving. It combines creativity and
              logic to build solutions that impact businesses and society. From
              software development to cloud computing, IT professionals are at
              the forefront of technological advancements.
            </p>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: '#6e5494' }}
              whileTap={{ scale: 0.9 }}
              className="mt-6 px-8 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl focus:ring focus:ring-purple-300 border-2 border-white"
              onClick={() =>
                window.open('https://github.com/missuu-cyber', '_blank')
              }
            >
              Visit My GitHub
            </motion.button>
          </section>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-green-800 text-white text-center py-6 shadow-md border-t-4 border-green-700 bg-gradient-to-b from-green-900 to-green-700">
        <p className="text-lg">
          © 2024 Vriejeth R. Barcelos. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
