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
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="header" py={4} borderBottom="1px" borderColor="gray.200">
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none', opacity: 0.8 }} transition="all 0.2s">
            <Flex align="center" gap={2}>
              <Heading size="md">AnointedAI 🤖✨</Heading>
              <Text fontSize="sm" color="gray.500">Turn on holy mode</Text>
            </Flex>
          </Link>

          <Flex gap={4} align="center">
            <Button
              size="sm"
              onClick={toggleColorMode}
              variant="ghost"
            >
              <Icon as={colorMode === 'light' ? MoonIcon : SunIcon} />
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header; 