import React from 'react';
import {
  Box,
  Container,
  Text,
  Link,
  VStack,
  HStack,
  Divider,
} from '@chakra-ui/react';

function Footer() {
  return (
    <Box as="footer" py={8} borderTop="1px" borderColor="gray.200">
      <Container maxW="container.xl">
        <VStack spacing={4}>
          <HStack spacing={4} wrap="wrap" justify="center">
            <Link href="https://andystanley.com" isExternal color="blue.500">
              Andy Stanley
            </Link>
            <Text>•</Text>
            <Link href="https://www.bible.com" isExternal color="blue.500">
              Bible
            </Link>
            <Text>•</Text>
            <Link href="https://www.biblehub.com" isExternal color="blue.500">
              Bible Hub
            </Link>
          </HStack>
          
          <Divider />
          
          <Text fontSize="sm" color="gray.500" textAlign="center">
            This AI assistant is designed to help with Bible-related questions.
            Always verify information with official sources.
          </Text>
          
          <Text fontSize="xs" color="gray.400">
            © {new Date().getFullYear()} Bible Chat AI. All rights reserved.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}

export default Footer; 