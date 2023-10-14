import { motion } from 'framer-motion';

function App() {

  const smoothScroll = (id) => {
    const yOffset = -100;
    const element = document.getElementById(id);
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { delayChildren: 0.2, staggerChildren: 0.2 } },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-sans relative">

      <header className="fixed top-0 left-0 right-0 w-full bg-black text-white p-4 shadow-lg z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">AIAIC</h1>
          <nav className="flex space-x-4">
            <a role="button" aria-label="Go to Intro Section" onClick={() => smoothScroll('intro-section')} className="cursor-pointer hover:text-blue-400 focus:outline-none focus:text-blue-500">Intro</a>
            <a role="button" aria-label="Go to Vision Section" onClick={() => smoothScroll('vision-section')} className="cursor-pointer hover:text-blue-400 focus:outline-none focus:text-blue-500">Vision</a>
            <a role="button" aria-label="Go to Project Carousel Section" onClick={() => smoothScroll('projects-section')} className="cursor-pointer hover:text-blue-400 focus:outline-none focus:text-blue-500">Projects</a>
            <a role="button" aria-label="Go to Members Section" onClick={() => smoothScroll('members-section')} className="cursor-pointer hover:text-blue-400 focus:outline-none focus:text-blue-500">Members</a>
            <a role="button" aria-label="Go to Contact Section" onClick={() => smoothScroll('contact-section')} className="cursor-pointer hover:text-blue-400 focus:outline-none focus:text-blue-500">Contact</a>
          </nav>
        </div>
      </header>

      <motion.section className="pt-20 mt-16 bg-black text-white py-32" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="container mx-auto text-center">
          <motion.h2 className="text-6xl font-bold mb-8 leading-tight">Welcome to AIAIC</motion.h2>
          <motion.p className="text-2xl mb-12 mx-auto w-2/3 leading-relaxed">Your leading authority in artificial intelligence innovations</motion.p>
          <motion.a href="#!" role="button" aria-label="Learn more about AIAIC" whileHover={{ scale: 1.05 }} className="bg-blue-500 text-white py-2 px-8 rounded-full hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Learn More</motion.a>
        </div>
      </motion.section>

      <main className="py-10 px-5">

        <motion.section id="intro-section" className="my-24" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
          <h2 className="text-4xl font-bold mb-10">AI Council - Intro</h2>
          <p className="text-xl text-gray-400 leading-relaxed mx-auto w-2/3">
            The All India Artificial Intelligence Council is a collaborative agglomerate of Artificial intelligence organisation
            of colleges, with select IITs at the helm.
          </p>
        </motion.section>

        <motion.section id="vision-section" className="my-24" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
          <h2 className="text-4xl font-bold mb-10">Our Vision</h2>
          <p className="text-xl text-gray-400 leading-relaxed mx-auto w-2/3">
            <ul>
              <li>1. Promote AI
                research
                The council aims to foster a
                culture of innovation and
                exploration in the field of AI,
                driving research and
                development initiatives across
                the country.</li>
              <li>
                2. Develop AI
                applications
                The council will collaborate with
                industry leaders to develop
                innovative AI applications and
                use cases that benefit society
                and provide economic
                advantages to India.</li>
              <li>
                3. Support AI
                education
                The council will develop
                curricula for AI education
                programs in collaboration with
                leading institutions and
                organizations to develop the
                country's AI workforce and
                foster a workforce ready for the
                exciting future of AI.</li>
            </ul>
          </p>
        </motion.section>

        <motion.section id="members-section" variants={containerVariants} initial="hidden" animate="visible" className="my-24">
          <motion.h2 variants={childVariants} className="text-4xl font-bold mb-10">Members of AI Council</motion.h2>
          <motion.ul variants={childVariants} className="text-xl text-gray-400 leading-relaxed mx-auto w-2/3 space-y-4">
            <li>Sankalp Patidar (IIT Kharagpur) - President</li>
            <li>Viren Inaniyan (IIT Bombay) - Vice-President</li>
            <li>Sparsh Agrawal (IIT BHU) - Joint Vice-President</li>
          </motion.ul>
        </motion.section>

        <motion.section id="undertakings-section" variants={containerVariants} initial="hidden" animate="visible" className="my-24">
          <motion.h2 variants={childVariants} className="text-4xl font-bold mb-10">Undertakings</motion.h2>
          <motion.p variants={childVariants} className="text-xl text-gray-400 leading-relaxed mx-auto w-2/3">
            The AIAIC has taken several initiatives to promote AI research and applications in India. This includes setting up AI labs across universities, funding groundbreaking research, and hosting annual AI conferences. We're also involved in policy-making, advocating for ethical AI practices, and ensuring its safe and beneficial use.
          </motion.p>
        </motion.section>

        <motion.section id="projects-section" variants={containerVariants} initial="hidden" animate="visible" className="my-24">
          <motion.h2 variants={childVariants} className="text-4xl font-bold mb-10">Project Carousel</motion.h2>

          <div className="bg-gray-700 h-64 rounded-md flex items-center justify-center">
            <span className="text-white text-xl">Featured AI Projects (Carousel Placeholder)</span>
          </div>
        </motion.section>

        <motion.section id="contact-section" variants={containerVariants} initial="hidden" animate="visible" className="my-24">
          <motion.h2 variants={childVariants} className="text-4xl font-bold mb-10">Contact Us</motion.h2>
          <motion.p variants={childVariants} className="text-xl text-gray-400 leading-relaxed mx-auto w-2/3">
            Have questions or wish to collaborate with us? Reach out at <a href="mailto:contact@aiaic.org" className="underline">contact@aiaic.org</a>.
          </motion.p>
        </motion.section>

      </main>

      <footer className="bg-black text-white py-12 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-lg">&copy; 2023 All India Artificial Intelligence Council. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

export default App;