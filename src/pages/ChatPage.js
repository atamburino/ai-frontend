import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import TextInputForm from '../components/TextInputForm';
import ResultsDisplay from '../components/ResultsDisplay';
import PageTransition from '../components/PageTransition';

function ChatPage({ messages, onSendMessage }) {
  return (
    <PageTransition>
      <Box py={8}>
        <Container maxW="container.xl">
          <ResultsDisplay messages={messages} />
          <Box mt={8}>
            <TextInputForm onSendMessage={onSendMessage} />
          </Box>
        </Container>
      </Box>
    </PageTransition>
  );
}

export default ChatPage; 