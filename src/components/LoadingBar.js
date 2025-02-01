import React from 'react';
import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const LoadingBar = () => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      height="2px"
      zIndex={9999}
      overflow="hidden"
    >
      <motion.div
        initial={{ x: "-100%" }}
        animate={{
          x: "100%",
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear"
        }}
        style={{
          height: "100%",
          width: "50%",
          background: "linear-gradient(to right, #4299E1, #805AD5)",
          borderRadius: "1px",
        }}
      />
    </Box>
  );
};

export default LoadingBar; 