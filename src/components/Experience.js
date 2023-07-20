import React, { useRef } from "react";
import {motion, useScroll } from "framer-motion"
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
  return (
    <li ref={ref} className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]">
      
      <LiIcon reference={ref}/>
      <motion.div
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">

<motion.div
style={{scaleY: scrollYProgress}}
  className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top 
  md:w-[2px] md:left-[30px] xs:left-[20px] dark:bg-primaryDark dark:shadow-3xl
  "  />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
        <Details
              position="Software Developer"
              company="All IT Solutions"
              companyLink="https://allitsolutions.us/"
              time="Summer 2022"
              address="New Jersey|Remote"
              work="Specialized in leveraging the G-Suite ecosystem and Google Apps Script to create tailor-made solutions for clients. With expertise in JavaScript, HTML, and CSS, I have successfully developed responsive and intuitive web applications that boosted client satisfaction scores by 20%. Additionally, I have gained proficiency in Jira and Confluence, including their APIs, enabling me to contribute effectively to development projects."          />

            <Details
              position="Software Developer Intern"
              company="Beyon Data Solutions"
              companyLink="https://beyondatagroup.com/"
              time="Spring 2022"
              address="Ahmedabad,India"
              work="designed, tested, and customized Odoo (OpenERP) modules and applications. 
              I created a University management system using Python, PostgreSQL, HTML5, JavaScript, and CSS.
              Additionally, I implemented web-hook integration between the company's CRM and database, 
              resulting in a 25% increase in lead conversion rate and a 20% reduction in manual data entry."
            />

            <Details
              position="Software Developer Intern,"
              company="Triyaza HealthCare"
              // companyLink="https://amazon.com"
              time="Fall 2021"
              address="Ahmedabad,India"
              work="built an employee management application aimed at streamlining workload distribution across the enterprise. 
              By utilizing JDBC API, stored procedures, and Java Applets, I successfully developed the application, 
              leading to a significant time-saving of 6+ hours per week. Furthermore, I incorporated the Hibernate
               Framework for Oracle Database, enabling efficient storage of user information and connection data at the server-side.
                Additionally, I programmed the software to generate statistical findings based on user requirements using JFreeCharts." />

            <Details
              position="Web Developer Intern"
              company="Exposys Data Labs"
              companyLink="http://exposysdata.com/"
              time="Summer 2021"
              address="Redmond, WA."
              work=" engineered and deployed a blogging e-commerce website by leveraging the Django Framework, 
              along with HTML, CSS, Bootstrap, and jQuery. Additionally, I incorporated the DBsqlite database for
               efficient data management. I successfully investigated issues with web-based systems, updated website content and pages,
                and utilized statistical analysis methods like regression, hypothesis testing, and A/B testing. Moreover,
                 I led a team of 8 members, implementing Agile development methodologies to incrementally and efficiently deliver 
                 software products."
            />

            <Details
              position="Graduate Research Assistant"
              company="Pace University"
              companyLink="https://www.pace.edu/"
              time="Fall 2022"
              address="Implemented Volterra matched filter expansion to enhance signal processing performance by modeling nonlinear interactions.
              Executed transfer learning for regression, leveraging a pre-trained model to improve performance in a new regression task.
              Achieved better results with less data by fine-tuning the weights of the pre-trained model."
            />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
