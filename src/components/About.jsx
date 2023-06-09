import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { StarsCanvas } from "./canvas";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
          <motion.div
            // variants={slideIn("left", "tween", 0.2, 1)}
            className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Information</p>
        <h3 className={styles.sectionHeadText}>About.</h3>

        I am a dynamic individual who initially pursued a career in Medical Laboratory Science, gaining invaluable knowledge and skills in the healthcare field. However, my passion for technology and its potential to transform lives led me to transition into the world of software development. With a deep interest in artificial intelligence and web development, I am driven to explore the intersection of these fields, harnessing the power of AI to create innovative and user-friendly web applications. Combining my medical background with my programming expertise, I strive to develop cutting-edge solutions that enhance healthcare systems and improve patient care.
      </motion.div>
      
      {/* <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
      <StarsCanvas/>
      </motion.div> */}
      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </div>
  );
};

export default SectionWrapper(About, "about");
