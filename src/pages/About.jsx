import React, { Suspense } from 'react';
import SectionHeader from '../components/miscellaneous/SectionHeader';
import Bullet from '../components/miscellaneous/Bullet';
import { Box, Spinner, Stack, Link, Flex, VStack } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { Body, Heading2, Heading3 } from '../components/Typography/index';
import useColorSwitcher from '../utils/useColorSwitcher';

// Import components
const InteractivePortrait = React.lazy(() => import('../components/miscellaneous/InteractivePortrait'));
const ProfileImage = React.lazy(() => import('../components/miscellaneous/ProfileImage'));

const About = () => {
  const { lightGreyBg, greyBg } = useColorSwitcher();

  return (
    <motion.div
      initial={{ y: '100%', opacity: 0 }}
      animate={{ y: '0%', opacity: 1 }}
      transition={{ duration: 0.75, ease: 'easeInOut' }}
      exit={{ opacity: 0 }}
    >
      <Box 
        as="section" 
        outline="0" 
        tabIndex={-1} 
        maxW="1400px"
        mx="auto"
        px={{ base: '20px', md: '40px', lg: '60px', xl: '80px' }}
        py={{ base: '60px', md: '80px' }}
      >
        {/* Header */}
        <Box w="100%" mb={{ base: '40px', md: '60px' }}>
          <SectionHeader mr="16px">
            <Heading2>about</Heading2>
          </SectionHeader>
        </Box>

        {/* Main Content */}
        <Flex
          direction={{ base: 'column', lg: 'row' }}
          gap={{ base: '40px', lg: '60px' }}
          align={{ base: 'center', lg: 'flex-start' }}
        >
          {/* LEFT SIDE - Interactive Portrait + Profile Photo */}
          <VStack
            spacing={{ base: '24px', md: '32px', lg: '40px' }}
            flexShrink={0}
            alignSelf={{ base: 'center', lg: 'flex-start' }}
            display="flex" // ✅ ALWAYS SHOW (removed the base: 'none')
            w={{ base: '100%', lg: 'auto' }}
            maxW={{ base: '300px', md: '350px', lg: '400px' }}
          >
            {/* Interactive Portrait */}
            <Box w="100%">
              <Suspense
                fallback={
                  <Box
                    width="100%"
                    height={{ base: "300px", md: "400px", lg: "500px" }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Spinner
                      thickness="4px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      color="blue.500"
                      size="xl"
                    />
                  </Box>
                }
              >
                <InteractivePortrait />
              </Suspense>
            </Box>

            {/* Profile Photo Below */}
            <Box
              bg={lightGreyBg}
              rounded="full"
              display="grid"
              placeItems="center"
              p={{ base: '6px', md: '8px', lg: '12px' }}
            >
              <Box
                bg={greyBg}
                rounded="full"
                display="grid"
                placeItems="center"
                p={{ base: '6px', md: '8px', lg: '12px' }}
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
          </VStack>

          {/* RIGHT SIDE - Content */}
          <Stack
            spacing={{ base: '32px', md: '40px' }}
            flex="1"
            w="100%"
            maxW={{ lg: '800px' }}
          >
            {/* Intro */}
            <Body 
              fontSize={{ base: 'md', md: 'lg' }}
              lineHeight="1.7"
              textAlign={{ base: 'center', lg: 'left' }}
            >
              hi! i'm adnaan, Pursuing MSc in Electrical and Computer Engineering from McGill University, Canada.
              I did my Bachelors in Computer Engineering from Aligarh Muslim University, India.
              I thrive on engaging with captivating projects that not only challenge
              my knowledge but also introduce me to the dynamic and transformative
              technologies shaping our world.
            </Body>

            {/* What I've been up to */}
            <Box>
              <Heading3 mb="16px">What I've been up to:</Heading3>
              <Stack as="ul" spacing="12px">
                <Bullet as="li">my interest is in making machines understand and perform tasks as we humans do.</Bullet>
                <Bullet as="li">fun facts : gluten Intolerant & outside of work, i'm nerdy about tech gadgets, loves trying new things. Oh, I make content too.</Bullet>
              </Stack>
            </Box>

            {/* Education */}
            <Box>
              <Heading3 mb="16px">Education</Heading3>
              <Stack as="ul" spacing="12px">
                <Bullet as="li">Master of Science in Electrical and Computer Engineering - <b>McGill University</b></Bullet>
                <Bullet as="li">Bachelors of Technology in Computer Engineering - <b>Aligarh Muslim University, CPI: 9.0</b></Bullet>
                <Bullet as="li">Senior Secondary HighSchool(XII Class), Radha Krishna Public Sr. Sec School, <b>Grade: 95.4% </b></Bullet>
                <Bullet as="li">HighSchool(X Class), Radha Krishna Public Sr. Sec School, <b>Grade: 93.4%</b></Bullet>
              </Stack>
            </Box>

            {/* Internships - This is where your photo aligns */}
            <Box>
              <Heading3 mb="16px">Internships and Work Experiences</Heading3>
              <Stack as="ul" spacing="12px">
                <Bullet as="li">
                  SDE Intern - STARlab Capital, Illinois, USA {" "}
                  <Link
                    href="https://drive.google.com/file/d/1HzesoPyM3rd4amRBbyqeilgyUFdDfjgI/view?usp=drive_link"
                    isExternal
                    color="blue.500"
                    textDecoration="underline"
                  >
                    <ExternalLinkIcon mx="3px" />
                  </Link>
                </Bullet>
                <Bullet as="li">
                  Solution Engineering Intern - Prodigal, Mumbai {" "}
                  <Link
                    href="https://drive.google.com/file/d/1rQnrRKja3KtY99oBK4xIX6VZ3lBEO6GP/view?usp=sharing"
                    isExternal
                    color="blue.500"
                    textDecoration="underline"
                  >
                    <ExternalLinkIcon mx="3px" />
                  </Link>
                </Bullet>
                <Bullet as="li">
                  Graduate Research Intern - McGill University, Canada {" "}
                  <Link
                    href="https://drive.google.com/file/d/1VKYRIhqOOtHAXs4VCIsoCYyXtOW-2p03/view?usp=sharing"
                    isExternal
                    color="blue.500"
                    textDecoration="underline"
                  >
                   <ExternalLinkIcon mx="3px" />
                  </Link>
                </Bullet>
                <Bullet as="li">
                  Research Intern - Christian-Albrechts-Universität zu Kiel, Germany {" "}
                  <Link
                    href="https://drive.google.com/file/d/1Wq2vyF5phup_Hhjmo0HEZ5ALfa4kP6jC/view?usp=sharing"
                    isExternal
                    color="blue.500"
                    textDecoration="underline"
                  >
                    <ExternalLinkIcon mx="3px" />
                  </Link>
                </Bullet>
                <Bullet as="li">
                  Summer Research Intern - National Remote Sensing Center, Indian Space Research Organisation (ISRO) {" "}
                  <Link
                    href="https://drive.google.com/file/d/1ve-WShra_BAx8sIQOE20FD7xUF20etpd/view?usp=sharing"
                    isExternal
                    color="blue.500"
                    textDecoration="underline"
                  >
                    <ExternalLinkIcon mx="3px" />
                  </Link>
                </Bullet>
              </Stack>
            </Box>

            {/* Awards */}
            <Box>
              <Heading3 mb="16px">Awards & Honors</Heading3>
              <Stack as="ul" spacing="12px">
                <Bullet as="li">Master's Research Scholarship by Fonds de recherche du Québec - Nature et technologies (<strong>FRQ-NT</strong>) 2025</Bullet>
                <Bullet as="li">Sir Syed Global Scholar Award (<strong>SSGSA</strong>) 2024</Bullet>
                <Bullet as="li">Linux Foundation Training (<strong>LiFT</strong>) Scholarship for 2024</Bullet>
                <Bullet as="li">DAAD WISE Scholar 2024 - 3 months Internship at University of Kiel, Germany</Bullet>
                <Bullet as="li">Oil and Natural Gas Corporation(<strong>ONGC</strong>) Scholar, India - Awardee for scholarships awarded to meritorious students</Bullet>
                <Bullet as="li">Islamic Development Bank Scholarship(<strong>IsDB</strong>), Saudi Arabia - For academic excellence</Bullet>
                <Bullet as="li">Lead Ignite Transform(<strong>LIT</strong>) Scholar, Dubai - Based on merit by AMU Old Boys Association</Bullet>
                <Bullet as="li">University Merit Scholarship, AMU - Top performer (<strong>Gold Medalist</strong>) in freshman year</Bullet>
              </Stack>
            </Box>

            {/* Volunteering */}
            <Box>
              <Heading3 mb="16px">Volunteering and Positions</Heading3>
              <Stack as="ul" spacing="12px">
                <Bullet as="li">Research & Development Lead - IEEE CS Society A.M.U</Bullet>
                <Bullet as="li">Secretary - IEEE Students Branch A.M.U</Bullet>
                <Bullet as="li">Treasurer - A.C.M Association for Computer Machinery</Bullet>
                <Bullet as="li">Web Developer & ML Lead - A.M.U Machine Learning Club</Bullet>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </Box>
    </motion.div>
  );
};

export default About;