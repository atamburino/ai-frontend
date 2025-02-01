import React from 'react';
import {
  IconButton,
  Tooltip,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaPrayingHands } from 'react-icons/fa';
import PrayerModal from './PrayerModal';

const MotionIconButton = motion(IconButton);

const PrayerButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgGradient = useColorModeValue(
    'linear(to-r, blue.400, purple.500)',
    'linear(to-r, blue.500, purple.600)'
  );

  return (
    <>
      <Tooltip label="Quick Prayer 🙏" placement="left">
        <MotionIconButton
          position="fixed"
          bottom={8}
          right={8}
          size="lg"
          borderRadius="full"
          bgGradient={bgGradient}
          color="white"
          icon={<FaPrayingHands />}
          onClick={onOpen}
          _hover={{
            transform: 'scale(1.1)',
          }}
          initial={{ scale: 0 }}
          animate={{ 
            scale: 1,
            rotate: [0, 10, -10, 10, 0],
          }}
          transition={{
            type: "spring",
            duration: 0.5,
            rotate: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
            }
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
      </Tooltip>
      <PrayerModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default PrayerButton; 