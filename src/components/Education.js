import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">Education</h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
          md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
        <Details
            type="B.E in Electronics And Communication"
            time="2018-2022"
            place="L.D College Of Engineering"
            info="Completed several relevant coursework that has equipped me with valuable skills and knowledge. Some of the courses I have successfully undertaken include C++, Data Structures and Algorithms (DSA), Python, and Artificial Intelligence (AI). These subjects have provided me with a strong foundation in programming languages, problem-solving techniques, and advanced concepts in AI. Through these courses, I have gained practical experience and developed proficiency in these areas, allowing me to effectively apply my skills to real-world scenarios."
          />

          <Details
            type="Master of Computer Science"
            time="2022-2024"
            place="Pace University"
            info=" Completed studies in Internet Computing, AWS (Amazon Web Services), Angular, and React. These subjects have provided me with a comprehensive understanding of web development, cloud computing, and front-end frameworks. Through the Internet Computing course, I gained insights into various web technologies and learned how to design and develop dynamic and interactive web applications. The AWS course equipped me with knowledge of cloud infrastructure and services, enabling me to deploy scalable and reliable applications on the cloud. Moreover, studying Angular and React has allowed me to master modern front-end development frameworks, empowering me to build robust and user-friendly web interfaces. With a diverse range of coursework under my belt, I am well-prepared to tackle complex projects and contribute effectively in the field of software development."     />

       
        </ul>
      </div>
    </div>
  );
};

export default Education;
