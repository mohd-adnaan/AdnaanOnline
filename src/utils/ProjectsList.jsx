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
  DACVideo,
  MapInVideo,
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
    media: (
      <video controls>
        <source src={DACVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ),
    live: null,
    repo: "https://github.com/mohd-adnaan/DAC",
  },
    {
    name: "MapIn",
    info: [
      "An app for Marking and drawing shapes on a location of the Indian Map. Design and Develop by our NRSC-North, ISRO team.",
      "Uses React-native,Postgres, Node and PhP",
    ],
    media: (
     <video controls>
    <source src={MapInVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
    ),
    //live : "https://docs.google.com/document/d/1tPbji7SMzDDeHS1U0BJB22zcux5G5zOtqoGtUfCgxmc/edit?usp=sharing",
    live : null,
    repo: "https://github.com/mohd-adnaan/Map_In",
  },
  {
    name: "Tech-Quizzes",
    info: [
      "A web app designed for tech-savvy individuals to assess their programming knowledge and enhance their learning by fearlessly tackling multiple-choice questions (MCQs).",
      "One can practice as many as 1200+ questions.",
    ],
    media: <ProjectImage src={TechQuizzes} alt="Tech-Quizzes" />,
    live: null,
    repo: "https://github.com/mohd-adnaan/Tech-Quizzes",
  },
];

export default ProjectsList;
