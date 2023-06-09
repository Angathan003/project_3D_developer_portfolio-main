// ///

// import React, { useRef, useState } from "react";
// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { EarthCanvas1 } from "./canvas";
// import { slideIn } from "../utils/motion";
// import { SectionWrapper } from "../hoc";




// const About = () => {
//   const [loading, setLoading] = useState(false);
//   return (
//     <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
//       <motion.div
//         variants={slideIn("left", "tween", 0.2, 1)}
//         className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
//         // variants={slideIn("left", "tween", 0.2, 1)}
//         // className='flex-[0.75] bg-black-100 p-8 rounded-2xl' 
//      >
//         <p className={styles.sectionSubText}>Information</p>
//         <h3 className={styles.sectionHeadText}>About.</h3>

//         <p>
//           I am a dynamic individual who initially pursued a career in Medical Laboratory Science, gaining invaluable knowledge and skills in the healthcare field. However, my passion for technology and its potential to transform lives led me to transition into the world of software development. With a deep interest in artificial intelligence and web development, I am driven to explore the intersection of these fields, harnessing the power of AI to create innovative and user-friendly web applications. Combining my medical background with my programming expertise, I strive to develop cutting-edge solutions that enhance healthcare systems and improve patient care.
//         </p>
//       </motion.div>

//       <motion.div
//         variants={slideIn("right", "tween", 0.2, 1)}
//         className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      
//         // variants={slideIn("right", "tween", 0.2, 1)}
//         // className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      
//       >
//         <EarthCanvas1 />
//       </motion.div>
//     </div>
//   );
// };

// export default SectionWrapper(About, "about");
