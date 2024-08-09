import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'hero', title: 'Building AGI in Europe' },
    { id: 'about', title: 'About Me' },
    { id: 'projects', title: 'Projects' },
    { id: 'tweets', title: 'Latest Tweets' },
    { id: 'contact', title: 'Get in Touch' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-200 via-red-300 to-purple-400 text-gray-800">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-orange-100 bg-opacity-80 backdrop-blur-md">
        <ul className="flex justify-center space-x-6 py-4">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-gray-800 hover:text-purple-600 transition-colors"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          <h1 className="text-6xl font-bold mb-4">Anton Osika</h1>
          <p className="text-2xl mb-8">Building AGI in Europe</p>
          <a
            href="#about"
            className="bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition-colors"
          >
            Learn More
          </a>
        </motion.div>
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://source.unsplash.com/random/1920x1080?ai,technology')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          animate={{
            scale: 1 + scrollY * 0.0005,
            opacity: 1 - scrollY * 0.002,
          }}
        />
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg mb-4">
                Previously worked at CERN and Sana Labs. Co-founded a 2x top YC company.
                Now, I'm focused on building AGI and pushing the boundaries of artificial intelligence.
              </p>
              <p className="text-lg">
                My passion lies in reducing barriers to build and empowering developers with AI-driven tools.
                I'm the creator of gpt-engineer, a popular code generation project that's revolutionizing
                how we approach software development.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://source.unsplash.com/random/600x400?portrait,developer"
                alt="Anton Osika"
                className="rounded-lg shadow-xl"
              />
              <motion.div
                className="absolute -bottom-4 -right-4 bg-purple-500 text-white p-4 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-2xl font-bold">AGI</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen py-20 bg-red-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "gpt-engineer", description: "One prompt generates a codebase. Open-source project for AI-driven code generation." },
              { title: "gpt-engineer App", description: "Web application that allows anyone to build and deploy web apps with plain English." },
              { title: "Lovable", description: "AI startup building software that builds software." },
            ].map((project, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.description}</p>
                </div>
                <div className="bg-purple-500 p-4">
                  <a href="#" className="text-white hover:underline">Learn More</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="tweets" className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Latest Tweets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Introducing gpt-engineer App👶\n\nsince gpt-engineer became the world's most popular codegen project I have been tinkering with the next step: how to make it practical, ie allow anyone to build and deploy web–apps with plain english\n\nMission: Reduce barriers to build",
              "👶🤖 Introducing `gpt-engineer`\n\n▸ One prompt generates a codebase\n▸ Asks clarifying questions\n▸ Generates technical spec\n▸ Writes all necessary code\n▸ Easy to add your own reasoning steps, modify, and experiment\n▸ open source\n▸ Lets you finish a project in one sitting",
              "Happy Valentine's Day everyone!\nAnd happy birthday Dad ❤️(my dad is awesome)\n\nLaunching a new AI startup out of Europe today.\nLovable.\n\nNeedless to say, we're very excited about Lovable. We think it will be huge:\n\nWe're building software that builds software.",
            ].map((tweet, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <p className="text-gray-800 mb-4">{tweet}</p>
                <a href="#" className="text-purple-500 hover:underline">Read more</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="min-h-screen py-20 bg-purple-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl mb-8 text-center">
              Interested in collaborating or learning more about my work? Feel free to reach out!
            </p>
            <div className="flex justify-center space-x-6">
              <motion.a
                href="https://github.com/AntonOsika"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={32} className="text-gray-800 hover:text-purple-600" />
              </motion.a>
              <motion.a
                href="https://twitter.com/antonosika"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter size={32} className="text-gray-800 hover:text-purple-600" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/antonosika/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={32} className="text-gray-800 hover:text-purple-600" />
              </motion.a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Anton Osika. All rights reserved.</p>
        </div>
      </footer>

      {/* Goofy, crazy animations */}
      <motion.div
        className="fixed bottom-4 right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center cursor-pointer z-50"
        whileHover={{ scale: 1.2, rotate: 180 }}
        whileTap={{ scale: 0.8, rotate: -180, borderRadius: "100%" }}
      >
        <span className="text-2xl">🚀</span>
      </motion.div>
    </div>
  );
};

export default Index;
