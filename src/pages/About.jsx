import React, { Suspense } from 'react';
import SectionHeader from '../components/miscellaneous/SectionHeader';
import Bullet from '../components/miscellaneous/Bullet';
import { Box, Spinner, Stack } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Body, Heading2, Heading3 } from '../components/Typography/index';
import useColorSwitcher from '../utils/useColorSwitcher';

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
      <Box as="section" outline="0" tabIndex={-1} w="100%" my="4em" px={{ base: '0', md: '20', xl: '0' }}>
        <Box w="100%" mb={{ base: '32px', md: '50px' }}>
          <SectionHeader mr="16px">
            <Heading2>About</Heading2>
          </SectionHeader>
        </Box>
        <Stack
          align="center"
          spacing={{ sm: '10', md: '32' }}
          direction={{ base: 'column', xl: 'row' }}
          justify={{ base: 'space-between', xl: 'space-evenly' }}
        >
          <Box
            bg={lightGreyBg}
            rounded="full"
            display="grid"
            placeItems="center"
            p={{ base: '8px', md: '16px' }}
          >
            <Box
              bg={greyBg}
              rounded="full"
              display="grid"
              placeItems="center"
              p={{ base: '8px', md: '16px' }}
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
          <Stack spacing={{ sm: '8' }} p="8px" w={{ base: '100%', xl: '50%' }}>
            <Body mb="2em" textAlign={{ sm: 'center', md: 'justify' }}>
              Hi! I'm Adnaan, a final year Computer Engineering undergraduate
              at Zakir Hussain College of Engineering and Technology, Aligarh Muslim University.
              I thrive on engaging with captivating projects that not only challenge
              my knowledge but also introduce me to the dynamic and transformative
              technologies shaping our world. 
            </Body>
            <Box>
              <Heading3>What I've been up to:</Heading3>
               <Stack as="ul">
                 <Bullet as="li">My interest is in making machines understand and perform tasks as we humans do.</Bullet>
                 <Bullet as="li">I have applied knowledge of Machine Learning, Data Science and Image Processing.</Bullet>
                <Bullet as="li">Plays Guitar with Gluten & Lactose Intolerance and likes Reading.</Bullet>
               </Stack>
             </Box>
            {/* Education Section */}
            <Box>
              <Heading3>Education</Heading3>
              <Stack as="ul">
                {/* Education details extracted from CV */}
                <Bullet as="li">Bachelors of Technology in Computer Engineering - Aligarh Muslim University, CPI: 9.118</Bullet>
                <Bullet as="li">Senior Secondary HighSchool(XII Class), Radha Krishna Public Sr. Sec School, Grade: 95.4% </Bullet>
                <Bullet as="li">HighSchool(X Class), Radha Krishna Public Sr. Sec School, Grade: 93.4%</Bullet>
              </Stack>
            </Box>
            {/* Internship Section */}
            <Box>
              <Heading3>Internships and Experiences</Heading3>
              <Stack as="ul">
                {/* Internship details extracted from CV 
                                 <Bullet as="li">Full Stack Developer Intern - TeleCRM</Bullet>*/}
                <Bullet as="li">Graduate Research Intern - McGill University</Bullet>
                <Bullet as="li">Research Intern - Christian-Albrechts-Universität zu Kiel</Bullet>
                <Bullet as="li">Summer Research Intern - National Remote Sensing Center, ISRO</Bullet>
                <Bullet as="li">Data Scrapping Intern - Capped.in Fintech Private Limited</Bullet>
              </Stack>
            </Box>
            {/* Volunteering Section */}
            <Box>
              <Heading3>Volunteering and Positions</Heading3>
              <Stack as="ul">
                {/* Volunteering details extracted from CV */}
                <Bullet as="li">Research & Development Lead - IEEE CS Society A.M.U</Bullet>
                <Bullet as="li">Secretary - IEEE Students Branch A.M.U</Bullet>
                <Bullet as="li">Treasurer - A.C.M Association for Computer Machinery</Bullet>
                <Bullet as="li">Web Developer & ML Lead - A.M.U Machine Learning Club</Bullet>
              </Stack>
            </Box>
            {/* Awards & Honors Section */}
            <Box>
              <Heading3>Awards & Honors</Heading3>
              <Stack as="ul">
                {/* Awards & Honors details extracted from CV */}
                <Bullet as="li">Sir Syed Global Scholar Award (<strong>SSGSA</strong>) 2024</Bullet>
                <Bullet as="li">Linux Foundation Training (<strong>LiFT</strong>) Scholarship for 2024</Bullet>
                <Bullet as="li">DAAD WISE Scholar 2024 - 3 months Internship at University of Kiel, Germany</Bullet>
                <Bullet as="li">Oil and Natural Gas Corporation(<strong>ONGC</strong>) Scholar, India - Awardee for scholarships awarded to meritorious students</Bullet>
                <Bullet as="li">Islamic Development Bank Scholarship(<strong>IsDB</strong>), Saudi Arabia - For academic excellence</Bullet>
                <Bullet as="li">Lead Ignite Transform(<strong>LIT</strong>) Scholar, Dubai - Based on merit by AMU Old Boys Association</Bullet>
                <Bullet as="li">University Merit Scholarship, AMU - Top performer (<strong>Gold Medalist</strong>) in freshman year</Bullet>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </motion.div>
  );
};

export default About;

