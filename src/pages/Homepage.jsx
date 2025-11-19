import React from "react";
import RobotModel from "../RobotModel";
import { motion } from "framer-motion";
import { Box, Center, Flex, Text,Image } from "@chakra-ui/react";
import { Body, Heading1, Heading3 } from "../components/Typography";
import { PrimaryButton } from "../components/Buttons";
import { useState, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import useColorSwitcher from "../utils/useColorSwitcher";

/**
 * A custom hook that animates the typing and erasing of a list of texts.
 * @param {Array} texts - An array of texts to animate.
 * @param {number} typingSpeed - The speed at which each character is typed.
 * @param {number} deletingSpeed - The speed at which each character is deleted.
 * @param {number} delay - The delay before the animation starts.
 * @returns {Object} - An object containing the animated text and whether the animation is erasing.
 */
const useTextAnimation = (texts = [], typingSpeed = 150, deletingSpeed = 75, delay = 2000) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState('');
  const [isErasing, setIsErasing] = useState(false); 

useEffect(() => {
  if (subIndex === texts[index].length + 1 && !reverse) {
    setTimeout(() => setReverse(true), delay);
    setIsErasing(true);
    return;
  }

  if (subIndex === 0 && reverse) {
    setReverse(false);
    setIsErasing(true);
    setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    return;
  }

  const timeout = setTimeout(() => {
    setText(texts[index].substring(0, subIndex));
    setSubIndex((prevSubIndex) => prevSubIndex + (reverse ? -1 : 1));
  }, reverse ? deletingSpeed : typingSpeed);

  return () => clearTimeout(timeout);
}, [texts, index, subIndex, reverse, typingSpeed, deletingSpeed, delay]);

return { text, isErasing };
};

const Homepage = () => {
  const { colorDark, secondary } = useColorSwitcher();
  const { text: animatedText, isErasing } = useTextAnimation([
    'Full-Stack App Developer',
    'ML & Data Science Enthusiast',
    'MS at McGill University',
    'B.Tech in Computer Engineering from AMU',
  ], 150, 75, 2000);
  const placeholderStyle = {
    display: 'inline-block', 
    height: '8vh', 
    width: '8vh', 
    visibility: 'hidden',
    flexShrink: 0
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <Box
        as="div"
        mt={{ base: "2em", md: "8em" }}
        px={{ base: "0", md: "20", xl: "0" }}
      >
        <Flex justifyContent="center">
          <Box as="section" w="100%" textAlign={{ base: "center", md: "left" }}>
            <Flex
              flexDir="column"
              justifyContent="space-around"
              h={{ base: "480", lg: "500" }}
              alignItems={{ sm: "center", lg: "flex-start" }}
            >
              <Text
                color={colorDark}
                fontFamily="Space Mono, monospace"
                fontSize={{ base: "18px", md: "32px" }}
                fontWeight="bold"
                textAlign={{ base: "center", md: "left" }}
              >
                Hello, I'm
              </Text>
              
              <Box 
                w="100%"
                display="flex"
                justifyContent={{ base: "center", md: "flex-start" }}
                alignItems="center"
              >
                <Heading1 display="flex" alignItems="center" justifyContent="inherit">
                  <Box 
                    as="span"
                    ml={isErasing ? { base: '8vh', md: '0' } : '0'}
                    transition="margin-left 0.3s ease"
                  >
                    Adnaan
                  </Box>
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '8vh', height: '8vh' }}>
                    {isErasing ? 
                      <span style={placeholderStyle}></span> : 
                      <Image 
                        src={"https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"} 
                        alt="hey symbol" 
                        style={{ height: '8vh', width: '8vh', objectFit: 'contain' }} 
                      />
                    }
                  </span>
                </Heading1>
              </Box>

              <Box 
                as={Heading3} 
                big={true} 
                color={secondary} 
                minHeight={{ base: "3em", md: "3em" }}
                display="flex"
                alignItems="center"
                justifyContent={{ base: "center", md: "flex-start" }}
                textAlign={{ base: "center", md: "left" }}
                mb={{ base: "1", md: "4" }}
              >
                {animatedText}
              </Box>

              <Body
                w={{ base: "90%", xl: "40%" }}
                fontWeight="bold"
                mb={{ base: "4", md: "8" }}
                mx={{ base: "auto", md: "0" }}
                textAlign={{ base: "center", md: "left" }}
                mt={{ base: "2", md: "0" }}
                fontSize={{ base: "sm", md: "md" }}
              >
                A curiosity-driven coder with a passion for developing inclusive mobile & 
                web experiences empowered with AI and ML. Enthusiastic about learning and applying skills to new projects.
              </Body>

              <Box textAlign={{ base: "center", md: "left" }} w="100%" mt={{ base: "2", md: "4" }}>
                <PrimaryButton
                  as="a"
                  href="mailto:iamadnaanmohd@gmail.com"
                  theme={secondary}
                  w={{ base: "160px", md: "180px" }}
                  h={{ base: "44px", md: "52px" }}
                  fontSize={{ base: "sm", md: "md" }}
                >
                  GET IN TOUCH
                </PrimaryButton>
              </Box>
            </Flex>
          </Box>
          <Center
            width={{ lg: "20rem", xl: "30rem" }}
            height={{ lg: "40rem", xl: "45rem" }}
            display={{ base: "none", lg: "block" }}
            mt="0"
          >
            <Canvas>
              <OrbitControls />
              <ambientLight />
              <Float speed="4.0" floatIntensity="2">
                <RobotModel />
              </Float>
            </Canvas>
          </Center>
        </Flex>
      </Box>
    </motion.div>
  );
};

