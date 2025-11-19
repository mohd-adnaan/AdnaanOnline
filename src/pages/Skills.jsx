import React from "react";

import { motion } from "framer-motion";
import { Box, Text, Grid } from "@chakra-ui/react";

import SectionHeader from "../components/miscellaneous/SectionHeader";
import IconBox from "../components/miscellaneous/IconBox";
import { Heading2 } from "../components/Typography";

import {
  IconC,
  IconFB,
  IconJS,
  IconNode,
  IconPython,
  IconReact,
  IconGit,
  IconYolo,
  IconOpenCV,
  IconJava,
  IconAndroid,
  IconPHP,
  IconSQL,
  IconPostman,
  IconJupyterNotebook,
  IconAWS,
  IconAngular,
  IconSwift,
  IconTypeScript,
} from "../assets/icons";

const Skills = ({ ...props }) => {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <Box
        as="section"
        outline="0"
        tabIndex={-1}
        {...props}
        my="4em"
        px={{ base: "0", md: "20", xl: "0" }}
      >
        <Box mb="50px">
          <SectionHeader mr="16px">
            <Heading2>Skills</Heading2>
          </SectionHeader>
        </Box>
        <Text
          pb="1em"
          fontSize={{ base: "1em", sm: "1.25em", md: "1.5em", xl: "2em" }}
          textAlign="center"
        >
          Technologies & Tools I Used
        </Text>
        <Grid
          mx="auto"
          py="5em"
          w={{ base: "100%", lg: "90%" }}
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          border="1px solid"
          gap={{ base: 8, md: 16 }}
          placeItems="center"
        >
          <Languages />
          <Frameworks />
          <ComputerVision />
          <Tools />
        </Grid>
      </Box>
    </motion.div>
  );
};

const Languages = () => {
  return (
    <>
      <IconBox
        icon={IconC}
        name="C++"
        size={{ base: "3em", xl: "5.5em" }} />
      <IconBox
        icon={IconJS}
        name="JavaScript"
        size={{ base: "3em", xl: "5.5em" }}
      />
      <IconBox
        icon={IconPython}
        name="Python"
        size={{ base: "3em", xl: "5.5em" }}
      />
      {<IconBox
        icon={IconJava}
        name="Java"
        size={{ base: "3em", xl: "5.5em" }}
      />}
      {<IconBox
        icon={IconTypeScript}
        name="TypeScript"
        size={{ base: "3em", xl: "5.5em" }}
      />}
    </>
  );
};
const Frameworks = () => {
  return (
    <>
      <IconBox
        icon={IconNode}
        name="NodeJS"
        size={{ base: "3em", xl: "5.5em" }}
      />
      <IconBox
        icon={IconReact}
        name="React"
        size={{ base: "3em", xl: "5.5em" }}
      />
       <IconBox
        icon={IconAngular}
        name="Angular"
        size={{ base: "3em", xl: "5.5em" }}
      />
      <IconBox
        icon={IconAndroid}
        name="Android"
        size={{ base: "3em", xl: "5.5em" }}
      />
      {<IconBox
        icon={IconReact}
        name="React-Native"
        size={{ base: "3em", xl: "5.5em" }}
      />}
      {<IconBox
        icon={IconSwift}
        name="Swift"
        size={{ base: "3em", xl: "5.5em" }}
      />}

    </>
  );
};

const Tools = () => {
  return (
    <>
      <IconBox
        icon={IconFB}
        name="Firebase"
        size={{ base: "3em", xl: "5.5em" }}
      />
      <IconBox
        icon={IconPostman}
        name="Postman"
        size={{ base: "3em", xl: "5.5em" }}
      />
      <IconBox
        icon={IconSQL}
        name="SQL"
        size={{ base: "3em", xl: "5.5em" }}
      />
      {<IconBox
        icon={IconPHP}
        name="PHP"
        size={{ base: "3em", xl: "5.5em" }}
      />}
      {<IconBox
        icon={IconAWS}
        name="AWS"
        size={{ base: "3em", xl: "5.5em" }}
      />}
    </>
  );
};

const ComputerVision = () => {
  return (
    <>
      <IconBox
        icon={IconYolo}
        name="Yolo"
        size={{ base: "3em", xl: "5.5em" }}
      />
      <IconBox
        icon={IconOpenCV}
        name="OpenCV"
        size={{ base: "3em", xl: "5.5em" }}
      />
      <IconBox
        icon={IconJupyterNotebook}
        name="JupyterNotebook"
        size={{ base: "3em", xl: "5.5em" }}
      />
      {
        <IconBox
          icon={IconGit}
          name="Git"
          size={{ base: "3em", xl: "5.5em" }} />
      }
    </>
  );
};

export default Skills;
