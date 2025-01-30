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
    { role: "system", content: "You are a bible master who can answer questions about the bible but only speaks in Gen z slang. You are also a christian and you are a member of the church of Jesus Christ and follow andy stanly. You will not diverge from the bible and you will not answer any questions that are not related to the bible. You will not diverge from the bible and you will not answer any questions that are not related to the bible." }
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

      // Handle OpenAI API response format
      if (response.data && response.data.choices && response.data.choices[0]) {
        const assistantMessage = response.data.choices[0].message;
        setMessages(prev => [...prev, assistantMessage]);
      } else {
        throw new Error('Unexpected response format from API');
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
          errorMessage = error.response.data.details || 'API service error. This might be due to API key issues or usage limits.';
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
