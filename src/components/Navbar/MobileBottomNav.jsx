import React from 'react';
import { Box, Flex, VStack, Text } from '@chakra-ui/react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useColorModeValue } from '@chakra-ui/react';
import { 
  AiOutlineHome, 
  AiOutlineUser, 
  AiOutlineTool, 
  AiOutlineProject,
  AiOutlineMail 
} from 'react-icons/ai';

const MobileBottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const activeColor = useColorModeValue('#008fb0', '#3cdd9a'); // Your teal color
  const inactiveColor = useColorModeValue('gray.600', 'gray.400');

  const navItems = [
    { name: 'home', icon: AiOutlineHome, path: '/' },
    { name: 'about', icon: AiOutlineUser, path: '/about' },
    { name: 'skills', icon: AiOutlineTool, path: '/skills' },
    { name: 'projects', icon: AiOutlineProject, path: '/projects' },
    { name: 'contact', icon: AiOutlineMail, path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <Box
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      bg={bgColor}
      borderTop="1px solid"
      borderColor={borderColor}
      display={{ base: 'block', md: 'none' }} // Only show on mobile
      zIndex={1000}
      boxShadow="0 -2px 10px rgba(0,0,0,0.1)"
      pb="env(safe-area-inset-bottom)" // For iPhone notch
    >
      <Flex
        justify="space-around"
        align="center"
        h="65px"
        px={2}
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          
          return (
            <VStack
              key={item.name}
              spacing={0.5}
              flex={1}
              onClick={() => navigate(item.path)}
              cursor="pointer"
              color={active ? activeColor : inactiveColor}
              transition="all 0.2s"
              _active={{
                transform: 'scale(0.95)',
              }}
              py={1}
            >
              <Icon size={24} />
              <Text fontSize="10px" fontWeight={active ? 'bold' : 'normal'}>
                {item.name}
              </Text>
              {active && (
                <Box
                  w="4px"
                  h="4px"
                  borderRadius="full"
                  bg={activeColor}
                  mt={1}
                />
              )}
            </VStack>
          );
        })}
      </Flex>
    </Box>
  );
};

export default MobileBottomNav;