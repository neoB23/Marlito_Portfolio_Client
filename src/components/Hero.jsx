import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const educationData = [
    {
        institution: "ICCT CAINTA",
        period: "2023 - Present",
        description: "Currently a 2nd-year college student with a strong passion for front-end development. I am deeply engaged in learning and mastering modern web technologies, focusing on creating intuitive and visually appealing user interfaces. My studies and personal projects allow me to explore various front-end frameworks and tools."
    },
    {
        institution: "ICCT CAINTA",
        period: "2020-2022",
        description: "Graduated from ICCT CAINTA with a focus on the Science, Technology, Engineering, and Mathematics (STEM) strand. This program provided a solid foundation in scientific and mathematical disciplines, preparing me for advanced studies and careers in these fields."
    },
    {
        institution: "Mayamot National High School",
        period: "2010-2020",
        description: "Graduated from elementary and high school with honors, demonstrating a strong commitment to academic excellence and a consistent track record of high performance throughout my educational journey."
    }
];
const projects = [
  {
      title: 'KickCraze',
      img: '/images/ss1.png',
      skills: ['ReactJS', 'Tailwind'],
      description: 'I challenged myself to develop an e-commerce website using the React.js framework and Vite to enhance my skills.',
      link: 'https://example.com/kickcraze',
      svg1: 'https://github.com/neoB23/KickCraze_Ecommerce-Website',
      svg2: 'https://example.com/svg2',
  },
  {
      title: 'NU LANDING PAGE',
      img: '/images/ss2.png',
      skills: ['HTML', 'CSS'],
      description: 'To enhance my skills in HTML and CSS, I challenged myself to clone the landing page of NU.',
      link: 'https://example.com/nu-landing-page',
      svg1: 'https://github.com/neoB23/NU-CLONE-FRONT-END-PRACTICE',
  },
  {
      title: 'NBA ROSTER',
      img: '/images/ss3.png',
      skills: ['HTML', 'CSS'],
      description: 'I took on the challenge of creating a responsive landing page to enhance my front-end skills. This project helped me improve my abilities in HTML, CSS, and responsive design, focusing on creating adaptable and user-friendly layouts.',
      link: 'https://nbaroster.netlify.app/',
      svg1: 'https://github.com/neoB23/NBA-ROSTER-FRONT-END',
      svg2: 'https://nbaroster.netlify.app/',
  },
  {
      title: 'GYM MEMBERSHIP SYSTEM',
      img: '/images/ss4.png',
      skills: ['C#', 'MYSQL'],
      description: 'This is my project from my second year, which allows users to avail gym memberships and enables admins to manage the gym.',
      link: 'https://example.com/gym-membership',
      svg1: 'https://github.com/neoB23/GYM-MEMBERSHIP-MANAGEMENT-SYSTEM',
  },
  {
      title: 'CAR MANAGEMENT SYSTEM',
      img: '/images/ss5.png',
      skills: ['C#', 'MYSQL'],
      description: 'This is my first-year project and the first complete project I\'ve ever created. It\'s a management system where users can rent cars, and admins can manage the rentals.',
      link: 'https://example.com/car-management',
      svg1: 'https://github.com/neoB23/CAR-RENTAL-SYSTEM',
  },
  {
      title: 'PORTFOLIO V1',
      img: '/images/ss6.png',
      skills: ['HTML', 'CSS'],
      description: 'This is my first attempt at creating a portfolio website without using any frameworks.',
      link: 'https://example.com/portfolio-v1',
      svg1: 'https://github.com/neoB23/Portfolio-V1',
  }
];
const experienceData = [
    {
        title: "NC II TRAINING",
        period: "PRESENT",
        description: "Completed NC II training at TESDA, where I mastered skills in networking, PC assembly, and configuring computers. This training provided me with hands-on experience and technical expertise in managing and maintaining computer systems."
    }
];

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

function Hero() {
  useEffect(() => {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
    });
}, []);

const [expanded, setExpanded] = useState(Array(6).fill(false));

