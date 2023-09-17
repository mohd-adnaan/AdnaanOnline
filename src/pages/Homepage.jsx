import React from "react";
import { motion } from "framer-motion";
import robot from "../assets/projects/Robot.gif";
import { Box, Flex,Center, Text,Image } from "@chakra-ui/react";
import { Body, Heading1, Heading2, Heading3 } from "../components/Typography";
import { PrimaryButton } from "../components/Buttons";


import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";


import useColorSwitcher from "../utils/useColorSwitcher";

const Homepage = () => {
  const { colorDark, secondary } = useColorSwitcher();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <Box
        as="div"
        mt={{ base: "4em", md: "8em" }}
        px={{ base: "0", md: "20", xl: "0" }}
      >
        <Flex justifyContent="center">
          <Box as="section" w="100%" textAlign={{ base: "center", md: "left" }}>
            <Flex
              flexDir="column"
              justifyContent="space-around"
              h={{ base: "500", lg: "500" }}
              alignItems={{ sm: "center", lg: "flex-start" }}
            >
              <Text
                color={colorDark}
                fontFamily="Space Mono, monospace"
                fontSize={{ base: "24px", md: "32px" }}
                fontWeight="bold"
              >
                Hello, I'm
              </Text>
              <Heading1>
               Mohd Adnaan
              <Image src={"https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"} alt="hey symbol" style={{ height: '10vh', display: 'inline-block' }} />
              </Heading1>


              <Heading3 big={true} color={secondary}>
                Learning Everything
              </Heading3>
              <Body
                w={{ base: "80%", xl: "40%" }}
                bg={{
                  base: "red.200",
                  xs: "yellow.200",
                  sm: "blue.200",
                  md: "green.200",
                }}
                fontWeight="bold"
              >
<br>

</br>
              A curiosity-driven coder with a passion for developing inclusive mobile & 
              web experiences. Enthusiastic about learning and applying skills to new projects.
              </Body>
              <PrimaryButton
                as="a"
                href="mailto:iamadnaanmohd21@gmail.com"
                theme={secondary}
                mt={4}
              >
                Mail Me
              </PrimaryButton>
            </Flex>
            </Box>
            <Center
            width={{ lg: "20rem", xl: "30rem" }}
            height={{ lg: "40rem", xl: "45rem" }}
            display={{ base: "none", lg: "block" }}
            mt="0"
            >

              <Box maxW="500px">
              <Image src={robot} alt="Robot Gif" w="100%" h="auto" />
              </Box>``

            </Center>
          </Flex>
       </Box>
     </motion.div>      
  );
};

export default Homepage;