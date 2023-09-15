// import React from "react";
// import {
//   PortfolioProject,
//   //PortfolioProjectDark,
//   TechQuizzes,
//   DACVideo,
// } from "../assets/projects";
// import ProjectImage from "../components/miscellaneous/ProjectImage";

// const ProjectsList = [
//   {
//     name: "Portfolio Website",
//     info: [
//       "Built with React, framer motion and Chakra UI.",
//       "Supports light and dark mode,",
//       "Updating as My Profile Improves"
//     ],
//     media: <ProjectImage src={PortfolioProject} alt="Portfolio"/>,
//     live: null,
//     repo: "https://github.com/mohd-adnaan/AdnaanOnline",
//   },
//   {
//     name: "DAC(Digital Address Code)",
//     info: [
//       "A cross-platform app built using React-native developed by me, during the Internship period at NRSC,RRSC,ISRO ",
//       "An app for returning the DAC of the current and marked location of the user on the Indian Map along with building Contours",
//       "Uses React-native, Postgres ,Node and PhP",
//     ],
//     media: <ProjectImage src={DACVideo} type="video/mp4" alt="Digital Address Code" />,
//     //live : "https://drive.google.com/file/d/1GX6DtHiqD3tHl5CeTB-CFbx297JMxDUb/view?usp=drive_link",
//     live: null,
//     repo: "https://github.com/mohd-adnaan/DAC",
//   },
//   {
//     name: "MapIn",
//     info: [
//       "An app for Marking and drawing shapes on a location of the Indian Map. Design and Develop by our NRSC-North, ISRO team.",
//       "Uses React-native,Postgres, Node and PhP",
//     ],
//     media: <ProjectImage src={TechQuizzes}  alt="MapIn" />,
//     //live : "https://docs.google.com/document/d/1tPbji7SMzDDeHS1U0BJB22zcux5G5zOtqoGtUfCgxmc/edit?usp=sharing",
//     live : null,
//     repo: "https://github.com/mohd-adnaan/Map_In",
//   },
//   {
//     name: "Tech-Quizzes",
//     info: [
//       "A web app designed for tech-savvy individuals to assess their programming knowledge and enhance their learning by fearlessly tackling multiple-choice questions (MCQs).",
//       "One can practice as many as 1200+ questions.",
//     ],
//     media: <ProjectImage src={TechQuizzes} alt="Tech-Quizzes" />,
//     live: null,
//     repo: "https://github.com/mohd-adnaan/Tech-Quizzes",
//   },
// ];

// export default ProjectsList;

import React from "react";
import {
  PortfolioProject,
  PortfolioProjectDark,
  TechQuizzes,
  DAC,
  MapIn,
  TTT,
  sample,
  DataBird,
} from "../assets/projects";

import ProjectImage from "../components/miscellaneous/ProjectImage"
const ProjectsList = [
  {
    name: "Portfolio Website",
    info: [
      "Built with React, framer motion and Chakra UI.",
      "Supports light and dark mode,",
      "Updating as My Profile Improves"
    ],
    media: <img src={PortfolioProjectDark} alt="Portfolio" />,
    live: null,
    repo: "https://github.com/mohd-adnaan/AdnaanOnline",
  },
  {
    name: "DAC(Digital Address Code)",
    info: [
      "A cross-platform app built using React-native developed by me, during the Internship period at NRSC,RRSC,ISRO ",
      "An app for returning the DAC of the current and marked location of the user on the Indian Map along with building Contours",
      "Uses React-native, Postgres ,Node and PhP",
    ],
    media: <ProjectImage src={DAC} type="gif" />,
    live: null,
    repo: "https://github.com/mohd-adnaan/DAC",
  },
  {
    name: "Tech-Quizzes",
    info: [
      "A web app designed for tech-savvy individuals to assess their programming knowledge and enhance their learning by fearlessly tackling multiple-choice questions (MCQs).",
      "One can practice as many as 1200+ questions.",
    ],
    media: <ProjectImage src={TechQuizzes} type="gif" />,
    live: "https://techquizzes.vercel.app/",
    repo: "https://github.com/mohd-adnaan/Tech-Quizzes",
  },
  {
    name: "Data-Bird",
    info: [
      "Data Bird | HTML5, CSS, JavaScript, Eel, Python, XML, AWS, GIT, MySQL",
      "• Data Bird is a software that will help you with all your data driven tasks",
      "• It brings Data mining, Task scheduling and price tracking all together on a GUI based no-code platform",
      "• Distinguished features: Data Scraping, Price Tracking, Data APIs, Data Storage, Data Visualization",
    ],
    media: <ProjectImage src={DataBird} tpye="gif" />,
    live: "https://databirdservices.com",
    repo: "https://github.com/mohd-adnaan/Data-Bird",
  },
    {
    name: "MapIn",
    info: [
      "An app for Marking and drawing shapes on a location of the Indian Map.",
      "Uses React-native,Java-Script, Java,C++,Objective C++ , Postgres, and PhP",
      "Aside this Project I also have Kisaan app for the Dissemination of Agromet Advisory Services to take decision in day-to-day farm operation by farmers.",
      "Go to live Site for Kisaan",
    ],
    media: <ProjectImage src={MapIn} type="gif" />,
    //live : "https://docs.google.com/document/d/1tPbji7SMzDDeHS1U0BJB22zcux5G5zOtqoGtUfCgxmc/edit?usp=sharing",
    live: "https://github.com/mohd-adnaan/Kisaan",
    repo: "https://github.com/mohd-adnaan/Map_In",
  },
  {
    name: "AI-Tic-Tac-Toe",
    info: [
      "This project implements a Tic-tac-toe game where you can play against an AI that uses the Minimax algorithm to make its moves.",
      "In this project, you can play against an AI that is designed to make optimal moves using the Minimax algorithm, ensuring a challenging game.",
    ],
    media: <ProjectImage src={TTT} type="gif" />,
    live: "https://ai-tic-tac-toe-tau.vercel.app/",
    repo: "https://github.com/mohd-adnaan/AI-Tic-Tac-Toe",
  },
   {
     name: "ParkEaze",
     info: [
       "A Machine Learning Project for detecting available parking slots in real time.",
       "Jupyter NoteBook"
     ],
     media: <ProjectImage src={sample} alt="gif" />,
     live: null,
     repo: "https://github.com/mohd-adnaan/ParkEaze",
   },
  
];

export default ProjectsList;
