import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Box flex="1" py={8}>
        {children}
      </Box>
      <Footer />
    </Flex>
  );
}

export default Layout; 