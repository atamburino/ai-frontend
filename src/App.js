import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Heading,
  Text,
  Container,
  createToaster
} from '@chakra-ui/react';
import api from './api';

// Create a toaster instance
const toaster = createToaster({ 
  position: 'top',
  duration: 5000,
});

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Example API call
    const fetchData = async () => {
      try {
        const response = await api.get('/api/example');
        setData(response.data);
      } catch (error) {
        toaster.show({
          title: 'Error',
          description: error.message || 'Failed to fetch data',
          status: 'error',
          isClosable: true,
        });
      }
    };

    fetchData();
  }, []);

  return (
    <ChakraProvider>
      <Container maxW="container.xl" py={10}>
        <VStack spacing={8}>
          <Heading>Welcome to Your App</Heading>
          <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Text>Your backend connection is ready!</Text>
            {data && (
              <Text mt={4}>
                Data from backend: {JSON.stringify(data)}
              </Text>
            )}
          </Box>
        </VStack>
      </Container>
    </ChakraProvider>
  );
}

export default App;