const toggleExpand = (index) => {
    setExpanded((prev) => {
        const newExpanded = [...prev];
        newExpanded[index] = !newExpanded[index];
        return newExpanded;
    });
};
  const controls = useAnimation();
  
      useEffect(() => {
          const handleScroll = () => {
              const elements = document.querySelectorAll('.animate-on-scroll');
              elements.forEach(element => {
                  const rect = element.getBoundingClientRect();
                  if (rect.top < window.innerHeight && rect.bottom > 0) {
                      controls.start('visible');
                  }
              });
          };
  
          window.addEventListener('scroll', handleScroll);
          handleScroll(); // Initial check
  
          return () => {
              window.removeEventListener('scroll', handleScroll);
          };
      }, [controls]);
  
  return (
    <div>
    <div className="flex flex-col items-center justify-center min-h-screen pt-24 bg-neutral-950 pattern-boxes">
      <header className="text-center mb-10 px-4">
        {/* Circle Image */}
        <div className="mb-6 items-center justify-center flex">
          <motion.img
            src="Images/Screenshot 2025-02-20 152533.png"
            alt="Profile"
            className="w-44 h-44 rounded-full border-4 border-white shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Hero Text */}
        <motion.h2
          className="text-xl sm:text-3xl font-thin text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi <span className="wave">👋</span>, I'm Marlito Bebiro
        </motion.h2>
        <motion.h2
          className="text-5xl sm:text-7xl font-bold text-white mt-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-gradient">Front-End Developer</span>
        </motion.h2>
        <motion.h3
          className="text-sm sm:text-xl font-thin text-white pt-2 leading-relaxed"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          from Philippines📍, currently taking BS Information Technology💻
        </motion.h3>
      </header>

      {/* Buttons */}
      <div className="flex flex-row items-center space-x-4 text-xl mb-24">
        <motion.a
          href="/"
          className="flex items-center px-5 py-3 sm:px-7 sm:py-4 bg-white text-black rounded-full hover:bg-neutral-400 transition duration-300 text-sm sm:text-base"
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.7 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="mr-2"
          >
            <path
              fill="black"
              fillRule="evenodd"
              d="M4.172 3.172C3 4.343 3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828C5.343 22 7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172C21 19.657 21 17.771 21 14v-4c0-3.771 0-5.657-1.172-6.828C18.657 2 16.771 2 13 2h-2C7.229 2 5.343 2 4.172 3.172M8 9.25a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5zm0 4a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5z"
              clipRule="evenodd"
            />
          </svg>
          Resume
        </motion.a>

        <motion.a
          href="mailto:justinparlan123@gmail.com"
          className="flex items-center px-5 py-3 sm:px-7 sm:py-4 bg-neutral-600 text-white rounded-full hover:bg-neutral-700 transition duration-300 text-sm sm:text-base"
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.8 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 14 14"
            className="mr-2"
          >
            <path
              fill="white"
              fillRule="evenodd"
              d="M11.132.063H3.046A2.178 2.178 0 0 0 .869 2.18v9.574a2.177 2.177 0 0 0 2.177 2.175h9.037a.75.75 0 0 0 0-1.5h-.2V10.9a1.698 1.698 0 0 0 .95-1.527v-7.61A1.701 1.701 0 0 0 11.132.062ZM2.567 12.23a.677.677 0 0 1 .479-1.155h7.336v1.354H3.046a.677.677 0 0 1-.48-.199Zm6.01-3.906a1.702 1.702 0 0 1-1.053-.089a9.546 9.546 0 0 1-3.278-3.278A1.71 1.71 0 0 1 4.708 3l.246-.246a.533.533 0 0 1 .732-.096l.796.796a.533.533 0 0 1-.096.732a.533.533 0 0 0-.095.732L7.563 6.19a.533.533 0 0 0 .732-.095A.533.533 0 0 1 9.027 6l.796.795a.533.533 0 0 1-.096.732l-.246.247a1.702 1.702 0 0 1-.903.55Z"
              clipRule="evenodd"
            />
          </svg>
          Contact
        </motion.a>
      </div>  
    </div>

        {/* Project Section */}
    <div id="project" className="min-h-screen">

      {/* content of the project section */}
        <div>
        <section className="sm:pt-44 pt-24">
            <h1 className="text-white justify-center flex item-center font-bold text-3xl lg:text-5xl font-abc">Project</h1>
            <p className="text-white justify-center flex item-center font-thin text-xl lg:text-lg p-2"> This is all of my work from Zero to Hero</p>
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="max-w-sm mx-auto group hover:no-underline focus:no-underline bg-[#ffffff08] rounded-lg relative"
                            data-aos="fade-up"
                        >
                            <img
                                role="presentation"
                                className="object-cover w-full rounded-t-lg h-44 dark:bg-gray-500"
                                src={project.img}
                            />
                            <div className="p-6 space-y-2 rounded-b-lg">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-gradient">{project.title}</h3>
                                <div className="flex space-x-3"> 
                                    {project.skills.map((skill, skillIndex) => (
                                        <span key={skillIndex} className="bg-neutral-800 p-2 rounded-lg text-xs dark:text-gray-400 lg:dark:text-gray-400 sm:dark:text-gray-400">{skill}</span>
                                    ))}
                                </div>
                                <p className="text-white">{expanded[index] ? project.description : `${project.description.substring(0, 100)}...`}</p>
                                <button
                                    onClick={() => toggleExpand(index)}
                                    className="text-white hover:underline"
                                >
                                    {expanded[index] ? 'Show Less' : 'See More'}
                                </button>
                            </div>
                            <div className="absolute bottom-3 right-4 flex space-x-2">
                                <a
                                    href={project.svg1} // Link for first SVG
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#bababa" d="M12 0a12 12 0 1 0 0 24a12 12 0 0 0 0-24m3.163 21.783h-.093a.5.5 0 0 1-.382-.14a.5.5 0 0 1-.14-.372v-1.406q.01-.701.01-1.416a3.7 3.7 0 0 0-.151-1.028a1.83 1.83 0 0 0-.542-.875a8 8 0 0 0 2.038-.471a4.05 4.05 0 0 0 1.466-.964c.407-.427.71-.943.885-1.506a6.8 6.8 0 0 0 .3-2.13a4.1 4.1 0 0 0-.26-1.476a3.9 3.9 0 0 0-.795-1.284a2.8 2.8 0 0 0 .162-.582q.05-.3.05-.604q0-.392-.09-.773a5 5 0 0 0-.221-.763a.3.3 0 0 0-.111-.02h-.11q-.346.004-.674.111a5 5 0 0 0-.703.26a7 7 0 0 0-.661.343q-.322.191-.573.362a9.6 9.6 0 0 0-5.143 0a14 14 0 0 0-.572-.362a6 6 0 0 0-.672-.342a4.5 4.5 0 0 0-.705-.261a2.2 2.2 0 0 0-.662-.111h-.11a.3.3 0 0 0-.11.02a6 6 0 0 0-.23.763q-.08.382-.081.773q0 .304.051.604t.16.582A3.9 3.9 0 0 0 5.702 10a4.1 4.1 0 0 0-.263 1.476a6.9 6.9 0 0 0 .292 2.12c.181.563.483 1.08.884 1.516c.415.422.915.75 1.466.964c.653.25 1.337.41 2.033.476a1.8 1.8 0 0 0-.452.633a3 3 0 0 0-.2.744a2.75 2.75 0 0 1-1.175.27a1.8 1.8 0 0 1-1.065-.3a2.9 2.9 0 0 1-.752-.824a3 3 0 0 0-.292-.382a2.7 2.7 0 0 0-.372-.343a1.8 1.8 0 0 0-.432-.24a1.2 1.2 0 0 0-.481-.101q-.06.002-.12.01a.7.7 0 0 0-.162.02a.4.4 0 0 0-.13.06a.12.12 0 0 0-.06.1a.33.33 0 0 0 .14.242q.14.111.232.171l.03.021q.2.155.382.333q.169.148.3.33q.136.178.231.381q.11.2.231.463c.188.474.522.875.954 1.145c.453.243.961.364 1.476.351q.262 0 .522-.03q.258-.041.515-.091v1.743a.5.5 0 0 1-.533.521h-.062a10.286 10.286 0 1 1 6.324 0z"/></svg>
                                </a>
                                <a
                                    href={project.svg2} // Link for second SVG
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="#bababa" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="42" stroke-dashoffset="42" d="M11 5H5V19H19V13"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.06s" values="42;0"/></path><path stroke-dasharray="12" stroke-dashoffset="12" d="M13 11L20 4"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.06s" dur="0.03s" values="12;0"/></path><path stroke-dasharray="8" stroke-dashoffset="8" d="M21 3H15M21 3V9"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.09s" dur="0.02s" values="8;0"/></path></g></svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </div>
    </div>


    {/* About us section */}
    <div id="about" className="flex justify-center items-center flex-col lg:flex-row  p-4 lg:p-12 text-white pt-12 lg:pt-44">
                <div className="img1"> 
                <motion.img 
                    src="/Images/Screenshot 2025-02-20 152533.png" 
                    className="rounded-full w-full max-w-sm lg:max-w-sm mb-5 lg:mb-0 lg:mr-8 mt-4 lg:mt-0 imgg " 
                    
                    alt="Logo" 
                    initial={{ opacity: 0, scale: 0. }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                />
                
                </div>
                <div className="max-w-full lg:max-w-2xl px-4 lg:px-6">
                    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">  
                    </div>
                    <motion.h1
                        className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 mt-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        About Me
                    </motion.h1>
                    <motion.p
                        className="text-sm lg:text-base"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        Hello! I'm a second-year BS Information Technology student at the ICCT, Cainta Campus.
                        I love designing and building websites, combining creativity with technical skills to create engaging online experiences. 
                        When I'm not coding, you'll find me enjoying a good cup of coffee, which fuels my creativity and keeps me motivated. 
                        I'm excited to continue honing my skills and taking on new challenges. Thanks for learning a bit about me!
                    </motion.p>
                </div>
                </div>
            {/* Header */}
            <div className="container p-4 mx-auto text-center">
                <h2 className="text-4xl font-bold text-white ">Tech Stack</h2>
            </div>
    
    
            {/* Tech stack logos */}
            <section className=" dark:text-gray-800">
            <motion.div
                        className="text-sm lg:text-base"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 }}
                    >
                <div className="container flex flex-wrap justify-center mx-auto dark:text-gray-600">
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#000" rx="60"/><path fill="#fff" d="M128.001 30C72.779 30 28 74.77 28 130.001c0 44.183 28.653 81.667 68.387 94.89c4.997.926 6.832-2.169 6.832-4.81c0-2.385-.093-10.262-.136-18.618c-27.82 6.049-33.69-11.799-33.69-11.799c-4.55-11.559-11.104-14.632-11.104-14.632c-9.073-6.207.684-6.079.684-6.079c10.042.705 15.33 10.305 15.33 10.305c8.919 15.288 23.394 10.868 29.1 8.313c.898-6.464 3.489-10.875 6.349-13.372c-22.211-2.529-45.56-11.104-45.56-49.421c0-10.918 3.906-19.839 10.303-26.842c-1.039-2.519-4.462-12.69.968-26.464c0 0 8.398-2.687 27.508 10.25c7.977-2.215 16.531-3.326 25.03-3.364c8.498.038 17.06 1.149 25.051 3.365c19.087-12.939 27.473-10.25 27.473-10.25c5.443 13.773 2.019 23.945.98 26.463c6.412 7.003 10.292 15.924 10.292 26.842c0 38.409-23.394 46.866-45.662 49.341c3.587 3.104 6.783 9.189 6.783 18.519c0 13.38-.116 24.149-.116 27.443c0 2.661 1.8 5.779 6.869 4.797C199.383 211.64 228 174.169 228 130.001C228 74.771 183.227 30 128.001 30M65.454 172.453c-.22.497-1.002.646-1.714.305c-.726-.326-1.133-1.004-.898-1.502c.215-.512.999-.654 1.722-.311c.727.326 1.141 1.01.89 1.508m4.919 4.389c-.477.443-1.41.237-2.042-.462c-.654-.697-.777-1.629-.293-2.078c.491-.442 1.396-.235 2.051.462c.654.706.782 1.631.284 2.078m3.374 5.616c-.613.426-1.615.027-2.234-.863c-.613-.889-.613-1.955.013-2.383c.621-.427 1.608-.043 2.236.84c.611.904.611 1.971-.015 2.406m5.707 6.504c-.548.604-1.715.442-2.57-.383c-.874-.806-1.118-1.95-.568-2.555c.555-.606 1.729-.435 2.59.383c.868.804 1.133 1.957.548 2.555m7.376 2.195c-.242.784-1.366 1.14-2.499.807c-1.13-.343-1.871-1.26-1.642-2.052c.235-.788 1.364-1.159 2.505-.803c1.13.341 1.871 1.252 1.636 2.048m8.394.932c.028.824-.932 1.508-2.121 1.523c-1.196.027-2.163-.641-2.176-1.452c0-.833.939-1.51 2.134-1.53c1.19-.023 2.163.639 2.163 1.459m8.246-.316c.143.804-.683 1.631-1.864 1.851c-1.161.212-2.236-.285-2.383-1.083c-.144-.825.697-1.651 1.856-1.865c1.183-.205 2.241.279 2.391 1.097"/></g></svg>
                    </div>
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#000" rx="60"/><path fill="url(#skillIconsPythonLight0)" d="M127.279 29c-50.772 0-47.602 22.018-47.602 22.018l.057 22.81h48.451v6.85H60.489S28 76.992 28 128.221s28.357 49.414 28.357 49.414h16.924v-23.773s-.912-28.357 27.905-28.357h48.054s26.999.436 26.999-26.094V55.546S180.338 29 127.279 29m-26.716 15.339a8.71 8.71 0 0 1 8.717 8.717a8.71 8.71 0 0 1-8.717 8.716a8.71 8.71 0 0 1-8.716-8.716a8.71 8.71 0 0 1 8.716-8.717"/><path fill="url(#skillIconsPythonLight1)" d="M128.721 227.958c50.772 0 47.602-22.017 47.602-22.017l-.057-22.811h-48.451v-6.849h67.696S228 179.966 228 128.736s-28.357-49.413-28.357-49.413h-16.924v23.773s.912 28.357-27.905 28.357H106.76s-27-.437-27 26.093v43.866s-4.099 26.546 48.961 26.546m26.716-15.339a8.71 8.71 0 0 1-8.717-8.716a8.71 8.71 0 0 1 8.717-8.717a8.71 8.71 0 0 1 8.717 8.717a8.71 8.71 0 0 1-8.717 8.716"/><defs><linearGradient id="skillIconsPythonLight0" x1="47.22" x2="146.333" y1="46.896" y2="145.02" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="skillIconsPythonLight1" x1="108.056" x2="214.492" y1="109.905" y2="210.522" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#fff"/></linearGradient></defs></g></svg>
                    </div>
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#000" rx="60"/><path fill="url(#skillIconsTailwindcssDark0)" fill-rule="evenodd" d="M83 110q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5Q96.5 92 83 110m-45 54q9-36 45-36c36 0 40.5 27 58.5 31.5q18 4.502 31.5-13.5q-9 36-45 36c-36 0-40.5-27-58.5-31.5q-18-4.502-31.5 13.5" clip-rule="evenodd"/><defs><linearGradient id="skillIconsTailwindcssDark0" x1="86.5" x2="163.5" y1="74" y2="185.5" gradientUnits="userSpaceOnUse"><stop stop-color="#fff"/><stop offset="1" stop-color="#fff"/></linearGradient></defs></g></svg>
                    </div>
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#000" rx="60"/><path fill="#fff" d="M101.634 182.619s-7.68 4.674 5.345 6.011c15.728 2.004 24.044 1.669 41.407-1.668c0 0 4.674 3.009 11.02 5.344c-39.075 16.696-88.497-1.002-57.772-9.687m-5.009-21.705s-8.35 6.346 4.674 7.679c17.028 1.669 30.391 2.004 53.433-2.667c0 0 3.009 3.341 8.015 5.01c-47.083 14.025-99.85 1.333-66.122-10.019zm92.17 38.07s5.676 4.674-6.346 8.35c-22.376 6.678-93.839 8.685-113.876 0c-7.009-3.009 6.347-7.352 10.686-8.015c4.342-1.002 6.678-1.002 6.678-1.002c-7.68-5.344-51.095 11.02-22.041 15.729c79.813 13.027 145.603-5.676 124.896-15.028zm-83.488-60.781s-36.402 8.685-13.028 11.687c10.019 1.333 29.721 1.002 48.089-.335c15.028-1.334 30.09-4.007 30.09-4.007s-5.345 2.338-9.017 4.674c-37.099 9.693-108.23 5.351-87.858-4.668c17.37-8.35 31.724-7.351 31.724-7.351m65.116 36.401c37.407-19.37 20.037-38.07 8.015-35.731c-3.009.667-4.342 1.334-4.342 1.334s1.001-2.004 3.34-2.667c23.709-8.35 42.413 25.046-7.679 38.07c0 0 .335-.335.666-1.002zm-61.444 52.76c36.067 2.339 91.168-1.334 92.505-18.369c0 0-2.667 6.678-29.72 11.688c-30.722 5.676-68.796 5.009-91.168 1.333c0 0 4.674 4.007 28.386 5.344z"/><path fill="#f58219" d="M147.685 28s20.704 21.039-19.702 52.76c-32.394 25.712-7.351 40.408 0 57.101c-19.035-17.028-32.722-32.059-23.377-46.085C118.331 71.083 156.062 61.064 147.685 28M137 123.842c9.683 11.02-2.667 21.039-2.667 21.039s24.711-12.686 13.359-28.387c-10.354-15.028-18.368-22.376 25.046-47.425c0 0-68.46 17.028-35.731 54.766z"/></g></svg>
                    </div>
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#000" rx="60"/><path fill="#ebebeb" d="m53.753 102.651l2.862 31.942h71.481v-31.942zM128.095 38H48l2.904 31.942h77.191zm0 180.841v-33.233l-.14.037l-35.574-9.605l-2.274-25.476H58.042l4.475 50.154l65.431 18.164z"/><path fill="#fff" d="m167.318 134.593l-3.708 41.426l-35.625 9.616v33.231l65.483-18.148l.48-5.397l7.506-84.092l.779-8.578L208 38h-80.015v31.942h45.009l-2.906 32.709h-42.103v31.942z"/></g></svg>
                    </div>
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#000" rx="60"/><path fill="#fff" d="m48 38l8.61 96.593h110.71l-3.715 41.43l-35.646 9.638l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l65.51-18.172l8.783-98.061H85.824l-2.923-32.71h122.238L208 38z"/><path fill="#ebebeb" d="M128 38H48l8.61 96.593H128v-31.938H85.824l-2.923-32.71H128zm0 147.647l-.041.014l-35.579-9.624l-2.379-26.602H57.94l4.585 51.281l65.427 18.172l.049-.014z"/></g></svg>
                    </div>
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#000" rx="60"/><path fill="url(#skillIconsViteDark0)" d="m227.088 57.602l-93.832 167.787c-1.938 3.465-6.915 3.485-8.881.038L28.682 57.617c-2.142-3.756 1.07-8.306 5.328-7.545l93.932 16.79a5.1 5.1 0 0 0 1.812-.004l91.968-16.763c4.243-.773 7.47 3.742 5.366 7.507"/><path fill="url(#skillIconsViteDark1)" d="m172.687 28.05l-69.438 13.605a2.55 2.55 0 0 0-2.055 2.352l-4.272 72.141a2.55 2.55 0 0 0 3.118 2.635l19.333-4.461c1.809-.417 3.443 1.176 3.072 2.995l-5.744 28.126c-.387 1.893 1.391 3.511 3.239 2.95l11.941-3.628c1.851-.562 3.63 1.061 3.238 2.956l-9.128 44.179c-.571 2.764 3.105 4.271 4.638 1.901l1.024-1.582l56.582-112.92c.948-1.89-.686-4.046-2.763-3.646l-19.899 3.841c-1.87.36-3.461-1.381-2.934-3.21l12.989-45.026c.528-1.832-1.069-3.575-2.941-3.209"/><defs><linearGradient id="skillIconsViteDark0" x1="26.346" x2="143.127" y1="44.075" y2="202.673" gradientUnits="userSpaceOnUse"><stop stop-color="#41d1ff"/><stop offset="1" stop-color="#bd34fe"/></linearGradient><linearGradient id="skillIconsViteDark1" x1="122.551" x2="143.676" y1="31.743" y2="176.66" gradientUnits="userSpaceOnUse"><stop stop-color="#ffea83"/><stop offset=".083" stop-color="#ffdd35"/><stop offset="1" stop-color="#ffa800"/></linearGradient></defs></g></svg>
                    </div>
                    <div className="flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#000" rx="60"/><path fill="#fff" d="M110.759 210.517C65.125 210.517 28 173.392 28 127.759C28 82.125 65.125 45 110.759 45c29.445 0 56.908 15.846 71.668 41.353l-35.816 20.726c-7.387-12.768-21.126-20.7-35.852-20.7c-22.817 0-41.38 18.563-41.38 41.38c0 22.816 18.563 41.379 41.38 41.379c14.727 0 28.466-7.932 35.854-20.702l35.816 20.725c-14.76 25.51-42.223 41.356-71.67 41.356"/><path fill="#fff" d="M193.517 123.161h-9.196v-9.196h-9.194v9.196h-9.196v9.195h9.196v9.196h9.194v-9.196h9.196zm34.483 0h-9.196v-9.196h-9.194v9.196h-9.196v9.195h9.196v9.196h9.194v-9.196H228z"/></g></svg>
                    </div>
                </div>
                </motion.div>
            </section>
    
        {/* timeline */}
        <section className="flex flex-col lg:flex-row  dark:text-white sm:text-white lg:text-white text-white">
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            {/* Empty for spacing */}
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <h3 className="text-3xl font-bold">Education</h3>
                            {educationData.map((item, index) => (
                                <motion.div
                                    key={item.institution}
                                    initial="hidden"
                                    animate={controls}
                                    variants={itemVariants}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="animate-on-scroll flex flex-col sm:flex-row sm:space-x-8 sm:items-center sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600"
                                >
                                    <div className="sm:pr-8">
                                        <h3 className="text-xl font-semibold tracking-wide">{item.institution}</h3>
                                        <time className="text-xs tracking-wide uppercase dark:text-gray-600">{item.period}</time>
                                        <p className="mt-3">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="lg:text-white lg:flex-row col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300"/>
                <div className="container max-w-5xl px-4 py-12 mx-auto flex-col">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                    <div className="col-span-12 col-span-3">
                            {/* Empty for spacing */}
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <h3 className="text-3xl font-bold">Experience</h3>
                            {experienceData.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial="hidden"
                                    animate={controls}
                                    variants={itemVariants}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="animate-on-scroll flex flex-col sm:flex-row sm:space-x-8 sm:items-center sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600"
                                >
                                    <div className="sm:pr-8">
                                        <h3 className="text-xl font-semibold tracking-wide">{item.title}</h3>
                                        <time className="text-xs tracking-wide uppercase dark:text-gray-600">{item.period}</time>
                                        <p className="mt-3">{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
    </div>
  );
}

export default Hero;
