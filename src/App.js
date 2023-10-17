import React from 'react';
//import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "tailwindcss/tailwind.css";

//import backgroundImage from './bgimg.jpg';
import logo1 from './logo1.jpeg';
import logo2 from './logo2.jpeg';
import logo3 from './logo3.png';
import logo4 from './logo4.png';
import logo5 from './logo5.png';
import logo6 from './logo6.png';
import logo7 from './logo7.png';
import logo8 from './logo8.jpeg';
import Sankalp from './Sankalp.jpeg';
import Sparsh from './Sparsh.jpeg';
import Viren from './Viren.jpeg';
import AIlogo from './puzzle.png';

// // Styles
// const styles = {
//   deepBlue: "#1C1C1C",
//   blueGray: "#808080",
//   lightBlue: "#114084",
//   offWhite: "#F1F1F1",
//   lightOlive: "#3466AA",
// };


const projects = [
  {
    title: 'IIT Kharagpur',
    description: 'NIRF Rank 6',
    image: logo1, // replace with actual import
  },
  {
    title: 'IIT (BHU) Varanasi',
    description: 'NIRF Rank 15',
    image: logo2, // replace with actual import
  },
  {
    title: 'IIT Delhi',
    description: 'NIRF Rank 2',
    image: logo3, // replace with actual import
  },
  {
    title: 'IIT Guwahati',
    description: 'NIRF Rank 7',
    image: logo4, // replace with actual import
  },
  {
    title: 'IIT Mandi',
    description: 'NIRF Rank 33',
    image: logo5, // replace with actual import
  },
  {
    title: 'IIT Indore',
    description: 'NIRF Rank 14',
    image: logo6, // replace with actual import
  },
  {
    title: 'IIT Hydrabad',
    description: 'NIRF Rank 8',
    image: logo7, // replace with actual import
  },
  {
    title: 'IIT Roorkee',
    description: 'NIRF Rank 5',
    image: logo8, // replace with actual import
  }
];

// function App() {

//   const smoothScroll = (id) => {
//     const yOffset = -100;
//     const element = document.getElementById(id);
//     const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

//     window.scrollTo({ top: y, behavior: 'smooth' });
//   }

//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { delayChildren: 0.2, staggerChildren: 0.2 } },
//   };

//   const childVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <div className="min-h-screen font-sans relative" style={{ backgroundColor: styles.offWhite, color: styles.deepBlue }}>

//       <header className="fixed top-0 left-0 right-0 w-full p-4 shadow-lg z-10" style={{ backgroundColor: styles.deepBlue, color: styles.offWhite }}>
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-3xl font-bold">AIC</h1>
//           <nav className="flex space-x-4">
//             <a role="button" aria-label="Go to Intro Section" onClick={() => smoothScroll('intro-section')} className="cursor-pointer hover:text-lightOlive focus:outline-none focus:text-lightOlive">Intro</a>
//             <a role="button" aria-label="Go to Vision Section" onClick={() => smoothScroll('vision-section')} className="cursor-pointer hover:text-blue-400 focus:outline-none focus:text-blue-500">Vision</a>
//             <a role="button" aria-label="Go to Project Carousel Section" onClick={() => smoothScroll('projects-section')} className="cursor-pointer hover:text-blue-400 focus:outline-none focus:text-blue-500">Projects</a>
//             <a role="button" aria-label="Go to Members Section" onClick={() => smoothScroll('members-section')} className="cursor-pointer hover:text-blue-400 focus:outline-none focus:text-blue-500">Members</a>
//             <a role="button" aria-label="Go to Contact Section" onClick={() => smoothScroll('contact-section')} className="cursor-pointer hover:text-blue-400 focus:outline-none focus:text-blue-500">Contact</a>
//           </nav>
//         </div>
//       </header>

