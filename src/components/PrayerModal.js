import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  VStack,
  useColorModeValue,
  Box,
} from '@chakra-ui/react';

const prayers = [
  {
    title: "Quick Blessing 🙏",
    text: "Lord, bless this chat fr fr, keep it holy and lit! No cap! 🙌✨"
  },
  {
    title: "Wisdom Prayer 📚",
    text: "Give me that divine wisdom upgrade, God! Let's get this spiritual W! 🧠💫"
  },
  {
    title: "Daily Vibe Check ✨",
    text: "God, keep my vibe immaculate and my spirit blessed! You the real GOAT! 🐐"
  }
];

const PrayerModal = ({ isOpen, onClose }) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('purple.100', 'purple.700');
  const boxBg = useColorModeValue('purple.50', 'gray.700');

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset="slideInBottom">
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent bg={bgColor} borderColor={borderColor} borderWidth="1px">
        <ModalHeader 
          bgGradient="linear(to-r, blue.400, purple.500)"
          bgClip="text"
          textAlign="center"
        >
          Quick Prayers
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <VStack spacing={4} align="stretch">
            {prayers.map((prayer, index) => (
              <Box
                key={index}
                p={4}
                bg={boxBg}
                borderRadius="md"
                borderWidth="1px"
                borderColor={borderColor}
                transition="all 0.2s"
                _hover={{
                  transform: 'translateY(-2px)',
                  shadow: 'md',
                }}
              >
                <Text fontWeight="bold" mb={2}>{prayer.title}</Text>
                <Text>{prayer.text}</Text>
              </Box>
            ))}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PrayerModal; 