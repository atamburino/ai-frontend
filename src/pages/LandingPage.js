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
import { motion, LazyMotion, domAnimation, m } from 'framer-motion';

const MotionBox = m(Box);
const MotionSimpleGrid = m(SimpleGrid);
const MotionIcon = m(Icon);

function TechCard({ icon, title, description, index }) {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('purple.100', 'purple.700');
  const iconColor = useColorModeValue('purple.500', 'purple.300');
  const descriptionColor = useColorModeValue('purple.600', 'purple.200');

  return (
    <Box
      p={6}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="lg"
      bg={bgColor}
      textAlign="center"
      transition="all 0.3s"
      _hover={{
        transform: 'translateY(-5px)',
        shadow: 'lg',
        borderColor: useColorModeValue('purple.300', 'purple.500'),
        bgGradient: useColorModeValue(
          'linear(to-b, white, purple.50)',
          'linear(to-b, gray.800, purple.900)'
        )
      }}
    >
      <Icon 
        as={icon} 
        boxSize={12} 
        color={iconColor}
        mb={4}
        transition="all 0.3s"
        _hover={{ transform: 'scale(1.2) rotate(10deg)' }}
      />
      <Heading 
        size="md" 
        mb={2}
        bgGradient="linear(to-r, blue.400, purple.500)"
        bgClip="text"
      >
        {title}
      </Heading>
      <Text color={descriptionColor} fontSize="sm">
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
    <LazyMotion features={domAnimation}>
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
                  px={8}
                  mt={4}
                  bgGradient="linear(to-r, blue.400, purple.500)"
                  _hover={{
                    bgGradient: "linear(to-r, blue.500, purple.600)",
                    transform: 'translateY(-2px)',
                  }}
                  transition="all 0.2s"
                >
                  Turn On Holy Mode
                </Button>
              </VStack>

              {/* Tech Stack Section */}
              <Box>
                <Heading 
                  size="xl" 
                  textAlign="center" 
                  mb={10}
                  bgGradient="linear(to-r, blue.400, purple.500)"
                  bgClip="text"
                >
                  Blessed Tech Stack
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                  {techStack.map((tech, index) => (
                    <TechCard key={index} {...tech} index={index} />
                  ))}
                </SimpleGrid>
              </Box>

              {/* Features Section */}
              <Box>
                <Heading 
                  size="xl" 
                  textAlign="center" 
                  mb={10}
                  bgGradient="linear(to-r, blue.400, purple.500)"
                  bgClip="text"
                >
                  Divine Features
                </Heading>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                  <Box 
                    p={6} 
                    borderRadius="lg" 
                    borderWidth="1px"
                    borderColor={useColorModeValue('purple.100', 'purple.700')}
                    bg={useColorModeValue('white', 'gray.800')}
                    transition="all 0.3s"
                    _hover={{ 
                      transform: 'translateY(-3px)',
                      shadow: 'lg',
                      borderColor: useColorModeValue('purple.300', 'purple.500'),
                      bgGradient: useColorModeValue(
                        'linear(to-b, white, purple.50)',
                        'linear(to-b, gray.800, purple.900)'
                      )
                    }}
                  >
                    <Heading 
                      size="md" 
                      mb={4}
                      bgGradient="linear(to-r, blue.400, purple.500)"
                      bgClip="text"
                    >
                      📖 Scripture-Focused
                    </Heading>
                    <Text color={useColorModeValue('purple.600', 'purple.200')}>
                      Pure Bible content only, no cap. We keep it holy and real.
                    </Text>
                  </Box>
                  <Box 
                    p={6} 
                    borderRadius="lg" 
                    borderWidth="1px"
                    borderColor={useColorModeValue('purple.100', 'purple.700')}
                    bg={useColorModeValue('white', 'gray.800')}
                    transition="all 0.3s"
                    _hover={{ 
                      transform: 'translateY(-3px)',
                      shadow: 'lg',
                      borderColor: useColorModeValue('purple.300', 'purple.500'),
                      bgGradient: useColorModeValue(
                        'linear(to-b, white, purple.50)',
                        'linear(to-b, gray.800, purple.900)'
                      )
                    }}
                  >
                    <Heading 
                      size="md" 
                      mb={4}
                      bgGradient="linear(to-r, blue.400, purple.500)"
                      bgClip="text"
                    >
                      🗣️ Gen Z Vibes
                    </Heading>
                    <Text color={useColorModeValue('purple.600', 'purple.200')}>
                      Understanding scripture has never been this lit fam!
                    </Text>
                  </Box>
                  <Box 
                    p={6} 
                    borderRadius="lg" 
                    borderWidth="1px"
                    borderColor={useColorModeValue('purple.100', 'purple.700')}
                    bg={useColorModeValue('white', 'gray.800')}
                    transition="all 0.3s"
                    _hover={{ 
                      transform: 'translateY(-3px)',
                      shadow: 'lg',
                      borderColor: useColorModeValue('purple.300', 'purple.500'),
                      bgGradient: useColorModeValue(
                        'linear(to-b, white, purple.50)',
                        'linear(to-b, gray.800, purple.900)'
                      )
                    }}
                  >
                    <Heading 
                      size="md" 
                      mb={4}
                      bgGradient="linear(to-r, blue.400, purple.500)"
                      bgClip="text"
                    >
                      🤖 AI Blessed
                    </Heading>
                    <Text color={useColorModeValue('purple.600', 'purple.200')}>
                      OpenAI's GPT bringing that divine wisdom with modern sauce.
                    </Text>
                  </Box>
                  <Box 
                    p={6} 
                    borderRadius="lg" 
                    borderWidth="1px"
                    borderColor={useColorModeValue('purple.100', 'purple.700')}
                    bg={useColorModeValue('white', 'gray.800')}
                    transition="all 0.3s"
                    _hover={{ 
                      transform: 'translateY(-3px)',
                      shadow: 'lg',
                      borderColor: useColorModeValue('purple.300', 'purple.500'),
                      bgGradient: useColorModeValue(
                        'linear(to-b, white, purple.50)',
                        'linear(to-b, gray.800, purple.900)'
                      )
                    }}
                  >
                    <Heading 
                      size="md" 
                      mb={4}
                      bgGradient="linear(to-r, blue.400, purple.500)"
                      bgClip="text"
                    >
                      ⚡ Instant Wisdom
                    </Heading>
                    <Text color={useColorModeValue('purple.600', 'purple.200')}>
                      Get your answers faster than Noah built the ark!
                    </Text>
                  </Box>
                </SimpleGrid>
              </Box>
            </VStack>
          </Container>
        </Box>
      </PageTransition>
    </LazyMotion>
  );
}

export default LandingPage; 