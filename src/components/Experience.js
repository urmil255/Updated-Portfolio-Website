import React, { useRef } from "react";
import {motion, useScroll } from "framer-motion"
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
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
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        {/* Conditional rendering of work prop */}
        <div className="font-medium w-full md:text-sm">
          {typeof work === "string" ? <p>{work}</p> : work}
        </div>
      </motion.div>
    </li>
  );
};
const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        {/* Scroll Progress Indicator */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top 
          md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {/* First Experience */}
          <Details
            position="Software Development Engineer"
            company="BNY Mellon"
            companyLink="https://www.bnymellon.com/"
            time="June 2024 – Present"
            address="New York"
            work={
              <ul>
                <li style={{margin:"10px"}}> --
                  Deployed serverless microservices on AWS Lambda, reducing operational costs by 30%, and integrated with H2 Console DB for rapid in-memory data management and testing.
                </li>
                <li style={{margin:"10px"}}> --
                  Implemented secure data handling processes, optimizing database interactions between AngularJS front-end and Spring Boot back-end, while ensuring seamless deployment of cloud functions on AWS Lambda.
                </li>
              </ul>
            }
          />

          {/* Second Experience */}
          <Details
            position="Software Development Engineer"
            company="MTA (New York City Transit)"
            companyLink="https://new.mta.info/"
            time="Jan 2024 – May 2024"
            address="New York, NY"
            work={
              <ul>
               <li style={{margin:"10px"}}> --
               Automated fraud detection with a custom AWS service using machine learning, improving detection accuracy by 25%.
                </li>
                <li style={{margin:"10px"}}> --
                Implemented data lake solutions on AWS S3 for storing, processing, and analyzing large-scale datasets, leveraging AWS
 Glue and Athena for efficient ETL workflows and querying. meeting business requirements and adhering to best
 practices.
                </li>
                <li style={{margin:"10px"}}> --
                Built responsive UIs with Angular, HTML5, CSS, Bootstrap, and JavaScript, focusing on intuitive and seamless user
                experiences.
                  </li>
              </ul>
            }
          />

          {/* Third Experience */}
          <Details
            position="Software Development Intern"
            company="All IT Solutions"
            companyLink="https://www.allitsolutions.com/"
            time="May 2023 – Sept 2023"
            address="Mount Laurel, NJ"
            work={
              <ul>
              <li style={{margin:"10px"}}> --
                  Automated fraud detection with a custom AWS service using machine learning, improving detection accuracy by 25%.
                </li>
                <li style={{margin:"10px"}}> --
                  Developed a real-time financial reporting system using RPG ILE and DDS, automating sub-file processing.
                </li>
                <li style={{margin:"10px"}}> --
                  Developed a document storage system, migrating over 35,000 files and automating integration with VBA and Python—showcasing skills in application development and documentation.
                </li>
              </ul>
            }
          />

          {/* Fourth Experience */}
          <Details
            position="Research Assistant"
            company="Pace University"
            companyLink="https://www.pace.edu/"
            time="Sept 2022 – Feb 2023"
            address="New York, NY"
            work={
              <ul>
                <li style={{margin:"10px"}}> --
                  Applied Volterra matched filter expansion using MATLAB and Simulink, achieving a 25% system accuracy enhancement.
                </li>
                <li style={{margin:"10px"}}> --
                  Achieved up to 50% performance improvement using transfer learning with TensorFlow and PyTorch on 20% of the data.
                </li>
              </ul>
            }
          />

          {/* Fifth Experience */}
          <Details
            position="Software Development Engineer"
            company="Hexaware Technologies"
            time="Feb 2020 – July 2022"
            address="Ahmedabad, India"
            work={
              <ul>
               <li style={{margin:"10px"}}> --
               Developed and maintained Java applications using Spring Boot and Hibernate, achieving a 20application performance
               and reliability.
                               </li>
                <li style={{margin:"10px"}}> --
                Designed APIs for seamless data flow between databases (MySQL, PostgreSQL) and frontend applications, ensuring
                efficient performance and reliable communication.
                   </li>
                <li style={{margin:"10px"}}> --
                Automated cloud resource scaling in AWS environments, maintaining high application reliability and reducing manual
                effort.
                   </li>
              </ul>
            }
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;