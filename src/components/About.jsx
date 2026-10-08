import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import { plane } from '../assets';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
            className='text-white text-[20px] font-bold text-center' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>Overview</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Introduction</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-center mx-auto'
      >
        I have a passion for learning new skills and technologies.<br />In 2022 I embarked on a new journey to become a Software Developer at 42 Heilbronn.<br />
        Worked at Schwarz IT as a Developer between June 2024 and May 2025, where I have gained experience in various technologies and programming languages.<br />
        Currently I learn German and compete in Triathlons and other endurance races while also working on mastery projects at 42.<br/>
        So far in my projects & job I worked mainly with<br />
        Languages: C, C++, Python, TypeScript, JavaScript, Lua, SQL<br />
        Web/Frameworks: Vue/Next/Node/Three.js, TailwindCSS, CSS, HTML<br />
        Databases: SQL, MongoDB, PostgreSQL<br />
        Graphics & Game Development: Vulkan, OpenGL<br />
        Tools & Platforms: Git, Kubernetes, Grafana, Docker, Bash, Nginx, Doxygen, CAD/CAM, WordPress
      </motion.p>

      <div className='mt-20 text-center'>
        <img src={plane} alt='Plane' className='mx-auto' />  
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");