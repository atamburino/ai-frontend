import React from 'react';
import {
  Box,
  VStack,
  Input,
  Button,
  Spinner
} from '@chakra-ui/react';

function TextInputForm({ 
  inputText, 
  setInputText, 
  onSubmit,
  placeholder = "Type your message here...",
  buttonText = "Send",
  isLoading = false
}) {
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && inputText.trim() && !isLoading) {
      onSubmit();
    }
  };

  return (
    <Box p={4} shadow="md" borderWidth="1px" borderRadius="lg" bg="white">
      <VStack spacing={4} align="stretch">
        <Box display="flex" gap={3}>
          <Input
            placeholder={placeholder}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            size="lg"
            variant="filled"
            disabled={isLoading}
          />
          <Button
            colorScheme="blue"
            size="lg"
            onClick={onSubmit}
            isDisabled={!inputText.trim() || isLoading}
            minW="100px"
            position="relative"
          >
            {isLoading ? <Spinner size="sm" /> : buttonText}
          </Button>
        </Box>
      </VStack>
    </Box>
  );
}

export default TextInputForm; 