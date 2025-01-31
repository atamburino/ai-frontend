import React from 'react';
import {
  Box,
  Container,
  Text,
  Link,
  VStack,
  HStack,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';

function Footer() {
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.500', 'gray.400');

  return (
    <Box as="footer" py={8} borderTop="1px" borderColor={borderColor}>
      <Container maxW="container.xl">
        <VStack spacing={4}>
          <HStack spacing={4} wrap="wrap" justify="center">
            <Link href="https://www.bible.com" isExternal color="blue.500">
              Bible.com
            </Link>
            <Text>•</Text>
            <Link href="https://www.biblehub.com" isExternal color="blue.500">
              Bible Hub
            </Link>
            <Text>•</Text>
            <Link href="https://www.biblegateway.com" isExternal color="blue.500">
              Bible Gateway
            </Link>
          </HStack>
          
          <Divider />
          
          <Text fontSize="sm" color={textColor} textAlign="center">
            AnointedAI: Where divine wisdom meets modern tech.
            Always verify information with official sources.
          </Text>
          
          <Text fontSize="xs" color={textColor}>
            © {new Date().getFullYear()} AnointedAI 🤖💫 - Blessed by the algorithm
          </Text>
        </VStack>
      </Container>
    </Box>
  );
}

export default Footer; 