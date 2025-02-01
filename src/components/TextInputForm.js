import React from 'react';
import {
  Box,
  VStack,
  Input,
  Button,
  Spinner,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

function TextInputForm({ 
  inputText,
  setInputText,
  onSubmit,
  placeholder = "Type your message here...",
  buttonText = "Send",
  isLoading = false
}) {
  const bgColor = useColorModeValue('white', 'gray.800');
  const inputBg = useColorModeValue('purple.50', 'gray.700');
  const borderColor = useColorModeValue('purple.100', 'purple.700');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && inputText.trim() && !isLoading) {
      onSubmit();
    }
  };

  return (
    <Box 
      p={4} 
      shadow="md" 
      borderWidth="1px" 
      borderRadius="lg" 
      bg={bgColor}
      borderColor={borderColor}
    >
      <VStack spacing={4} align="stretch">
        <Box display="flex" gap={3}>
          <Input
            placeholder={placeholder}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            size="lg"
            variant="filled"
            bg={inputBg}
            _hover={{ bg: inputBg }}
            _focus={{ 
              bg: inputBg,
              borderColor: 'purple.300',
            }}
            disabled={isLoading}
          />
          <Button
            bgGradient="linear(to-r, blue.400, purple.500)"
            _hover={{
              bgGradient: "linear(to-r, blue.500, purple.600)",
            }}
            size="lg"
            onClick={onSubmit}
            isDisabled={!inputText?.trim() || isLoading}
            minW={{ base: '44px', md: '100px' }}
            px={{ base: 0, md: 4 }}
            position="relative"
          >
            {isLoading ? (
              <Spinner size="sm" />
            ) : (
              <>
                <Box display={{ base: 'none', md: 'block' }}>{buttonText}</Box>
                <Box display={{ base: 'block', md: 'none' }}>
                  <Icon as={ArrowForwardIcon} />
                </Box>
              </>
            )}
          </Button>
        </Box>
      </VStack>
    </Box>
  );
}

export default TextInputForm; 