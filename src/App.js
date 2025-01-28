import React, { useState } from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  Container,
  Input,
  Button,
  useToast
} from '@chakra-ui/react';
import api from './api';

function App() {
  const [data, setData] = useState(null);
  const [inputText, setInputText] = useState('');
  const toast = useToast();

  const handleSubmit = async () => {
    try {
      const response = await api.post('/api/example', { text: inputText });
      setData(response.data);
      toast({
        title: 'Success',
        description: 'Data sent successfully!',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top'
      });
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error',
        description: error.message || 'Failed to send data',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top'
      });
    }
  };

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading>AI Text Generator</Heading>
        
        <Box p={6} shadow="md" borderWidth="1px" borderRadius="lg" bg="white">
          <VStack spacing={4} align="stretch">
            <Text fontSize="lg" color="gray.600">
              Enter your text below and our AI will process it for you. 
              You can type anything you'd like to analyze or transform.
            </Text>

            <Box>
              <Text mb={2} fontWeight="medium">Your Text</Text>
              <Input
                placeholder="Type your text here..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                size="lg"
                variant="filled"
              />
              <Text mt={2} fontSize="sm" color="gray.600">
                The text will be sent to our AI model for processing
              </Text>
            </Box>

            <Button
              colorScheme="blue"
              size="lg"
              onClick={handleSubmit}
              isDisabled={!inputText.trim()}
            >
              Process Text
            </Button>
          </VStack>
        </Box>

        {data && (
          <Box p={6} shadow="md" borderWidth="1px" borderRadius="lg" bg="white">
            <VStack spacing={4} align="stretch">
              <Heading size="md">Results</Heading>
              <Text whiteSpace="pre-wrap">
                {JSON.stringify(data, null, 2)}
              </Text>
            </VStack>
          </Box>
        )}
      </VStack>
    </Container>
  );
}

export default App;
