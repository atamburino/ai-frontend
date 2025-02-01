import React, { useState, useEffect } from 'react';
import {
  Box,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

const MotionBox = motion(Box);

const scriptures = [
  { quote: "No cap fr fr, faith can move mountains 🏔️", reference: "Matthew 17:20" },
  { quote: "God's rizz is eternal, no L's in sight 👑", reference: "Romans 8:38-39" },
  { quote: "Blessed be the GOAT 🐐", reference: "Psalm 23:1" },
  { quote: "Stay blessed, stay winning 💯", reference: "Philippians 4:13" },
  { quote: "Vibe check: Immaculate ✨", reference: "Genesis 1:31" },
];

const ScriptureBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bgColor = useColorModeValue('blue.50', 'blue.900');
  const textColor = useColorModeValue('purple.600', 'purple.200');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % scriptures.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box 
      py={2} 
      bg={bgColor}
      borderBottom="1px"
      borderColor={useColorModeValue('purple.100', 'purple.700')}
    >
      <AnimatePresence mode="wait">
        <MotionBox
          key={currentIndex}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          textAlign="center"
          color={textColor}
        >
          <Text fontSize="sm" fontWeight="medium">
            {scriptures[currentIndex].quote} 
            <Text as="span" fontSize="xs" opacity={0.8}>
              - {scriptures[currentIndex].reference}
            </Text>
          </Text>
        </MotionBox>
      </AnimatePresence>
    </Box>
  );
};

export default ScriptureBanner; 