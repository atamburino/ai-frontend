import React from 'react';
import {
  Box,
  VStack,
  Text,
  Flex,
} from '@chakra-ui/react';

function ResultsDisplay({ messages }) {
  if (!messages || messages.length <= 1) return null; // Don't show if only system message exists

  return (
    <Box p={6} shadow="md" borderWidth="1px" borderRadius="lg" bg="white">
      <VStack spacing={4} align="stretch">
        {messages.map((message, index) => {
          if (message.role === 'system') return null; // Don't show system messages
          
          const isUser = message.role === 'user';
          
          return (
            <Flex
              key={index}
              justify={isUser ? 'flex-end' : 'flex-start'}
            >
              <Box
                maxW="80%"
                bg={isUser ? 'blue.500' : 'gray.100'}
                color={isUser ? 'white' : 'black'}
                p={3}
                borderRadius="lg"
                borderBottomRightRadius={isUser ? 0 : 'lg'}
                borderBottomLeftRadius={isUser ? 'lg' : 0}
              >
                <Text>{message.content}</Text>
              </Box>
            </Flex>
          );
        })}
      </VStack>
    </Box>
  );
}

export default ResultsDisplay; 