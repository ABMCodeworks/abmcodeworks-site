import { useState } from "react";
import {
  Box,
  Button,
  ChakraProvider,
  Collapse,
  Container,
  extendTheme,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Icon,
  IconButton,
  Image,
  Input,
  Link,
  Text,
  Textarea,
  useDisclosure,
  VStack,
  SimpleGrid,
  Stack,
  Divider,
} from "@chakra-ui/react";
import {
  FaAndroid,
  FaApple,
  FaGlobe,
  FaMobileAlt,
  FaReact,
} from "react-icons/fa";
import { SiFirebase, SiFlutter, SiVite, SiWordpress } from "react-icons/si";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

/* ─────────────────────────────
   Theme — ABM Codeworks branding
   ───────────────────────────── */
const theme = extendTheme({
  fonts: { heading: "Poppins, sans-serif", body: "Poppins, sans-serif" },
  colors: {
    abm: {
      navy: "#0F1F39", // pulled from your logo
      ink: "#142645",
      teal: "#2C7A7B", // accent
      paper: "#F5F5F3",
    },
  },
  styles: {
    global: {
      body: { bg: "abm.paper", color: "abm.ink", overflowX: "hidden" },
    },
  },
});

/* ─────────────────────────────
   Assets
   ───────────────────────────── */
import logo from "../assets/logo.png";
import ruzawi from "../assets/ruzawi.png";
import zimgin from "../assets/zimgin.png";
import cranesafaris from "../assets/cranesafaris.png";
import thf from "../assets/thf.png";

/* ─────────────────────────────
   Component
   ───────────────────────────── */
