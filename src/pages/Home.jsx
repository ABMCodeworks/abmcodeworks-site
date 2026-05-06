import { useState } from "react";
import {
  Badge,
  Box,
  Button,
  Collapse,
  Container,
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
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import {
  FaAndroid,
  FaApple,
  FaArrowRight,
  FaCheckCircle,
  FaGlobe,
  FaLaptopCode,
  FaMobileAlt,
  FaReact,
  FaShieldAlt,
} from "react-icons/fa";
import { SiFirebase, SiFlutter, SiVite, SiWordpress } from "react-icons/si";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";

import logo from "../assets/logo.png";
import ruzawi from "../assets/ruzawi.png";
import zimgin from "../assets/zimgin.png";
import cranesafaris from "../assets/cranesafaris.png";
import thf from "../assets/thf.png";

const ENABLE_RECAPTCHA = import.meta.env.VITE_ENABLE_RECAPTCHA !== "false";
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

function Home() {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const recaptchaReady = ENABLE_RECAPTCHA && Boolean(RECAPTCHA_SITE_KEY);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (recaptchaReady && !recaptchaToken) {
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
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Failed to send message. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
        setRecaptchaToken(null);
        e.target.reset();
      });
  };

  return (
    <Box bg="abm.paper">
      <Navbar isOpen={isOpen} onToggle={onToggle} onClose={onClose} />

      <Box as="main">
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <Process />
        <Clients />

        <Contact
          handleSubmit={handleSubmit}
          recaptchaReady={recaptchaReady}
          recaptchaToken={recaptchaToken}
          setRecaptchaToken={setRecaptchaToken}
          isSubmitting={isSubmitting}
        />
      </Box>

      <Footer />
    </Box>
  );
}

function Navbar({ isOpen, onToggle, onClose }) {
  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="1000"
      bg="rgba(11, 23, 42, 0.92)"
      color="white"
      backdropFilter="blur(16px)"
      borderBottom="1px solid rgba(255,255,255,0.12)"
    >
      <Container maxW="7xl" py={3}>
        <Flex align="center" justify="space-between" gap={6}>
          <Link href="#home" _hover={{ textDecoration: "none" }}>
            <HStack spacing={3}>
              <Box
                bg="white"
                rounded="2xl"
                p={2}
                boxShadow="0 14px 30px rgba(0,0,0,0.22)"
              >
                <Image src={logo} alt="ABM Codeworks logo" boxSize="34px" />
              </Box>

              <Box>
                <Text fontWeight="900" lineHeight="1">
                  ABM Codeworks
                </Text>
                <Text
                  fontSize="xs"
                  color="whiteAlpha.700"
                  display={{ base: "none", sm: "block" }}
                >
                  Web, mobile and cloud systems
                </Text>
              </Box>
            </HStack>
          </Link>

          <HStack display={{ base: "none", lg: "flex" }} spacing={7}>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#process">Process</NavLink>
            <NavLink href="#clients">Clients</NavLink>

            <Button
              as="a"
              href="#contact"
              size="sm"
              rounded="full"
              bg="abm.teal"
              color="white"
              _hover={{ bg: "abm.tealDark", transform: "translateY(-1px)" }}
            >
              Start a project
            </Button>
          </HStack>

          <IconButton
            aria-label="Open menu"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            display={{ base: "inline-flex", lg: "none" }}
            onClick={onToggle}
            variant="ghost"
            color="white"
            _hover={{ bg: "whiteAlpha.200" }}
          />
        </Flex>
      </Container>

      <Collapse in={isOpen} animateOpacity>
        <Box
          display={{ lg: "none" }}
          bg="abm.navy2"
          borderTop="1px solid rgba(255,255,255,0.12)"
          maxH="calc(100vh - 72px)"
          overflowY="auto"
        >
          <VStack align="stretch" spacing={1} px={5} py={5}>
            <MobileNavLink href="#about" onClick={onClose}>
              About
            </MobileNavLink>

            <MobileNavLink href="#services" onClick={onClose}>
              Services
            </MobileNavLink>

            <MobileNavLink href="#process" onClick={onClose}>
              Process
            </MobileNavLink>

            <MobileNavLink href="#clients" onClick={onClose}>
              Clients
            </MobileNavLink>

            <Button
              as="a"
              href="#contact"
              mt={3}
              rounded="full"
              bg="abm.teal"
              color="white"
              onClick={onClose}
              _hover={{ bg: "abm.tealDark" }}
            >
              Contact ABM
            </Button>
          </VStack>
        </Box>
      </Collapse>
    </Box>
  );
}