//       <motion.section 
//   className="pt-20 mt-16 py-32" 
//   initial={{ opacity: 0 }} 
//   animate={{ opacity: 1 }} 
//   transition={{ duration: 1 }} 
//   style={{ 
//     color: styles.offWhite,
//     backgroundImage: `url(${backgroundImage})`, 
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat'
//   }}
// >
//   <div className="container mx-auto text-center" style={{ clear: 'both' }}>
//     <motion.h2 className="text-6xl font-bold mb-8 leading-tight">Welcome to AI Council</motion.h2>
//     <motion.p className="text-2xl mb-12 mx-auto w-2/3 leading-relaxed">Your leading authority in artificial intelligence innovations</motion.p>
//     <motion.a href="#!" role="button" aria-label="Learn more about AIAIC" whileHover={{ scale: 1.05 }} className="bg-blue-500 text-white py-2 px-8 rounded-full hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" style={{ backgroundColor: styles.lightOlive, color: styles.deepBlue }}>Learn More</motion.a>
//   </div>
// </motion.section>

//       <main className="py-10 px-5" style={{ backgroundColor: styles.lightBlue, color: styles.deepBlue }}>
//       <div className="carousel-wrapper">
//     <Carousel 
//       infiniteLoop 
//       useKeyboardArrows 
//       autoPlay 
//       showThumbs={false}
//     >
//       {logos.map((logo, index) => (
//         <div key={index}>
//           <img src={logo} alt={`Logo ${index + 1}`} style={{ width: '100px', height: '100px' }} /> 
//         </div>
//       ))}
//     </Carousel>
//   </div>
//         <motion.section id="intro-section" className="my-24 p-5 shadow-md" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} style={{ backgroundColor: styles.lightBlue, color: styles.deepBlue }}>
//         <motion.h2 variants={childVariants} className="text-4xl font-bold mb-10 text-center">Who are we?</motion.h2>
//           <p className="text-xl text-gray-400 leading-relaxed mx-auto w-2/3 font-light">The All India Artificial Intelligence Council is a collaborative agglomerate of Artificial intelligence organisation of colleges, with select IITs at the helm.</p>
//         </motion.section>

//         <motion.section id="vision-section" className="my-24 p-5 shadow-md" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} style={{ backgroundColor: styles.lightOlive, color: styles.deepBlue }}>
//         <motion.h2 variants={childVariants} className="text-4xl font-bold mb-10 text-center">Our Vision</motion.h2>
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//       <div className="card p-4 shadow-md">
//         <h3 className="font-bold mb-2">Promote AI research</h3>
//         <p>The council aims to foster a culture of innovation and exploration in the field of AI, driving research and development initiatives across the country.</p>
//       </div>
//       <div className="card p-4 shadow-md">
//         <h3 className="font-bold mb-2">Develop AI applications </h3>
//         <p>The council will collaborate with industry leaders to develop innovative AI applications and use cases that benefit society and provide economic advantages to India.</p>
//       </div>
//       <div className="card p-4 shadow-md">
//         <h3 className="font-bold mb-2">Support AI education</h3>
//         <p>The council will develop curricula for AI education programs in collaboration with leading institutions and organizations to develop the country's AI workforce and foster a workforce ready for the exciting future of AI.</p>
//       </div>
//       </div>
//         </motion.section>

//         <motion.section id="members-section" variants={containerVariants} initial="hidden" animate="visible" className="my-24 p-5 shadow-md" style={{ backgroundColor: styles.offWhite, color: styles.deepBlue }}>
//         <motion.h2 variants={childVariants} className="text-4xl font-bold mb-10 text-center">Members of AI Council</motion.h2>
//           <motion.ul variants={childVariants} className="text-xl text-gray-400 leading-relaxed mx-auto w-2/3 space-y-4">
//           <div className="flex space-x-4">
//               <div className="card">
//         <img src={Sankalp} alt="Sankalp Patidar" style={{ width: '150px', height: '150px' }}/>
//         <h3>Sankalp Patidar (IIT Kharagpur) - President</h3>
//     </div>
//     <div className="card">
//         <img src={Viren} alt="Viren Inaniyan" style={{ width: '150px', height: '150px' }}/>
//         <h3>Viren Inaniyan (IIT Bombay) - Vice-President</h3>
//     </div>
//     <div className="card">
//         <img src={Sparsh} alt="Sparsh Agrawal" style={{ width: '150px', height: '150px' }}/>
//         <h3>Sparsh Agrawal (IIT BHU) - Joint Vice-President</h3>
//     </div>
            
