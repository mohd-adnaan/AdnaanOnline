import React, { Suspense } from "react";

import SectionHeader from "../components/miscellaneous/SectionHeader";
import Bullet from "../components/miscellaneous/Bullet";

import { Box, Spinner, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Body, Heading2, Heading3 } from "../components/Typography/index";

import useColorSwitcher from "../utils/useColorSwitcher";

const ProfileImage = React.lazy(() =>
  import("../components/miscellaneous/ProfileImage")
);

const About = () => {
  const { lightGreyBg, greyBg } = useColorSwitcher();

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
        w="100%"
        my="4em"
        px={{ base: "0", md: "20", xl: "0" }}
      >
        <Box w="100%" mb={{ base: "32px", md: "50px" }}>
          <SectionHeader mr="16px">
            <Heading2>About</Heading2>
          </SectionHeader>
        </Box>
        <Stack
          align="center"
          spacing={{ sm: "10", md: "32" }}
          direction={{ base: "column", xl: "row" }}
          justify={{ base: "space-between", xl: "space-evenly" }}
        >
          <Box
            bg={lightGreyBg}
            rounded="full"
            display="grid"
            placeItems="center"
            p={{ base: "8px", md: "16px" }}
          >
            <Box
              bg={greyBg}
              rounded="full"
              display="grid"
              placeItems="center"
              p={{ base: "8px", md: "16px" }}
            >
              <Suspense
                fallback={
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                  />
                }
              >
                <ProfileImage />
              </Suspense>
            </Box>
          </Box>
          <Stack spacing={{ sm: "8" }} p="8px" w={{ base: "100%", xl: "50%" }}>
            <Body mb="2em" textAlign={{ sm: "center", md: "justify" }}>
              Hi! I'm Adnaan, a pre-final year Computer Engineering undergraduate
              at Zakir Hussain College of Engineering and Technology, Aligarh Muslim University. 
              I thrive on engaging with captivating projects that not only challenge 
              my knowledge but also introduce me to the dynamic and transformative 
              technologies shaping our world. My constant pursuit is to discover 
              improved, ethically sound, and inclusive solutions to the everyday 
              challenges we encounter.
            </Body>
           <Box>
              <Heading3>What I've been up to:</Heading3>
              <Stack as="ul">
                <Bullet as="li">My interest is in making machines understand and
                 perform tasks as we humans do.</Bullet>
                <Bullet as="li">I have applied knowledge of Machine Learning, Deep Learning and Image Processing.</Bullet>
                <Bullet as="li">Full Stack Application Developer</Bullet>
                <Bullet as="li">IEEE Vice-Secretary, ACM Treasurer & Web Developer at Machine Learning Club,AMU</Bullet>
                <Bullet as="li">Plays Guitar with Gluten & Lactose Intolerance and likes Reading.</Bullet>
              </Stack>
            </Box>
            <Box>
              <Heading3>Achievements:</Heading3>
              <Stack as="ul">
              <Bullet as="li">Upcoming Research Intern'24 at McGill University, Montreal, Canada</Bullet>
                <Bullet as="li"> Summer Research Intern'23 at Indian Space Research Organization for 3 months.
                </Bullet>
                <Bullet as="li">Academics Excellence Recognitions:
                      <Bullet as="li"> University Merit Scholar, AMU</Bullet>
                      <Bullet as="li"> Lead Ignite Transform Scholar, Dubai</Bullet>
                      <Bullet as="li"> Islamic Development Bank Scholar, Saudi Arabia</Bullet>
                      <Bullet as="li"> Oil and Natural Gas Corporation(ONGC) Scholar, India</Bullet> 
                </Bullet>
              </Stack>
            </Box> </Stack>
        </Stack>
      </Box>
    </motion.div>
  );
};

export default About;