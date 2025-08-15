import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Box, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import useColorSwitcher from "../../utils/useColorSwitcher";

const MobileNavLink = ({ name, link, onClick }) => {
  const { secondary } = useColorSwitcher();
  const location = useLocation();
  const textColor = useColorModeValue("gray.700", "gray.200");
  const hoverBg = useColorModeValue("gray.50", "gray.700");

  // Check if this is the active page
  const isActive = location.pathname === `/${link}` || (location.pathname === "/" && link === "");

  return (
    <Box position="relative" w="100%">
      <Button
        as={Link}
        to={`/${link}`}
        variant="ghost"
        fontWeight="600"
        fontSize="lg"
        color={isActive ? "white" : textColor}
        bg={isActive ? secondary : "transparent"}
        w="100%"
        h="56px"
        justifyContent="flex-start"
        px={6}
        mb={2}
        borderRadius="xl"
        position="relative"
        overflow="hidden"
        _hover={{
          bg: isActive ? secondary : hoverBg,
          transform: "translateX(8px) scale(1.02)"
        }}
        _active={{
          transform: "translateX(4px) scale(0.98)"
        }}
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        onClick={onClick}
      >
        {/* Active indicator */}
        {isActive && (
          <Box
            as={motion.div}
            position="absolute"
            left="16px"
            top="50%"
            w="4px"
            h="20px"
            bg="white"
            borderRadius="full"
            initial={{ scale: 0, y: "-50%" }}
            animate={{ scale: 1, y: "-50%" }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
        )}

        <Box as={motion.span}
          ml={isActive ? 4 : 0}
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {name}
        </Box>

        {/* Hover background effect */}
        {!isActive && (
          <Box
            as={motion.div}
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg={secondary}
            opacity={0}
            whileHover={{ opacity: 0.1 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </Button>
    </Box>
  );
};

export default MobileNavLink;