//           </div>
//           </motion.ul>
//         </motion.section>

//         <motion.section id="undertakings-section" variants={containerVariants} initial="hidden" animate="visible" className="my-24 p-5 shadow-md" style={{ backgroundColor: styles.lightBlue, color: styles.deepBlue }}>
//         <motion.h2 variants={childVariants} className="text-4xl font-bold mb-10 text-center">Undertakings</motion.h2>
//           <motion.p variants={childVariants} className="text-xl text-gray-400 leading-relaxed mx-auto w-2/3">
//             The AIC has taken several initiatives to promote AI research and applications in India. This includes setting up AI labs across universities, funding groundbreaking research, and hosting annual AI conferences. We're also involved in policy-making, advocating for ethical AI practices, and ensuring its safe and beneficial use.
//           </motion.p>
//         </motion.section>

//         <motion.section id="contact-section" variants={containerVariants} initial="hidden" animate="visible" className="my-24 p-5 shadow-md" style={{ backgroundColor: styles.lightOlive, color: styles.deepBlue }}>
//         <motion.h2 variants={childVariants} className="text-4xl font-bold mb-10 text-center">Contact Us</motion.h2>
//     <motion.p variants={childVariants} className="text-xl leading-relaxed mx-auto w-2/3">
//       Have questions or wish to collaborate with us? Reach out at <a href="mailto:contact@aiaic.org" className="underline text-blue-500 hover:text-blue-700">contact@aiaic.org</a>.
//     </motion.p>
//   </motion.section>

//       </main>

//       <footer className="py-12 mt-16" style={{ backgroundColor: styles.deepBlue, color: styles.offWhite }}>
//         <div className="container mx-auto text-center">
//           <p className="text-lg">&copy; 2023 All India Artificial Intelligence Council. All rights reserved.</p>
//         </div>
//       </footer>

//     </div>
//   );
// }

// export default App;


// import { motion } from 'framer-motion';
// import backgroundImage from './bgimg.jpg';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// Import images here as you did in your original code

// Styles
//const styles = {
//   black: "#000",
//   white: "#fff",
//   gray: "#707070",
// };