export default Homepage;

//GIF

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import robotDamn from "../assets/projects/robotDamn.gif";
// import robotRead from "../assets/projects/robotRead.gif";
// import robotScience from "../assets/projects/robotScience.gif";
// import robotHurray from "../assets/projects/robotHurray.gif";
// import robotGoogles from "../assets/projects/robotGoogles.gif";
// import robotFly from "../assets/projects/robotFly.gif";
// import robotJump from "../assets/projects/robotJump.gif"
// import robotDraw from "../assets/projects/robotDraw.gif";
// import { Box, Flex,Center, Text,Image } from "@chakra-ui/react";
// import { Body, Heading1, Heading2, Heading3 } from "../components/Typography";
// import { PrimaryButton } from "../components/Buttons";
// import useColorSwitcher from "../utils/useColorSwitcher";

// const Homepage = () => {
//   const { colorDark, secondary } = useColorSwitcher();
//   const [currentRobotGif, setCurrentRobotGif] = useState(robotRead);
//   const robotGifs = [
//     robotDamn,
//     robotRead,
//     robotScience,
//     robotHurray,
//     robotGoogles,
//     robotFly,
//     robotJump,
//     robotDraw,
//   ];

//   let currentIndex = 0;

//   const changeRobotGif = () => {
//     currentIndex = (currentIndex + 1) % robotGifs.length;
//     setCurrentRobotGif(robotGifs[currentIndex]);
//   };

//   useEffect(() => {
//     const intervalId = setInterval(changeRobotGif, 3000);

//     return () => clearInterval(intervalId);
//   }, []); 

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1, ease: "easeInOut" }}
//       exit={{ opacity: 0 }}
//     >
//       <Box
//         as="div"
//         mt={{ base: "4em", md: "8em" }}
//         px={{ base: "0", md: "20", xl: "0" }}
//       >
//         <Flex justifyContent="center">
//           <Box as="section" w="100%" textAlign={{ base: "center", md: "left" }}>
//             <Flex
//               flexDir="column"
//               justifyContent="space-around"
//               h={{ base: "500", lg: "500" }}
//               alignItems={{ sm: "center", lg: "flex-start" }}
//             >
//               <Text
//                 color={colorDark}
//                 fontFamily="Space Mono, monospace"
//                 fontSize={{ base: "24px", md: "32px" }}
//                 fontWeight="bold"
//               >
//                 Hello, I'm
//               </Text>
//               <Heading2 big={true}>
//                 Adnaan
//               <Image src={"https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"} alt="hey symbol" style={{ height: '8vh', display: 'inline-block' }} />
              
//               </Heading2>

//               <Heading3 big={true} color={secondary}>
//                 Learning Everything
//               </Heading3>
//               <Body
//                 w={{ base: "80%", xl: "40%" }}
//                 bg={{
//                   base: "red.200",
//                   xs: "yellow.200",
//                   sm: "blue.200",
//                   md: "green.200",
//                 }}
//                 fontWeight="bold"
//               >
// <br>

// </br>
//               A curiosity-driven coder with a passion for developing inclusive mobile & 
//               web experiences empowered with AI and ML. Enthusiastic about learning and applying skills to new projects.
//               </Body>
//               <PrimaryButton
//                 as="a"
//                 href="mailto:iamadnaanmohd21@gmail.com"
//                 theme={secondary}
//                 mt={4}
//               >
//                 Mail Me
//               </PrimaryButton>
//             </Flex>
//             </Box>

//             <Center
//             width={{ lg: "20rem", xl: "30rem" }}
//             height={{ lg: "40rem", xl: "45rem" }}
//             display={{ base: "none", lg: "block" }}
//             mt="0"
//             >

//                 <Box maxW="500px">
//                   <Image
//                     src={currentRobotGif}
//                     alt="Robot Gif"
//                     w="100%"
//                     h="auto"
//                   />
//                 </Box>
//             </Center>
//           </Flex>
//        </Box>
//      </motion.div>      
//   );
// };

// export default Homepage;import React from "react";