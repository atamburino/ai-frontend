import React from 'react';
import {
  VStack,
  Container,
  useToast,
} from '@chakra-ui/react';
import TextInputForm from './TextInputForm';
import ResultsDisplay from './ResultsDisplay';

function ChatContainer({ messages, inputText, setInputText, handleSubmit, isLoading }) {
  return (
    <Container maxW="container.xl">
      <VStack spacing={8} align="stretch">
        <ResultsDisplay messages={messages} />
        
        <TextInputForm 
          inputText={inputText}
          setInputText={setInputText}
          onSubmit={handleSubmit}
          placeholder="Ask a Bible-related question..."
          buttonText="Ask Question"
          isLoading={isLoading}
        />
      </VStack>
    </Container>
  );
}

export default ChatContainer; 