// Refer logos array here as you did in your original code
function App() {
  // Your smoothScroll function here

    return (
      <div className="font-sans min-h-screen bg-gray-100 text-gray-900">
      
        {/* Updated Header */}
        <header className="w-full shadow-lg bg-white sticky top-0">
          <div className="w-full px-6 py-3 mx-auto max-w-7xl md:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img src={AIlogo} alt="AI Council of India logo" className="h-10 w-auto" />
                <h1 className="text-xl font-bold text-blue-500 uppercase">AIC</h1>
              </div>
              <nav className="hidden md:flex space-x-4">
                <a href="#intro-section" className="text-gray-900 hover:text-blue-500">Intro</a>
                <a href="#vision-section" className="text-gray-900 hover:text-blue-500">Vision</a>
                <a href="#projects-section" className="text-gray-900 hover:text-blue-500">Projects</a>
                <a href="#members-section" className="text-gray-900 hover:text-blue-500">Members</a>
                <a href="#contact-section" className="text-gray-900 hover:text-blue-500">Contact</a>
              </nav>
            </div>
          </div>
        </header>

      {/* Hero section */}
<section className="bg-blue-500 py-20">
  <div className="container mx-auto px-6 md:px-8">
    <div className="text-center">
      <img src={AIlogo} alt="AI Council of India logo" className="h-32 w-auto mx-auto mb-8"/>
      <h2 className="text-4xl md:text-5xl text-white font-semibold">Welcome to AI Council of India</h2>
      <p className="text-white text-xl leading-relaxed mt-6 mx-auto w-3/4 md:w-1/2">We are your leading authority in artificial intelligence innovations, fostering a vibrant AI ecosystem in India.</p>
      <div className="flex justify-center mt-6">
        <a href="#!" className="mx-3 py-2 px-6 text-white text-sm font-medium rounded-md border border-white hover:bg-white hover:text-blue-500 transition-colors duration-300">
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>

      {/* Projects Carousel Section */}
<section className="w-full py-20">
  <div className="container mx-auto px-6 md:px-8">
    <h2 className="text-center text-4xl md:text-5xl text-blue-500 font-semibold mb-10">Our Members</h2>
    <div className="carousel-wrapper">
    <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} className="mx-auto">
  {projects.map((project, index) => (
    <div key={index} className="flex flex-col items-center">
      <img src={project.image} alt={`Project ${index + 1}`} className="w-48 h-48 object-contain mb-6" />
      <h3 className="text-2xl text-blue-500 mb-2">{project.title}</h3>
      <p className="text-lg text-gray-600 text-center">{project.description}</p>
    </div>
  ))}
</Carousel>
    </div>
  </div>
</section>

      {/* Intro Section */}
<section id="intro-section" className="w-full py-20 bg-gray-50">
  <div className="container mx-auto px-6 md:px-8">
    <h2 className="text-center text-4xl md:text-5xl text-blue-500 font-semibold mb-10">About Us</h2>
    <p className="text-lg text-gray-600 leading-relaxed mx-auto w-full md:w-3/4 lg:w-1/2 text-center">The All India Artificial Intelligence Council is a collaborative agglomerate of Artificial intelligence organisations of colleges, with select IITs at the helm. We foster a culture of innovation and exploration in the field of AI, driving research and development initiatives across the country.</p>
  </div>
</section>
      
      {/* Vision Section */}
<section id="vision-section" className="w-full py-20 bg-white">
  <div className="container mx-auto px-6 md:px-8">
    <h2 className="text-center text-4xl md:text-5xl text-blue-500 font-semibold mb-10">Our Objective</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="card p-4 shadow-md bg-gray-50 rounded-md">
        <h3 className="font-bold text-2xl mb-2">Promote AI research</h3>
        <p className="text-lg text-gray-600">The council aims to foster a culture of innovation and exploration in the field of AI, driving research and development initiatives across the country.</p>
      </div>
      <div className="card p-4 shadow-md bg-gray-50 rounded-md">
        <h3 className="font-bold text-2xl mb-2">Develop AI applications </h3>
        <p className="text-lg text-gray-600">The council will collaborate with industry leaders to develop innovative AI applications and use cases that benefit society and provide economic advantages to India.</p>
      </div>
      <div className="card p-4 shadow-md bg-gray-50 rounded-md">
        <h3 className="font-bold text-2xl mb-2">Support AI education</h3>
        <p className="text-lg text-gray-600">The council will develop curricula for AI education programs in collaboration with leading institutions and organizations to develop the country's AI workforce and foster a workforce ready for the exciting future of AI.</p>
      </div>
    </div>
  </div>
</section>

      {/* Members Section */}
<section id="members-section" className="w-full py-20 bg-gray-50">
  <div className="container mx-auto px-6 md:px-8">
    <h2 className="text-center text-4xl md:text-5xl text-blue-500 font-semibold mb-10">Heads of AI Council</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="card p-4 shadow-md bg-white rounded-md text-center">
        <img src={Sankalp} alt="Sankalp Patidar" className="w-48 h-48 object-cover rounded-full mx-auto mb-4"/>
        <h3 className="font-bold text-2xl mb-2">Sankalp Patidar</h3>
        <p className="text-lg text-gray-600">IIT Kharagpur - President</p>
      </div>
      <div className="card p-4 shadow-md bg-white rounded-md text-center">
        <img src={Viren} alt="Viren Inaniyan" className="w-48 h-48 object-cover rounded-full mx-auto mb-4"/>
        <h3 className="font-bold text-2xl mb-2">Viren Inaniyan</h3>
        <p className="text-lg text-gray-600">IIT Bombay - Vice-President</p>
      </div>
      <div className="card p-4 shadow-md bg-white rounded-md text-center">
        <img src={Sparsh} alt="Sparsh Agrawal" className="w-48 h-48 object-cover rounded-full mx-auto mb-4"/>
        <h3 className="font-bold text-2xl mb-2">Sparsh Agrawal</h3>
        <p className="text-lg text-gray-600">IIT BHU - Joint Vice-President</p>
      </div>
    </div>
  </div>
</section>

{/* Goals of the AI Council */}
<section id="goals-section" className="w-full py-20 bg-gray-50">
  <div className="container mx-auto px-6 md:px-8">
    <h2 className="text-center text-4xl md:text-5xl text-blue-500 font-semibold mb-10">Goals of the AI Council</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="card p-4 shadow-md bg-white rounded-md text-center">
        <h3 className="font-bold text-2xl mb-2">Promote development and ethical use of AI in India</h3>
      </div>
      <div className="card p-4 shadow-md bg-white rounded-md text-center">
        <h3 className="font-bold text-2xl mb-2">Foster collaboration and knowledge sharing</h3>
      </div>
      <div className="card p-4 shadow-md bg-white rounded-md text-center">
        <h3 className="font-bold text-2xl mb-2">Drive innovation in the field of AI</h3>
      </div>
      <div className="card p-4 shadow-md bg-white rounded-md text-center">
        <h3 className="font-bold text-2xl mb-2">Create a sustainable and inclusive AI ecosystem</h3>
      </div>
    </div>
  </div>
</section>

{/* Activities and Initiatives of the Council */}
<section id="activities-section" className="w-full py-20 bg-gray-50">
  <div className="container mx-auto px-6 md:px-8">
    <h2 className="text-center text-4xl md:text-5xl text-blue-500 font-semibold mb-10">Activities and Initiatives of the Council</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="card p-4 shadow-md bg-white rounded-md text-center">
        <h3 className="font-bold text-2xl mb-2">AI Conferences and Workshops</h3>
        <p className="text-lg text-gray-600">The council aims to organize and host various AI conferences and workshops to promote discourse and collaboration, and provide a platform for sharing the latest industry updates and research findings.</p>
      </div>
      <div className="card p-4 shadow-md bg-white rounded-md text-center">
        <h3 className="font-bold text-2xl mb-2">Resources and Platform</h3>
        <p className="text-lg text-gray-600">The council will work with experts to provide resources and platforms for learning industrial application of AI to build capacity of the beneficiaries in organizations across India.</p>
      </div>
      <div className="card p-4 shadow-md bg-white rounded-md text-center">
        <h3 className="font-bold text-2xl mb-2">AI Competitions and Hackathons</h3>
        <p className="text-lg text-gray-600">The council will partner with colleges and organizations to host AI-related competitions and hackathons to facilitate the development of innovative solutions in the field of AI.</p>
      </div>
    </div>
  </div>
</section>

{/* Benefits of Joining the AI Council */}
<section id="benefits-section" className="w-full py-20 bg-white">
  <div className="container mx-auto px-6 md:px-8">
    <h2 className="text-center text-4xl md:text-5xl text-blue-500 font-semibold mb-10">Benefits of Joining the AI Council</h2>
    <p className="text-lg text-gray-600 leading-relaxed mx-auto w-full md:w-3/4 lg:w-1/2 text-center">By joining the All India Artificial Intelligence Council, institutes can benefit from a range of valuable resources and opportunities: sponsorships for fests and events, AI and AWS credits, tie-ups with top companies. These benefits will empower institutes to drive AI innovation, foster collaborations, and create a brighter future for the AI community in India.</p>
  </div>
</section>



{/* Undertakings Section */}
{/* <section id="undertakings-section" className="w-full py-20 bg-white">
  <div className="container mx-auto px-6 md:px-8">
    <h2 className="text-center text-4xl md:text-5xl text-blue-500 font-semibold mb-10">Undertakings</h2>
    <p className="text-lg text-gray-600 leading-relaxed mx-auto w-full md:w-3/4 lg:w-1/2 text-center">The AIC has taken several initiatives to promote AI research and applications in India. This includes setting up AI labs across universities, funding groundbreaking research, and hosting annual AI conferences. We're also involved in policy-making, advocating for ethical AI practices, and ensuring its safe and beneficial use.</p>
  </div>
</section> */}

{/* Register Now Section */}
<section id="register-section" className="w-full py-20 bg-white">
  <div className="container mx-auto px-6 md:px-8">
    <h2 className="text-center text-4xl md:text-5xl text-blue-500 font-semibold mb-10">Register Now</h2>
    <div className="flex justify-center">
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeEKseSnQGvth53XMc-LTel5qM6_97BlSj20QepWHvHO6QQVQ/viewform?embedded=true" width="640" height="1977" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
  </div>
</section>

     {/* Contact Us Section */}
<section id="contact-section" className="w-full py-20 bg-gray-50">
  <div className="container mx-auto px-6 md:px-8">
    <h2 className="text-center text-4xl md:text-5xl text-blue-500 font-semibold mb-10">Contact Us</h2>
    <p className="text-lg text-gray-600 leading-relaxed mx-auto w-full md:w-3/4 lg:w-1/2 text-center">Have questions or wish to collaborate with us? Reach out at <a href="mailto:contact@aiaic.org" className="underline text-blue-500 hover:text-blue-700">contact@aiaic.org</a>.</p>
  </div>
</section>

      {/* Footer */}
      <footer className="w-full bg-blue-500 py-8 text-white">
        <div className="px-6 mx-auto max-w-7xl md:px-8">
          <p className="text-center text-sm">&copy; 2023 All India Artificial Intelligence Council. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
//   // Your smoothScroll function here

//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { delayChildren: 0.2, staggerChildren: 0.2 } },
//   };

//   const childVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <div className="min-h-screen font-sans relative" style={{ backgroundColor: styles.black, color: styles.white }}>

//       <header className="fixed top-0 left-0 right-0 w-full p-4 shadow-lg z-10" style={{ backgroundColor: styles.black, color: styles.white }}>
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-3xl font-bold">AIC</h1>
//           <nav className="flex space-x-4">
          
//           </nav>
//         </div>
//       </header>
//       <motion.section 
//         className="pt-20 mt-16 py-32"
//         initial={{ opacity: 0 }} 
//         animate={{ opacity: 1 }} 
//         transition={{ duration: 1 }} 
//         style={{ 
//           color: styles.white,
//           backgroundImage: `url(${backgroundImage})`, 
//           backgroundPosition: 'center',
//           backgroundSize: 'cover',
//           backgroundRepeat: 'no-repeat'
//         }}
//       >
//         <div className="container mx-auto text-center" style={{ clear: 'both' }}>
//           <motion.h2 className="text-6xl font-bold mb-8 leading-tight">Welcome to AI Council</motion.h2>
//           <motion.p className="text-2xl mb-12 mx-auto w-2/3 leading-relaxed">Your leading authority in artificial intelligence innovations</motion.p>
//           <motion.a href="#!" role="button" aria-label="Learn more about AIAIC" whileHover={{ scale: 1.05 }} className="bg-white text-black py-2 px-8 rounded-full hover:bg-gray-300 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">Learn More</motion.a>
//         </div>
//       </motion.section>

//       <main className="py-10 px-5" style={{ backgroundColor: styles.black, color: styles.white }}>
//         {/* Carousel Section */}
//         <div className="carousel-wrapper">
//           <Carousel 
//             infiniteLoop 
//             useKeyboardArrows 
//             autoPlay 
//             showThumbs={false}
//           >
//             {logos.map((logo, index) => (
//               <div key={index}>
//                 <img src={logo} alt={`Logo${index + 1}`} style={{ width: '100px', height: '100px' }} /> 
//               </div>
//             ))}
//           </Carousel>
//         </div>

//         {/* Intro Section */}
//           <motion.section id="intro-section" className="my-24 p-5 shadow-md" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} style={{ backgroundColor: styles.white, color: styles.black }}>
//           <motion.h2 variants={childVariants} className="text-4xl font-bold mb-10 text-center">Who are we?</motion.h2>
//             <p className="text-xl text-gray-500 leading-relaxed mx-auto w-2/3 font-light">The All India Artificial Intelligence Council is a collaborative agglomerate of Artificial intelligence organisation of colleges, with select IITs at the helm.</p>
//         </motion.section>

//         {/* Vision Section */}
//         <motion.section id="vision-section" className="my-24 p-5 shadow-md" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} style={{ backgroundColor: styles.black, color: styles.white }}>
//           <motion.h2 variants={childVariants} className="text-4xl font-bold mb-10 text-center">Our Vision</motion.h2>
//   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//     <div className="card p-4 shadow-md" style={{ backgroundColor: styles.gray, color: styles.white }}>
//       <h3 className="font-bold mb-2">Promote AI research</h3>
//       <p>The council aims to foster a culture of innovation and exploration in the field of AI, driving research and development initiatives across the country.</p>
//     </div>
//     <div className="card p-4 shadow-md" style={{ backgroundColor: styles.gray, color: styles.white }}>
//       <h3 className="font-bold mb-2">Develop AI applications </h3>
//       <p>The council will collaborate with industry leaders to develop innovative AI applications and use cases that benefit society and provide economic advantages to India.</p>
//     </div>
//     <div className="card p-4 shadow-md" style={{ backgroundColor: styles.gray, color: styles.white }}>
//       <h3 className="font-bold mb-2">Support AI education</h3>
//       <p>The council will develop curricula for AI education programs in collaboration with leading institutions and organizations to develop the country's AI workforce and foster a workforce ready for the exciting future of AI.</p>
//     </div>
//   </div>
// </motion.section>

// {/* Members Section */}
// <motion.section id="members-section" variants={containerVariants} initial="hidden" animate="visible" className="my-24 p-5 shadow-md" style={{ backgroundColor: styles.white, color: styles.black }}>
//   <motion.h2 variants={childVariants} className="text-4xl font-bold mb-10 text-center">Members of AI Council</motion.h2>
//     <motion.ul variants={childVariants} className="text-xl text-gray-500 leading-relaxed mx-auto w-2/3 space-y-4">
//     <div className="flex space-x-4">
//         <div className="card">
//       <img src={Sankalp} alt="Sankalp Patidar" style={{ width: '150px', height: '150px' }}/>
//       <h3>Sankalp Patidar (IIT Kharagpur) - President</h3>
//   </div>
//   <div className="card">
//       <img src={Viren} alt="Viren Inaniyan" style={{ width: '150px', height: '150px' }}/>
//       <h3>Viren Inaniyan (IIT Bombay) - Vice-President</h3>
//   </div>
//   <div className="card">
//       <img src={Sparsh} alt="Sparsh Agrawal" style={{ width: '150px', height: '150px' }}/>
//       <h3>Sparsh Agrawal (IIT BHU) - Joint Vice-President</h3>
//   </div>
      
//     </div>
//     </motion.ul>
// </motion.section>

// {/* Undertakings Section */}
// <motion.section id="undertakings-section" variants={containerVariants} initial="hidden" animate="visible" className="my-24 p-5 shadow-md" style={{ backgroundColor: styles.black, color: styles.white }}>
//   <motion.h2 variants={childVariants} className="text-4xl font-bold mb-10 text-center">Undertakings</motion.h2>
//     <motion.p variants={childVariants} className="text-xl text-gray-500 leading-relaxed mx-auto w-2/3">
//       The AIC has taken several initiatives to promote AI research and applications in India. This includes setting up AI labs across universities, funding groundbreaking research, and hosting annual AI conferences. We're also involved in policy-making, advocating for ethical AI practices, and ensuring its safe and beneficial use.
//     </motion.p>
// </motion.section>

// {/* Contact Us Section */}
// <motion.section id="contact-section" variants={containerVariants} initial="hidden" animate="visible" className="my-24 p-5 shadow-md" style={{ backgroundColor: styles.white, color: styles.black }}>
//   <motion.h2 variants={childVariants} className="text-4xl font-bold mb-10 text-center">Contact Us</motion.h2>
//   <motion.p variants={childVariants} className="text-xl leading-relaxed mx-auto w-2/3">
//     Have questions or wish to collaborate with us? Reach out at <a href="mailto:contact@aiaic.org" className="underline text-gray-500 hover:text-gray-700">contact@aiaic.org</a>.
//   </motion.p>
// </motion.section>


//       </main>
//       <footer className="py-12 mt-16" style={{ backgroundColor: styles.black, color: styles.gray }}>
//         <div className="container mx-auto text-center">
//           <p className="text-lg">&copy; 2023 All India Artificial Intelligence Council. All rights reserved.</p>
//         </div>
//       </footer>

//     </div>
//   );
// }

// export default App;