import React, { useState } from 'react';
import {
  VStack,
  Heading,
  Container,
  useToast
} from '@chakra-ui/react';
import api from './api';
import TextInputForm from './components/TextInputForm';
import ResultsDisplay from './components/ResultsDisplay';

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
        
        <TextInputForm 
          inputText={inputText}
          setInputText={setInputText}
          onSubmit={handleSubmit}
        />

        <ResultsDisplay data={data} />
      </VStack>
    </Container>
  );
}

export default App;
