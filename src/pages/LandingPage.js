import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  SimpleGrid,
  Icon,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaReact, FaNode } from 'react-icons/fa';
import { SiChakraui, SiOpenai, SiJavascript, SiExpress } from 'react-icons/si';
import PageTransition from '../components/PageTransition';

function TechCard({ icon, title, description }) {
  const bgColor = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box
      p={6}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="lg"
      bg={bgColor}
      textAlign="center"
      transition="all 0.2s"
      _hover={{ transform: 'translateY(-5px)', shadow: 'lg' }}
    >
      <Icon as={icon} boxSize={10} color="blue.500" mb={4} />
      <Heading size="md" mb={2}>{title}</Heading>
      <Text color={useColorModeValue('gray.600', 'gray.300')} fontSize="sm">
        {description}
      </Text>
    </Box>
  );
}

function LandingPage() {
  const techStack = [
    {
      icon: FaReact,
      title: 'React',
      description: 'Frontend built with React for that smooth UI experience fr fr 💅',
    },
    {
      icon: SiChakraui,
      title: 'Chakra UI',
      description: 'Clean components that stay drippy in light and dark mode 🌓',
    },
    {
      icon: SiOpenai,
      title: 'OpenAI',
      description: 'GPT bringing that Bible knowledge with extra rizz 🤖✨',
    },
    {
      icon: FaNode,
      title: 'Node.js',
      description: 'Backend running on Node like a well-oiled machine 🚀',
    },
    {
      icon: SiExpress,
      title: 'Express',
      description: 'Express server handling requests with that blessed efficiency 🙏',
    },
    {
      icon: SiJavascript,
      title: 'JavaScript',
      description: 'Full-stack JavaScript because we keep it real 💯',
    },
  ];

  return (
    <PageTransition>
      <Box py={20}>
        <Container maxW="container.xl">
          <VStack spacing={12} align="stretch">
            {/* Hero Section */}
            <VStack spacing={6} textAlign="center">
              <Heading 
                size="2xl" 
                bgGradient="linear(to-r, blue.400, purple.500)" 
                bgClip="text"
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap={2}
              >
                AnointedAI 🤖✨
              </Heading>
              <Text fontSize="xl" maxW="2xl" color={useColorModeValue('gray.600', 'gray.300')}>
                Turn on holy mode and get your scripture knowledge leveled up. 
                We're making Bible study lit with AI-powered divine wisdom 🙏✨
              </Text>
              <Button
                as={RouterLink}
                to="/chat"
                size="lg"
                colorScheme="blue"
                px={8}
                mt={4}
                bgGradient="linear(to-r, blue.400, purple.500)"
                _hover={{
                  bgGradient: "linear(to-r, blue.500, purple.600)",
                }}
              >
                Turn On Holy Mode
              </Button>
            </VStack>

            {/* Tech Stack Section */}
            <Box>
              <Heading size="xl" textAlign="center" mb={10}>
                Blessed Tech Stack
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                {techStack.map((tech, index) => (
                  <TechCard key={index} {...tech} />
                ))}
              </SimpleGrid>
            </Box>

            {/* Features Section */}
            <Box>
              <Heading size="xl" textAlign="center" mb={10}>
                Divine Features
              </Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                <Box p={6} borderRadius="lg" bg={useColorModeValue('blue.50', 'blue.900')}>
                  <Heading size="md" mb={4}>🎯 Scripture-Focused</Heading>
                  <Text>Pure Bible content only, no cap. We keep it holy and real.</Text>
                </Box>
                <Box p={6} borderRadius="lg" bg={useColorModeValue('blue.50', 'blue.900')}>
                  <Heading size="md" mb={4}>🗣️ Gen Z Vibes</Heading>
                  <Text>Understanding scripture has never been this lit fam!</Text>
                </Box>
                <Box p={6} borderRadius="lg" bg={useColorModeValue('blue.50', 'blue.900')}>
                  <Heading size="md" mb={4}>🤖 AI Blessed</Heading>
                  <Text>OpenAI's GPT bringing that divine wisdom with modern sauce.</Text>
                </Box>
                <Box p={6} borderRadius="lg" bg={useColorModeValue('blue.50', 'blue.900')}>
                  <Heading size="md" mb={4}>⚡ Instant Wisdom</Heading>
                  <Text>Get your answers faster than Noah built the ark!</Text>
                </Box>
              </SimpleGrid>
            </Box>
          </VStack>
        </Container>
      </Box>
    </PageTransition>
  );
}

export default LandingPage; 