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
} from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box as="header" py={4} borderBottom="1px" borderColor="gray.200">
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <Flex align="center" gap={2}>
            <Heading size="md">Bible Chat</Heading>
            <Text fontSize="sm" color="gray.500">powered by AI</Text>
          </Flex>

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