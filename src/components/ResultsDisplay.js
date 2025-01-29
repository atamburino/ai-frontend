import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
} from '@chakra-ui/react';

function ResultsDisplay({ data }) {
  if (!data) return null;

  return (
    <Box p={6} shadow="md" borderWidth="1px" borderRadius="lg" bg="white">
      <VStack spacing={4} align="stretch">
        <Heading size="md">Results</Heading>
        <Text whiteSpace="pre-wrap">
          {JSON.stringify(data, null, 2)}
        </Text>
      </VStack>
    </Box>
  );
}

export default ResultsDisplay; 