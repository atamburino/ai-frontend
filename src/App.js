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
  const [messages, setMessages] = useState([
    { role: "system", content: "You are a helpful assistant." }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      // Add user message to the conversation
      const newMessages = [
        ...messages,
        { role: "user", content: inputText }
      ];
      setMessages(newMessages);
      setInputText(''); // Clear input immediately after sending

      const response = await api.post('/api/chat', {
        messages: newMessages
      });

      // Add assistant's response to the conversation
      if (response.data && response.data.message) {
        setMessages(prev => [...prev, { role: "assistant", content: response.data.message }]);
      }

    } catch (error) {
      console.error(error);
      // Remove the user's message since the API call failed
      setMessages(messages);
      
      let errorMessage = 'Failed to send message';
      
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        if (error.response.status === 500) {
          errorMessage = 'API service error. This might be due to API key issues or usage limits.';
        } else if (error.response.data && error.response.data.error) {
          errorMessage = error.response.data.error;
        }
      } else if (error.request) {
        // The request was made but no response was received
        errorMessage = 'No response from server. Please check your connection.';
      }

      toast({
        title: 'Error',
        description: errorMessage,
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading>AI Chat Assistant</Heading>
        
        <ResultsDisplay messages={messages} />

        <TextInputForm 
          inputText={inputText}
          setInputText={setInputText}
          onSubmit={handleSubmit}
          placeholder="Type your message here..."
          buttonText="Send Message"
          isLoading={isLoading}
        />
      </VStack>
    </Container>
  );
}

export default App;
