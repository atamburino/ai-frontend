import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';
// import LoadingBar from './LoadingBar';
import PrayerButton from './PrayerButton';
import ScriptureBanner from './ScriptureBanner';

function Layout({ children }) {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      {/* <LoadingBar /> */}
      <Header />
      <ScriptureBanner />
      <Box flex="1">
        {children}
      </Box>
      <PrayerButton />
      <Footer />
    </Box>
  );
}

export default Layout; 