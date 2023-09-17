import React from "react";
import { motion } from "framer-motion";
import robot from "../assets/projects/Robot.gif";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { Body, Heading1, Heading3 } from "../components/Typography";
import { PrimaryButton } from "../components/Buttons";

import useColorSwitcher from "../utils/useColorSwitcher";

const Homepage = () => {
  const { colorDark, secondary } = useColorSwitcher();
  const isMobile = useBreakpointValue({ base: true, md: false });

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
        <Flex
          flexDir={{ base: "column-reverse", md: "row" }}
          justifyContent={{ md: "space-between" }}
          alignItems={{ sm: "center", lg: "flex-start" }}
        >
          <Box as="section" textAlign={isMobile ? "center" : "left"}>
            <Text
              color={colorDark}
              fontFamily="Space Mono, monospace"
              fontSize={{ base: "24px", md: "32px" }}
              fontWeight="bold"
            >
              Hello, I'm
            </Text>
            <Heading1>Mohd Adnaan</Heading1>
            <Heading3 big={true} color={secondary}>
              Learning Full Stack App & Web Development, ML & AI
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
              I'm a pre-final year Computer Engineering student at Z.H.C.E.T
              with a fervor for curiosity-driven coding and creating inclusive
              mobile & web experiences. Enthusiastic about learning and applying
              skills to new projects, I welcome opportunities for growth and
              connection.
            </Body>
            <PrimaryButton
              as="a"
              href="mailto:iamadnaanmohd21@gmail.com"
              theme={secondary}
              mt={4}
            >
              Mail Me
            </PrimaryButton>
          </Box>

          <Box maxW="500px" mt={{ base: "2em", md: "0" }}>
            <Image src={robot} alt="Robot Gif" w="100%" h="auto" />
          </Box>
        </Flex>
      </Box>
    </motion.div>
  );
};

export default Homepage;