function Hero() {
  return (
    <Box
      id="home"
      position="relative"
      overflow="hidden"
      bg="abm.navy"
      color="white"
    >
      <Box
        position="absolute"
        inset="0"
        bg="
          radial-gradient(circle at 15% 20%, rgba(44,122,123,0.45), transparent 30%),
          radial-gradient(circle at 85% 12%, rgba(200,155,60,0.22), transparent 28%),
          linear-gradient(135deg, #0B172A 0%, #10233F 55%, #07111F 100%)
        "
      />

      <Container maxW="7xl" position="relative" py={{ base: 20, md: 28 }}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={12}
          alignItems="center"
        >
          <Stack spacing={7}>
            <Badge
              alignSelf="flex-start"
              rounded="full"
              px={4}
              py={2}
              bg="whiteAlpha.200"
              color="white"
              border="1px solid rgba(255,255,255,0.16)"
              textTransform="none"
              fontSize="sm"
            >
              Zimbabwe-based software development studio
            </Badge>

            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "6xl", xl: "7xl" }}
              lineHeight="0.95"
              letterSpacing="-0.06em"
              maxW="760px"
            >
              Software that feels simple, even when the work behind it is not.
            </Heading>

            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="whiteAlpha.800"
              maxW="680px"
              lineHeight="1.8"
            >
              ABM Codeworks designs and builds reliable web apps, mobile apps,
              dashboards, school systems, e-commerce platforms and cloud
              software for ambitious organisations.
            </Text>

            <Stack direction={{ base: "column", sm: "row" }} spacing={4}>
              <Button
                as="a"
                href="#contact"
                size="lg"
                rounded="full"
                bg="abm.teal"
                color="white"
                rightIcon={<FaArrowRight />}
                _hover={{
                  bg: "abm.tealDark",
                  transform: "translateY(-2px)",
                  boxShadow: "0 18px 35px rgba(44,122,123,0.35)",
                }}
              >
                Start a project
              </Button>

              <Button
                as="a"
                href="#services"
                size="lg"
                rounded="full"
                variant="outline"
                borderColor="whiteAlpha.500"
                color="white"
                _hover={{ bg: "whiteAlpha.200" }}
              >
                View services
              </Button>
            </Stack>
          </Stack>

          <Box
            bg="rgba(255,255,255,0.08)"
            border="1px solid rgba(255,255,255,0.14)"
            rounded={{ base: "3xl", md: "35px" }}
            p={{ base: 6, md: 9 }}
            boxShadow="0 30px 90px rgba(0,0,0,0.35)"
            backdropFilter="blur(20px)"
          >
            <Box
              bg="white"
              rounded="3xl"
              p={{ base: 7, md: 10 }}
              color="abm.ink"
            >
              <Image
                src={logo}
                alt="ABM Codeworks logo"
                maxW={{ base: "160px", md: "220px" }}
                mx="auto"
                mb={8}
              />

              <SimpleGrid columns={2} spacing={4}>
                <HeroMetric value="Web" label="Applications" />
                <HeroMetric value="Mobile" label="Apps" />
                <HeroMetric value="Cloud" label="Integrations" />
                <HeroMetric value="CMS" label="Websites" />
              </SimpleGrid>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function HeroMetric({ value, label }) {
  return (
    <Box
      rounded="2xl"
      p={5}
      bg="abm.paper"
      border="1px solid"
      borderColor="abm.line"
    >
      <Text fontWeight="900" fontSize="xl" color="abm.navy">
        {value}
      </Text>
      <Text fontSize="sm" color="gray.600">
        {label}
      </Text>
    </Box>
  );
}

function TrustStrip() {
  return (
    <Box bg="white" borderBottom="1px solid" borderColor="abm.line">
      <Container maxW="7xl" py={6}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
          <TrustItem
            icon={FaCheckCircle}
            text="Custom systems built around real workflows"
          />

          <TrustItem
            icon={FaShieldAlt}
            text="Security, reliability and maintainability first"
          />

          <TrustItem
            icon={FaLaptopCode}
            text="Modern React, Flutter, Firebase and cloud tooling"
          />
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function TrustItem({ icon, text }) {
  return (
    <HStack spacing={3}>
      <Icon as={icon} color="abm.teal" boxSize={5} />
      <Text fontWeight="700" color="abm.ink">
        {text}
      </Text>
    </HStack>
  );
}

function About() {
  return (
    <Box id="about" bg="abm.paper">
      <Container maxW="7xl" py={{ base: 16, md: 24 }}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={12}
          alignItems="center"
        >
          <Stack spacing={5}>
            <SectionEyebrow>About ABM Codeworks</SectionEyebrow>

            <Heading
              as="h2"
              size="2xl"
              color="abm.navy"
              letterSpacing="-0.04em"
            >
              Practical software engineering for teams that need things to work.
            </Heading>

            <Text color="gray.700" fontSize="lg" lineHeight="1.8">
              We partner with schools, non-profits, startups and established
              businesses to create dependable digital tools. From planning and
              design to build, deployment and support, the focus is always on
              clarity, speed and long-term value.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={5}>
            <ValueCard
              title="Clear scope"
              text="You get a practical build plan before development starts."
            />

            <ValueCard
              title="Strong foundations"
              text="We build systems that can grow without becoming painful to maintain."
            />

            <ValueCard
              title="Useful design"
              text="Interfaces are designed around the people who actually use them."
            />

            <ValueCard
              title="Ongoing support"
              text="Launch is not the end. We help refine and improve after release."
            />
          </SimpleGrid>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function Services() {
  const services = [
    {
      icon: FaMobileAlt,
      title: "Mobile Applications",
      desc: "Flutter apps for Android and iOS with polished interfaces and reliable data flows.",
    },
    {
      icon: FaGlobe,
      title: "Web Applications",
      desc: "Fast React and Vite front-ends connected to robust back-end services.",
    },
    {
      icon: SiFirebase,
      title: "Firebase & Cloud",
      desc: "Authentication, databases, storage, serverless functions and app infrastructure.",
    },
    {
      icon: FaReact,
      title: "React Engineering",
      desc: "Component-driven dashboards, portals, admin systems and customer-facing apps.",
    },
    {
      icon: SiFlutter,
      title: "Flutter Development",
      desc: "Multi-platform app development with a single maintainable codebase.",
    },
    {
      icon: SiWordpress,
      title: "Websites & CMS",
      desc: "Marketing websites, content systems and landing pages that are easy to manage.",
    },
    {
      icon: FaLaptopCode,
      title: "Custom Systems",
      desc: "Dashboards, reporting tools, portals and workflow systems for real operations.",
    },
    {
      icon: FaAndroid,
      title: "Android Delivery",
      desc: "Play Store preparation, testing, integrations and app release support.",
    },
    {
      icon: FaApple,
      title: "iOS Delivery",
      desc: "App Store readiness, publishing support and platform-specific implementation.",
    },
  ];

  return (
    <Box id="services" bg="white">
      <Container maxW="7xl" py={{ base: 16, md: 24 }}>
        <Stack spacing={4} textAlign="center" maxW="760px" mx="auto" mb={12}>
          <SectionEyebrow>Services</SectionEyebrow>

          <Heading as="h2" size="2xl" color="abm.navy" letterSpacing="-0.04em">
            Everything you need to move from idea to working product.
          </Heading>

          <Text color="gray.600" fontSize="lg">
            We build full systems, improve existing ones, and help teams choose
            the right technology for the job.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={6}>
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function Process() {
  const steps = [
    {
      number: "01",
      title: "Understand",
      text: "We map the users, workflow, risks and success criteria before jumping into code.",
    },
    {
      number: "02",
      title: "Design",
      text: "We shape the interface, data structure and technical approach around the actual problem.",
    },
    {
      number: "03",
      title: "Build",
      text: "We develop in clear stages so the project stays testable, usable and easy to adjust.",
    },
    {
      number: "04",
      title: "Launch",
      text: "We deploy, monitor, refine and support the system once real users start using it.",
    },
  ];

  return (
    <Box id="process" bg="abm.navy" color="white">
      <Container maxW="7xl" py={{ base: 16, md: 24 }}>
        <Stack spacing={4} maxW="760px" mb={12}>
          <SectionEyebrow color="abm.gold">How we work</SectionEyebrow>

          <Heading as="h2" size="2xl" letterSpacing="-0.04em">
            A simple process that keeps complex builds under control.
          </Heading>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={6}>
          {steps.map((step) => (
            <Box
              key={step.number}
              p={7}
              rounded="3xl"
              bg="whiteAlpha.100"
              border="1px solid rgba(255,255,255,0.14)"
            >
              <Text color="abm.gold" fontWeight="900" mb={5}>
                {step.number}
              </Text>

              <Heading as="h3" size="md" mb={3}>
                {step.title}
              </Heading>

              <Text color="whiteAlpha.800" lineHeight="1.8">
                {step.text}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function Clients() {
  return (
    <Box id="clients" bg="abm.paper">
      <Container maxW="7xl" py={{ base: 16, md: 24 }}>
        <Stack spacing={4} textAlign="center" maxW="760px" mx="auto" mb={12}>
          <SectionEyebrow>Selected clients</SectionEyebrow>

          <Heading as="h2" size="2xl" color="abm.navy" letterSpacing="-0.04em">
            Trusted by organisations across education, tourism, conservation and
            commerce.
          </Heading>
        </Stack>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={6}>
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
  );
}

function Contact({
  handleSubmit,
  recaptchaReady,
  recaptchaToken,
  setRecaptchaToken,
  isSubmitting,
}) {
  return (
    <Box id="contact" bg="white">
      <Container maxW="7xl" py={{ base: 16, md: 24 }}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={12}
          alignItems="start"
        >
          <Stack spacing={5}>
            <SectionEyebrow>Contact</SectionEyebrow>

            <Heading
              as="h2"
              size="2xl"
              color="abm.navy"
              letterSpacing="-0.04em"
            >
              Have a system, app or website you want built properly?
            </Heading>

            <Text color="gray.700" fontSize="lg" lineHeight="1.8">
              Tell us what you are trying to create, fix or improve. We will
              help you turn the idea into a practical build plan.
            </Text>

            <Box
              p={6}
              rounded="3xl"
              bg="abm.paper"
              border="1px solid"
              borderColor="abm.line"
            >
              <Text fontWeight="900" color="abm.navy" mb={2}>
                Prefer email?
              </Text>

              <Link
                href="mailto:hello@abmcodeworks.com"
                color="abm.teal"
                fontWeight="800"
              >
                hello@abmcodeworks.com
              </Link>
            </Box>
          </Stack>

          <Box
            as="form"
            onSubmit={handleSubmit}
            bg="abm.paper"
            p={{ base: 6, md: 8 }}
            rounded="3xl"
            border="1px solid"
            borderColor="abm.line"
            boxShadow="0 24px 70px rgba(11,23,42,0.10)"
          >
            <VStack spacing={5} align="stretch">
              <FormControl isRequired>
                <FormLabel fontWeight="800">Name</FormLabel>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  bg="white"
                  borderColor="abm.line"
                  rounded="xl"
                  size="lg"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontWeight="800">Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  bg="white"
                  borderColor="abm.line"
                  rounded="xl"
                  size="lg"
                />
              </FormControl>

              <FormControl>
                <FormLabel fontWeight="800">Project type</FormLabel>
                <Input
                  type="text"
                  name="project_type"
                  placeholder="Website, app, dashboard, school system..."
                  bg="white"
                  borderColor="abm.line"
                  rounded="xl"
                  size="lg"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontWeight="800">Message</FormLabel>
                <Textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us what you need built or improved."
                  bg="white"
                  borderColor="abm.line"
                  rounded="xl"
                />
              </FormControl>

              {recaptchaReady ? (
                <Box overflowX="auto">
                  <ReCAPTCHA
                    sitekey={RECAPTCHA_SITE_KEY}
                    onChange={setRecaptchaToken}
                    onExpired={() => setRecaptchaToken(null)}
                    onErrored={() => {
                      setRecaptchaToken(null);
                      console.error(
                        "reCAPTCHA error. Check that your site key is v2 Checkbox and that the current domain is allowed.",
                      );
                    }}
                  />
                </Box>
              ) : (
                <Box
                  p={4}
                  rounded="xl"
                  bg="orange.50"
                  color="orange.900"
                  border="1px solid"
                  borderColor="orange.200"
                  fontSize="sm"
                >
                  reCAPTCHA is currently disabled. Set{" "}
                  <strong>VITE_ENABLE_RECAPTCHA=true</strong> and add a valid{" "}
                  <strong>VITE_RECAPTCHA_SITE_KEY</strong> before going live.
                </Box>
              )}

              <Button
                type="submit"
                size="lg"
                rounded="full"
                bg="abm.teal"
                color="white"
                isDisabled={recaptchaReady && (!recaptchaToken || isSubmitting)}
                isLoading={isSubmitting}
                rightIcon={<FaArrowRight />}
                _hover={{
                  bg: "abm.tealDark",
                  transform: "translateY(-2px)",
                  boxShadow: "0 18px 35px rgba(44,122,123,0.25)",
                }}
              >
                Send message
              </Button>
            </VStack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function Footer() {
  return (
    <Box as="footer" bg="abm.navy" color="white">
      <Container maxW="7xl" py={8}>
        <Flex
          align={{ base: "flex-start", md: "center" }}
          justify="space-between"
          direction={{ base: "column", md: "row" }}
          gap={6}
        >
          <HStack spacing={3}>
            <Box bg="white" rounded="xl" p={2}>
              <Image src={logo} alt="ABM Codeworks logo" boxSize="28px" />
            </Box>

            <Box>
              <Text fontWeight="900">ABM Codeworks</Text>
              <Text fontSize="sm" color="whiteAlpha.700">
                © {new Date().getFullYear()} All rights reserved.
              </Text>
            </Box>
          </HStack>

          <Text fontSize="sm" color="whiteAlpha.700">
            Web, mobile and cloud systems by ABM Codeworks.
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}

function SectionEyebrow({ children, color = "abm.teal" }) {
  return (
    <Text
      color={color}
      fontWeight="900"
      letterSpacing="0.18em"
      textTransform="uppercase"
      fontSize="sm"
    >
      {children}
    </Text>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      fontWeight="800"
      color="whiteAlpha.850"
      _hover={{ color: "white", textDecoration: "none" }}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ href, onClick, children }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      py={3}
      color="white"
      fontWeight="800"
      borderBottom="1px solid rgba(255,255,255,0.08)"
      _hover={{ color: "abm.gold", textDecoration: "none" }}
    >
      {children}
    </Link>
  );
}

function ValueCard({ title, text }) {
  return (
    <Box
      p={6}
      rounded="3xl"
      bg="white"
      border="1px solid"
      borderColor="abm.line"
      boxShadow="0 18px 50px rgba(11,23,42,0.06)"
    >
      <Heading as="h3" size="md" color="abm.navy" mb={3}>
        {title}
      </Heading>

      <Text color="gray.600" lineHeight="1.7">
        {text}
      </Text>
    </Box>
  );
}

function ServiceCard({ icon, title, desc }) {
  return (
    <Box
      p={7}
      rounded="3xl"
      bg="white"
      border="1px solid"
      borderColor="abm.line"
      boxShadow="0 20px 55px rgba(11,23,42,0.06)"
      transition="all 0.22s ease"
      _hover={{
        transform: "translateY(-5px)",
        boxShadow: "0 28px 75px rgba(11,23,42,0.11)",
        borderColor: "abm.teal",
      }}
    >
      <Box
        w="52px"
        h="52px"
        rounded="2xl"
        bg="abm.soft"
        display="grid"
        placeItems="center"
        mb={5}
      >
        <Icon as={icon} boxSize={6} color="abm.teal" />
      </Box>

      <Heading as="h3" size="md" color="abm.navy" mb={3}>
        {title}
      </Heading>

      <Text color="gray.600" lineHeight="1.7">
        {desc}
      </Text>
    </Box>
  );
}

function ClientLogo({ href, src, alt }) {
  return (
    <Link
      href={href}
      isExternal
      _hover={{ textDecoration: "none" }}
      aria-label={alt}
    >
      <Box
        h="150px"
        display="grid"
        placeItems="center"
        bg="white"
        rounded="3xl"
        p={7}
        border="1px solid"
        borderColor="abm.line"
        boxShadow="0 18px 50px rgba(11,23,42,0.06)"
        transition="all 0.22s ease"
        _hover={{
          transform: "translateY(-4px)",
          boxShadow: "0 26px 70px rgba(11,23,42,0.11)",
          borderColor: "abm.teal",
        }}
      >
        <Image
          src={src}
          alt={alt}
          maxH="74px"
          maxW="170px"
          objectFit="contain"
          filter="grayscale(100%)"
          opacity="0.78"
          transition="all 0.22s ease"
          _hover={{ filter: "grayscale(0%)", opacity: 1 }}
        />
      </Box>
    </Link>
  );
}

export default Home;
