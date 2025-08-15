import { Button, Box } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import useColorSwitcher from "../../utils/useColorSwitcher";

export const NavLink = ({ name, link, ...props }) => {
  const { secondary } = useColorSwitcher();
  const location = useLocation();

  // Check if this is the active page
  const isActive = location.pathname === `/${link}` || (location.pathname === "/" && link === "");

  return (
    <Box position="relative" mx={3}>
      <Button
        as={Link}
        to={`/${link}`}
        variant="ghost"
        fontSize="xl"
        fontWeight="600"
        px={6}
        py={3}
        h="auto"
        minH="50px"
        borderRadius="xl"
        position="relative"
        overflow="hidden"
        color={isActive ? "white" : undefined}
        bg={isActive ? secondary : "transparent"}
        _hover={{
          bg: isActive ? secondary : "gray.100",
          transform: "translateY(-2px)",
          shadow: isActive ? "lg" : "md"
        }}
        _dark={{
          _hover: {
            bg: isActive ? secondary : "gray.700"
          }
        }}
        transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
        {...props}
      >
        {/* Background animation */}
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

        <Box as={motion.span} whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400 }}>
          {name}
        </Box>
      </Button>
    </Box>
  );
};
