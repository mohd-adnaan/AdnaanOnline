import React, { useState } from "react";
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  Flex,
  Box,
} from "@chakra-ui/react";
import useColorSwitcher from "../../utils/useColorSwitcher";
import { NavLink } from "./NavLink";
import MobileNavLink from "./MobileNavLink";

import "./styles.css";
import { motion } from "framer-motion";

const Navbar = (props) => {
  const { text, SwitchIcon } = useColorSwitcher();
  const { toggleColorMode } = useColorMode();
  const [boxClass, setBoxClass] = useState("");
  const [clicked, setClicked] = useState(null);
  const colorDark = useColorModeValue("gray.800", "white");
  const menuBg = useColorModeValue("white", "gray.800");
  const menuBorder = useColorModeValue("gray.200", "gray.600");

  const buttons = [
    {
      name: "Home",
      link: "",
    },
    {
      name: "About",
      link: "about",
    },
    {
      name: "Skills",
      link: "skills",
    },
    {
      name: "Projects",
      link: "projects",
    },
    {
      name: "Contact Info",
      link: "contact",
    },
  ];

  return (
    <Flex align="center" justify="space-between" mt={7} w="100%">
      {/* Mobile hamburger menu - Left side */}
      <Box
        id="nav-icon2"
        onClick={() => {
          setBoxClass(prev => (prev === "" ? "open" : ""));
          setClicked(prev => (prev === null ? 1 : prev ^ 1));
        }}
        className={boxClass}
        display={["flex", "flex", "flex", "none"]}
        ml={4}
        cursor="pointer"
        p={2}
        borderRadius="md"
        _hover={{ bg: useColorModeValue("gray.100", "gray.700") }}
        transition="all 0.2s ease"
      >
        <Box as="span" background={colorDark}></Box>
        <Box as="span" background={colorDark}></Box>
        <Box as="span" background={colorDark}></Box>
        <Box as="span" background={colorDark}></Box>
        <Box as="span" background={colorDark}></Box>
        <Box as="span" background={colorDark}></Box>
      </Box>

      {/* Desktop navigation - Center */}
      <Flex display={["none", "none", "none", "flex"]} width="xl" justify="center">
        {buttons.map((b, id) => {
          return <NavLink name={b.name} link={b.link} key={id} />;
        })}
      </Flex>

      {/* Dark/Light toggle - Right side */}
      <IconButton
        fontSize="xl"
        aria-label={`Switch to ${text} mode`}
        variant="ghost"
        color="current"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        mr={4}
        borderRadius="full"
        _hover={{
          bg: useColorModeValue("gray.100", "gray.700")
        }}
        transition="all 0.2s ease"
        {...props}
      />

      {/* Clean Mobile Menu */}
      {clicked === 1 && (
        <Box
          as={motion.div}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          position="fixed"
          top="80px"
          left="20px"
          right="20px"
          zIndex={1000}
        >
          <Box
            bg={menuBg}
            borderRadius="lg"
            boxShadow="lg"
            border="1px solid"
            borderColor={menuBorder}
            py={4}
            px={2}
          >
            {buttons.map((b, id) => {
              return (
                <MobileNavLink
                  key={id}
                  name={b.name}
                  link={b.link}
                  onClick={() => {
                    setClicked(null);
                    setBoxClass("");
                  }}
                />
              );
            })}
          </Box>
        </Box>
      )}

      {/* Simple Overlay */}
      {clicked === 1 && (
        <Box
          position="fixed"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="rgba(0, 0, 0, 0.3)"
          zIndex={999}
          onClick={() => {
            setClicked(null);
            setBoxClass("");
          }}
        />
      )}
    </Flex>
  );
};

export default Navbar;
