import { motion } from 'framer-motion';


function App() {

  const smoothScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div className="min-h-screen bg-gray-100 font-sans">

      <header className="fixed top-0 w-full bg-blue-600 text-white p-4 shadow-md z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-semibold">AIAIC</h1>
          <nav className="flex space-x-4">
            <a onClick={() => smoothScroll('intro-section')} className="cursor-pointer hover:text-gray-300">Intro</a>
            <a onClick={() => smoothScroll('vision-section')} className="cursor-pointer hover:text-gray-300">Vision</a>
            <a href="#!" className="hover:text-gray-300">Members</a>
            <a href="#!" className="hover:text-gray-300">Contact</a>
          </nav>
        </div>
      </header>

      <motion.section className="mt-16 bg-blue-600 text-white py-32" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="container mx-auto text-center">
          <motion.h2 className="text-5xl mb-6">Welcome to AIAIC</motion.h2>
          <motion.p className="text-2xl mb-8 mx-auto w-2/3">Your leading authority in artificial intelligence innovations</motion.p>
          <motion.a href="#!" whileHover={{ scale: 1.05 }} className="bg-white text-blue-600 py-2 px-6 rounded-full hover:bg-gray-200 transition duration-300">Learn More</motion.a>
        </div>
      </motion.section>

      <main className="py-10 px-5">

        <motion.section id="intro-section" className="my-20" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
          <h2 className="text-3xl mb-8">AI Council - Intro</h2>
          <p className="text-lg text-gray-700 leading-relaxed mx-auto w-2/3">
            Founded in 2022, the All India Artificial Intelligence Council (AIAIC) was established with the goal of bringing together experts, researchers, and enthusiasts in the field of AI. As a premier organization, AIAIC serves as a platform for the exchange of knowledge, fostering collaborations, and setting standards in AI research and applications across India.
          </p>
        </motion.section>

        <motion.section id="vision-section" className="my-20" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }}>
          <h2 className="text-3xl mb-8">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed mx-auto w-2/3">
            We envision a future where AI-driven technologies seamlessly integrate into every aspect of our lives, enhancing our day-to-day experiences, propelling businesses forward, and solving complex societal challenges. Through continuous education, research, and public-private partnerships, we aim to position India as a global leader in AI innovations and its ethical implementations.
          </p>
        </motion.section>

      </main>

      <footer className="bg-blue-600 text-white py-12 mt-16">
        <div className="container mx-auto flex justify-between items-center flex-wrap">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h1 className="text-2xl font-semibold mb-2">AIAIC</h1>
            <p>&copy; 2023, AIAIC. All rights reserved.</p>
          </div>
          <nav className="flex space-x-4">
            <a href="#!" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#!" className="hover:text-gray-300">Terms of Service</a>
          </nav>
        </div>
      </footer>

    </div>
  );
}

export default App;