function Home() {
  const { isOpen, onToggle } = useDisclosure();
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recaptchaToken) {
      alert("Please verify that you are not a robot.");
      return;
    }
    setIsSubmitting(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      )
      .then(() => alert("Message sent successfully!"))
      .catch(() => alert("Failed to send message. Please try again."))
      .finally(() => {
        setIsSubmitting(false);
        setRecaptchaToken(null);
        e.target.reset();
      });
  };

  return (
    <ChakraProvider theme={theme}>
      {/* NAVBAR */}
      <Box
        as="nav"
        bg="abm.navy"
        color="white"
        position="sticky"
        top="0"
        zIndex="10"
      >
        <Container maxW="container.xl" py={3}>
          <Flex align="center" justify="space-between">
            <HStack spacing={3}>
              <Image src={logo} alt="ABM Codeworks" boxSize="40px" />
              <Heading as="h1" size="md" letterSpacing="wide">
                ABM Codeworks
              </Heading>
            </HStack>

            <HStack display={{ base: "none", md: "flex" }} spacing={8}>
              <NavLink href="#home" text="Home" />
              <NavLink href="#about" text="About" />
              <NavLink href="#services" text="Services" />
              <NavLink href="#clients" text="Clients" />
              <Button as="a" href="#contact" colorScheme="teal" size="sm">
                Contact
              </Button>
            </HStack>

            <IconButton
              aria-label="Menu"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              display={{ base: "inline-flex", md: "none" }}
              onClick={onToggle}
              color="white"
              variant="ghost"
            />
          </Flex>
        </Container>

        <Collapse in={isOpen} animateOpacity>
          <VStack
            bg="abm.ink"
            align="stretch"
            py={3}
            px={4}
            display={{ md: "none" }}
          >
            <NavLink href="#home" text="Home" onClick={onToggle} />
            <NavLink href="#about" text="About" onClick={onToggle} />
            <NavLink href="#services" text="Services" onClick={onToggle} />
            <NavLink href="#clients" text="Clients" onClick={onToggle} />
            <Button
              as="a"
              href="#contact"
              colorScheme="teal"
              onClick={onToggle}
            >
              Contact
            </Button>
          </VStack>
        </Collapse>
      </Box>

      {/* HERO */}
      <Box id="home" bg="white">
        <Container maxW="container.xl" py={{ base: 16, md: 24 }}>
          <Flex
            gap={12}
            align="center"
            direction={{ base: "column", md: "row" }}
          >
            <VStack align="flex-start" spacing={6} flex="1">
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "5xl" }}
                color="abm.navy"
              >
                Engineering Reliable Software for Ambitious Teams
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.600"
                maxW="2xl"
              >
                ABM Codeworks designs and builds robust web and mobile
                applications, integrating modern architectures and cloud
                services to help organisations move faster with confidence.
              </Text>
              <HStack spacing={4}>
                <Button as="a" href="#contact" colorScheme="teal" size="md">
                  Start a Project
                </Button>
                <Button as="a" href="#services" variant="outline" size="md">
                  Our Services
                </Button>
              </HStack>
            </VStack>

            <Box flex="1" textAlign="center">
              <Image
                src={logo}
                alt="ABM Codeworks logo"
                maxW="380px"
                mx="auto"
              />
            </Box>
          </Flex>
        </Container>
      </Box>

      <Divider />

      {/* ABOUT */}
      <Box id="about" bg="abm.paper">
        <Container maxW="container.xl" py={{ base: 12, md: 16 }}>
          <Stack spacing={6}>
            <Heading size="lg" color="abm.navy" textAlign="center">
              About Us
            </Heading>
            <Text textAlign="center" color="gray.700" maxW="3xl" mx="auto">
              Based in Zimbabwe, ABM Codeworks partners with schools,
              non-profits, and businesses to deliver dependable software. From
              strategy to deployment, we focus on performance, security, and
              scalability—so your systems grow with you.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* SERVICES */}
      <Box id="services" bg="white">
        <Container maxW="container.xl" py={{ base: 12, md: 16 }}>
          <Heading size="lg" color="abm.navy" textAlign="center" mb={10}>
            Services
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
            <ServiceCard
              icon={FaMobileAlt}
              title="Mobile Applications"
              desc="Native-quality apps for Android and iOS built with Flutter."
            />
            <ServiceCard
              icon={FaGlobe}
              title="Web Applications"
              desc="Modern React/Vite front-ends and reliable back-ends."
            />
            <ServiceCard
              icon={SiFirebase}
              title="Cloud Integration"
              desc="Realtime data, auth, and serverless functions with Firebase."
            />
            <ServiceCard
              icon={FaReact}
              title="React Engineering"
              desc="Component-driven UIs with performance at scale."
            />
            <ServiceCard
              icon={SiFlutter}
              title="Flutter Development"
              desc="Single codebase, pixel-perfect multi-platform UX."
            />
            <ServiceCard
              icon={SiWordpress}
              title="Websites & CMS"
              desc="Fast, responsive marketing sites and content systems."
            />
            <ServiceCard
              icon={SiVite}
              title="Tooling & Build"
              desc="Vite-based DX, CI/CD, and automated testing."
            />
            <ServiceCard
              icon={FaAndroid}
              title="Android"
              desc="Play Store delivery, integrations, and QA."
            />
            <ServiceCard
              icon={FaApple}
              title="iOS"
              desc="App Store compliance and publishing workflow."
            />
          </SimpleGrid>
        </Container>
      </Box>

      {/* CLIENTS */}
      <Box id="clients" bg="abm.paper">
        <Container maxW="container.xl" py={{ base: 12, md: 16 }}>
          <Heading size="lg" color="abm.navy" textAlign="center" mb={10}>
            Selected Clients
          </Heading>
          <SimpleGrid
            columns={{ base: 2, sm: 3, md: 4 }}
            spacing={8}
            alignItems="center"
          >
            <ClientLogo
              href="https://ruzawi.com"
              src={ruzawi}
              alt="Ruzawi School"
            />
            <ClientLogo
              href="https://zimgin.com"
              src={zimgin}
              alt="Zimbabwe Gin"
            />
            <ClientLogo
              href="https://cranesafaris.co.zw"
              src={cranesafaris}
              alt="Crane Safaris"
            />
            <ClientLogo
              href="https://tikkihywoodfoundation.org"
              src={thf}
              alt="Tikki Hywood Foundation"
            />
          </SimpleGrid>
        </Container>
      </Box>

      {/* CONTACT */}
      <Box id="contact" bg="white">
        <Container maxW="container.md" py={{ base: 12, md: 16 }}>
          <Heading size="lg" color="abm.navy" textAlign="center" mb={8}>
            Contact Us
          </Heading>

          <Box
            as="form"
            onSubmit={handleSubmit}
            bg="white"
            p={{ base: 6, md: 8 }}
            borderRadius="xl"
            boxShadow="sm"
          >
            <VStack spacing={5} align="stretch">
              <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" name="name" placeholder="Your name" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Message</FormLabel>
                <Textarea
                  name="message"
                  rows={5}
                  placeholder="How can we help?"
                />
              </FormControl>
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                onChange={setRecaptchaToken}
              />
              <Button
                type="submit"
                colorScheme="teal"
                isDisabled={!recaptchaToken || isSubmitting}
                isLoading={isSubmitting}
                alignSelf="flex-start"
              >
                Send Message
              </Button>
            </VStack>
          </Box>

          <Text mt={6} textAlign="center" color="gray.600" fontSize="sm">
            Prefer email? Write to{" "}
            <Link href="mailto:hello@abmcodeworks.com" color="abm.teal">
              hello@abmcodeworks.com
            </Link>
          </Text>
        </Container>
      </Box>

      {/* FOOTER */}
      <Box as="footer" bg="abm.navy" color="gray.100">
        <Container maxW="container.xl" py={6}>
          <Flex
            align="center"
            justify="space-between"
            direction={{ base: "column", md: "row" }}
            gap={3}
          >
            <HStack spacing={3}>
              <Image src={logo} alt="ABM Codeworks" boxSize="28px" />
              <Text>
                © {new Date().getFullYear()} ABM Codeworks. All rights
                reserved.
              </Text>
            </HStack>
            <HStack spacing={6}>
              <NavLink href="#services" text="Services" />
              <NavLink href="#clients" text="Clients" />
              <NavLink href="#contact" text="Contact" />
            </HStack>
          </Flex>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

/* ─────────────────────────────
   Helper Components
   ───────────────────────────── */
const NavLink = ({ href, text, ...rest }) => (
  <Link
    href={href}
    color="gray.100"
    fontWeight="medium"
    _hover={{ color: "abm.teal" }}
    {...rest}
  >
    {text}
  </Link>
);

const ServiceCard = ({ icon, title, desc }) => (
  <VStack
    align="flex-start"
    spacing={3}
    p={6}
    bg="white"
    borderRadius="xl"
    boxShadow="xs"
    border="1px solid"
    borderColor="gray.100"
  >
    <Icon as={icon} boxSize={8} color="abm.teal" />
    <Heading as="h3" size="md">
      {title}
    </Heading>
    <Text color="gray.600">{desc}</Text>
  </VStack>
);

const ClientLogo = ({ href, src, alt }) => (
  <Link href={href} isExternal _hover={{ transform: "translateY(-2px)" }}>
    <Image
      src={src}
      alt={alt}
      maxH="60px"
      mx="auto"
      filter="grayscale(100%)"
      opacity={0.8}
      _hover={{ filter: "grayscale(0%)", opacity: 1 }}
    />
  </Link>
);

export default Home;
