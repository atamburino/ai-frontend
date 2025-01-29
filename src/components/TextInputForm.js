import React from 'react';
import {
  Box,
  VStack,
  Text,
  Input,
  Button,
} from '@chakra-ui/react';

function TextInputForm({ inputText, setInputText, onSubmit }) {
  return (
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
          onClick={onSubmit}
          isDisabled={!inputText.trim()}
        >
          Process Text
        </Button>
      </VStack>
    </Box>
  );
}

export default TextInputForm; 