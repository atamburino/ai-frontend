import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Button,
  useColorMode,
  Container,
  Icon,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const borderColor = useColorModeValue('purple.100', 'purple.900');
  const taglineColor = useColorModeValue('purple.600', 'purple.200');

  return (
    <Box 
      as="header" 
      py={4} 
      borderBottom="1px" 
      borderColor={borderColor}
      bg={useColorModeValue('white', 'gray.800')}
      position="sticky"
      top={0}
      zIndex={10}
      backdropFilter="blur(10px)"
      backgroundColor={useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)')}
    >
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <Link 
            as={RouterLink} 
            to="/" 
            _hover={{ textDecoration: 'none', transform: 'scale(1.02)' }} 
            transition="all 0.2s"
          >
            <Flex align="center" gap={2}>
              <Heading 
                size="md"
                bgGradient="linear(to-r, blue.400, purple.500)"
                bgClip="text"
              >
                AnointedAI 🤖✨
              </Heading>
              <Text 
                fontSize="sm" 
                color={taglineColor}
                fontWeight="medium"
              >
                Turn on holy mode
              </Text>
            </Flex>
          </Link>

          <Flex gap={4} align="center">
            <Button
              size="sm"
              onClick={toggleColorMode}
              variant="ghost"
              _hover={{
                bg: useColorModeValue('purple.50', 'purple.900'),
              }}
            >
              <Icon 
                as={colorMode === 'light' ? MoonIcon : SunIcon} 
                color={useColorModeValue('purple.500', 'purple.200')}
              />
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header; 