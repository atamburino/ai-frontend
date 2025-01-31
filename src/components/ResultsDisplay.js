import React from 'react';
import {
  Box,
  VStack,
  Text,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';

function ResultsDisplay({ messages }) {
  const bgColor = useColorModeValue('white', 'gray.700');
  const userBubbleBg = useColorModeValue('blue.500', 'blue.400');
  const assistantBubbleBg = useColorModeValue('gray.100', 'gray.600');
  const assistantTextColor = useColorModeValue('gray.800', 'white');

  if (!messages || messages.length <= 1) return null; // Don't show if only system message exists

  return (
    <Box p={6} shadow="md" borderWidth="1px" borderRadius="lg" bg={bgColor}>
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
                maxW={{ base: '85%', md: '80%' }}
                bg={isUser ? userBubbleBg : assistantBubbleBg}
                color={isUser ? 'white' : assistantTextColor}
                p={3}
                borderRadius="lg"
                borderBottomRightRadius={isUser ? 0 : 'lg'}
                borderBottomLeftRadius={isUser ? 'lg' : 0}
                whiteSpace="pre-wrap"
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