import { useMemo, useState } from "react";
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaCode,
  FaDatabase,
  FaMobileAlt,
} from "react-icons/fa";
import { FiActivity, FiCloud, FiCpu, FiTerminal } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";

const workspaceItems = [
  {
    key: "webApps",
    icon: FaCode,
    label: "Web apps",
    href: "/web-development-zimbabwe",
    service: "Web applications",
    fileName: "web-app-build.js",
    status: "Interface ready",
    description:
      "Fast React front-ends connected to reliable back-end and cloud services.",
    project: {
      goal: "turn workflows into useful web tools",
      stack: ["React", "APIs", "Cloud"],
      focus: "speed + usability",
    },
    checklist: [
      "✓ user journeys mapped",
      "✓ responsive interface designed",
      "✓ dashboard logic connected",
    ],
    cards: [
      {
        icon: FiCpu,
        label: "Frontend",
        value: "React",
        text: "Component-based builds that stay easier to maintain.",
      },
      {
        icon: FiTerminal,
        label: "Experience",
        value: "Fast",
        text: "Clear pages, smooth flows and practical user journeys.",
      },
    ],
  },
  {
    key: "mobileApps",
    icon: FaMobileAlt,
    label: "Mobile apps",
    href: "/mobile-app-development-zimbabwe",
    service: "Mobile applications",
    fileName: "mobile-app-release.dart",
    status: "App flow planned",
    description:
      "Flutter apps for Android and iOS with polished interfaces and reliable data flows.",
    project: {
      goal: "put the workflow into people’s hands",
      stack: ["Flutter", "Firebase", "Stores"],
      focus: "mobile-first delivery",
    },
    checklist: [
      "✓ app structure planned",
      "✓ core screens designed",
      "✓ release path prepared",
    ],
    cards: [
      {
        icon: FaMobileAlt,
        label: "Platform",
        value: "iOS + Android",
        text: "One maintainable codebase for both major platforms.",
      },
      {
        icon: FiCloud,
        label: "Backend",
        value: "Connected",
        text: "Authentication, storage, data and notifications where needed.",
      },
    ],
  },
  {
    key: "dashboards",
    icon: FaDatabase,
    label: "Dashboards",
    href: "/software-development-zimbabwe",
    service: "Dashboards and portals",
    fileName: "admin-dashboard.tsx",
    status: "Data organised",
    description:
      "Custom dashboards, reporting platforms and admin portals for teams that need clarity.",
    project: {
      goal: "make important information easier to manage",
      stack: ["React", "Database", "Reports"],
      focus: "clarity + control",
    },
    checklist: [
      "✓ data structure reviewed",
      "✓ admin actions mapped",
      "✓ reporting views prepared",
    ],
    cards: [
      {
        icon: FaDatabase,
        label: "Data",
        value: "Structured",
        text: "Information is organised so teams can find what matters quickly.",
      },
      {
        icon: FiCpu,
        label: "Workflow",
        value: "Controlled",
        text: "Admin tools built around the way your team actually works.",
      },
    ],
  },
  {
    key: "cloudTools",
    icon: FiCloud,
    label: "Cloud tools",
    href: "/software-development-zimbabwe",
    service: "Cloud systems",
    fileName: "cloud-integration.yaml",
    status: "Services connected",
    description:
      "Authentication, databases, storage, serverless functions and app infrastructure.",
    project: {
      goal: "connect the moving parts reliably",
      stack: ["Firebase", "APIs", "Storage"],
      focus: "reliability + scale",
    },
    checklist: [
      "✓ auth flow secured",
      "✓ storage rules planned",
      "✓ deployment pipeline shaped",
    ],
    cards: [
      {
        icon: FiCloud,
        label: "Infrastructure",
        value: "Cloud-ready",
        text: "Built with reliable services that can grow with the product.",
      },
      {
        icon: FiTerminal,
        label: "Support",
        value: "Maintainable",
        text: "Clean setup, clear configuration and easier future updates.",
      },
    ],
  },
];

function Hero() {
  return (
    <Box
      id="home"
      position="relative"
      overflow="hidden"
      bg="abm.navy"
      color="white"
      w="100%"
    >
      <Box
        position="absolute"
        inset="0"
        bg="
          radial-gradient(circle at 14% 18%, rgba(44,122,123,0.42), transparent 28%),
          radial-gradient(circle at 84% 14%, rgba(200,155,60,0.20), transparent 26%),
          radial-gradient(circle at 68% 80%, rgba(76,201,240,0.13), transparent 32%),
          linear-gradient(135deg, #07111F 0%, #0B172A 42%, #10233F 100%)
        "
      />

      <Box
        position="absolute"
        inset="0"
        opacity="0.16"
        bgImage="
          linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
        "
        bgSize="42px 42px"
      />

      <Container
        maxW="1600px"
        px={{ base: 4, md: 8, xl: 10 }}
        position="relative"
        py={{ base: 16, md: 24 }}
      >
        <Stack spacing={{ base: 12, md: 14 }}>
          <HeroIntro />
          <DeveloperDesktop />
        </Stack>
      </Container>
    </Box>
  );
}

function HeroIntro() {
  return (
    <Stack
      spacing={7}
      textAlign="center"
      align="center"
      maxW="1280px"
      mx="auto"
      w="100%"
    >
      <Stack spacing={5} maxW="1220px">
        <Heading
          as="h1"
          fontSize={{ base: "4xl", md: "6xl", xl: "7xl" }}
          lineHeight="0.94"
          letterSpacing="-0.065em"
          maxW="1220px"
        >
          We build the systems behind smoother workdays.
        </Heading>

        <Text
          fontSize={{ base: "lg", md: "xl" }}
          color="whiteAlpha.820"
          maxW="980px"
          mx="auto"
          lineHeight="1.8"
        >
          ABM Codeworks designs and builds websites, apps, dashboards, school
          systems, e-commerce platforms and cloud-connected tools that feel
          simple on the surface and solid underneath.
        </Text>
      </Stack>

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
          Start building with us
        </Button>
      </Stack>
    </Stack>
  );
}

function HeroPill({ icon, text }) {
  return (
    <HStack
      spacing={2}
      rounded="full"
      px={4}
      py={2}
      bg="whiteAlpha.120"
      border="1px solid rgba(255,255,255,0.12)"
    >
      <Icon as={icon} color="abm.gold" boxSize={4} />
      <Text fontSize="sm" fontWeight="800">
        {text}
      </Text>
    </HStack>
  );
}

function DeveloperDesktop() {
  const [activeKey, setActiveKey] = useState("webApps");

  const activeItem = useMemo(() => {
    return (
      workspaceItems.find((item) => item.key === activeKey) || workspaceItems[0]
    );
  }, [activeKey]);

  return (
    <Box
      rounded={{ base: "28px", md: "38px" }}
      p={{ base: 3, md: 4 }}
      bg="rgba(255,255,255,0.08)"
      border="1px solid rgba(255,255,255,0.16)"
      boxShadow="0 38px 110px rgba(0,0,0,0.38)"
      backdropFilter="blur(22px)"
      maxW="1100px"
      mx="auto"
      width="100%"
    >
      <Box
        rounded={{ base: "24px", md: "32px" }}
        overflow="hidden"
        bg="#07111F"
        border="1px solid rgba(255,255,255,0.12)"
      >
        <DesktopTopBar activeItem={activeItem} />

        <Grid
          templateColumns={{ base: "1fr", md: "0.72fr 1.28fr" }}
          alignItems="stretch"
        >
          <GridItem
            bg="rgba(255,255,255,0.04)"
            borderRight={{
              base: "none",
              md: "1px solid rgba(255,255,255,0.10)",
            }}
            borderBottom={{
              base: "1px solid rgba(255,255,255,0.10)",
              md: "none",
            }}
            p={5}
          >
            <Stack spacing={4}>
              {workspaceItems.map((item) => (
                <SidebarItem
                  key={item.key}
                  icon={item.icon}
                  label={item.label}
                  isActive={item.key === activeItem.key}
                  onClick={() => setActiveKey(item.key)}
                />
              ))}
            </Stack>

            <Box
              mt={8}
              rounded="2xl"
              p={5}
              bg="rgba(44,122,123,0.18)"
              border="1px solid rgba(44,122,123,0.32)"
            >
              <Text
                fontSize="xs"
                color="abm.gold"
                fontWeight="900"
                letterSpacing="0.16em"
                textTransform="uppercase"
                mb={2}
              >
                Build status
              </Text>

              <Text fontWeight="900" fontSize="xl">
                {activeItem.status}
              </Text>

              <Text
                mt={2}
                color="whiteAlpha.700"
                fontSize="sm"
                lineHeight="1.7"
              >
                {activeItem.description}
              </Text>
            </Box>
          </GridItem>

          <GridItem p={{ base: 4, md: 5 }} minW={0}>
            <Stack spacing={5} minW={0}>
              <TerminalWindow activeItem={activeItem} />

              <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
                {activeItem.cards.map((card) => (
                  <DesktopCard
                    key={`${activeItem.key}-${card.label}`}
                    {...card}
                  />
                ))}
              </SimpleGrid>
            </Stack>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}

function DesktopTopBar({ activeItem }) {
  return (
    <Flex
      align="center"
      justify="space-between"
      px={{ base: 4, md: 5 }}
      py={4}
      bg="rgba(255,255,255,0.06)"
      borderBottom="1px solid rgba(255,255,255,0.10)"
      gap={4}
    >
      <HStack spacing={2} flexShrink={0}>
        <Box boxSize="11px" rounded="full" bg="#FF6B6B" />
        <Box boxSize="11px" rounded="full" bg="#FFD166" />
        <Box boxSize="11px" rounded="full" bg="#06D6A0" />
      </HStack>

      <Text
        fontSize="xs"
        color="whiteAlpha.700"
        fontWeight="800"
        letterSpacing="0.12em"
        textTransform="uppercase"
        noOfLines={1}
        textAlign="center"
        minW={0}
      >
        abm-workspace / {activeItem.label}
      </Text>

      <Box w="44px" flexShrink={0} />
    </Flex>
  );
}

function SidebarItem({ icon, label, isActive, onClick }) {
  return (
    <Button
      type="button"
      onClick={onClick}
      justifyContent="flex-start"
      h="auto"
      width="100%"
      px={4}
      py={3}
      rounded="2xl"
      bg={isActive ? "rgba(44,122,123,0.26)" : "transparent"}
      border="1px solid"
      borderColor={
        isActive ? "rgba(44,122,123,0.48)" : "rgba(255,255,255,0.08)"
      }
      color={isActive ? "white" : "whiteAlpha.760"}
      fontWeight="900"
      fontSize="sm"
      transition="all 0.2s ease"
      _hover={{
        bg: isActive ? "rgba(44,122,123,0.34)" : "rgba(255,255,255,0.08)",
        borderColor: "rgba(200,155,60,0.46)",
        transform: "translateX(3px)",
      }}
      _active={{
        transform: "translateX(3px) scale(0.99)",
      }}
    >
      <HStack spacing={3}>
        <Icon as={icon} />
        <Text>{label}</Text>
      </HStack>
    </Button>
  );
}

function TerminalWindow({ activeItem }) {
  return (
    <Box
      rounded="3xl"
      overflow="hidden"
      bg="#020817"
      border="1px solid rgba(255,255,255,0.12)"
      boxShadow="0 24px 60px rgba(0,0,0,0.28)"
      minW={0}
      width="100%"
    >
      <Flex
        align="center"
        justify="space-between"
        px={{ base: 4, md: 5 }}
        py={3}
        bg="rgba(255,255,255,0.05)"
        borderBottom="1px solid rgba(255,255,255,0.10)"
        gap={3}
      >
        <HStack spacing={2} minW={0}>
          <Icon as={FiTerminal} color="abm.gold" flexShrink={0} />
          <Text fontWeight="900" fontSize="sm" noOfLines={1}>
            {activeItem.fileName}
          </Text>
        </HStack>

        <Text fontSize="xs" color="whiteAlpha.500" flexShrink={0}>
          live preview
        </Text>
      </Flex>

      <Stack spacing={3} p={{ base: 4, md: 6 }} fontFamily="mono" minW={0}>
        <CodeLine muted text="const project = {" />

        <CodeLine indent token="service" text={`"${activeItem.service}",`} />

        <CodeLine indent token="goal" text={`"${activeItem.project.goal}",`} />

        <CodeLine
          indent
          token="stack"
          text={`[${activeItem.project.stack
            .map((item) => `"${item}"`)
            .join(", ")}],`}
        />

        <CodeLine
          indent
          token="focus"
          text={`"${activeItem.project.focus}",`}
        />

        <CodeLine muted text="};" />

        <Box h={3} />

        {activeItem.checklist.map((item) => (
          <CodeLine key={item} success text={item} />
        ))}

        <Box pt={4}>
          <Button
            as={RouterLink}
            to={activeItem.href}
            size="sm"
            rounded="full"
            bg="abm.teal"
            color="white"
            fontFamily="Poppins, Inter, system-ui, sans-serif"
            rightIcon={<FaArrowRight />}
            whiteSpace="normal"
            height="auto"
            minH="40px"
            py={2}
            _hover={{
              bg: "abm.tealDark",
              transform: "translateY(-2px)",
              boxShadow: "0 18px 35px rgba(44,122,123,0.25)",
            }}
          >
            Read more about {activeItem.label}
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

function CodeLine({
  text,
  token,
  indent = false,
  muted = false,
  success = false,
}) {
  return (
    <Text
      fontSize={{ base: "xs", sm: "sm", md: "md" }}
      color={success ? "#06D6A0" : muted ? "whiteAlpha.500" : "whiteAlpha.850"}
      pl={indent ? { base: 3, md: 5 } : 0}
      whiteSpace="normal"
      overflowWrap="anywhere"
      wordBreak="break-word"
      lineHeight="1.7"
    >
      {token && (
        <Box as="span" color="abm.gold">
          {token}:{" "}
        </Box>
      )}
      {text}
    </Text>
  );
}

function DesktopCard({ icon, label, value, text }) {
  return (
    <Box
      rounded="3xl"
      p={5}
      bg="rgba(255,255,255,0.06)"
      border="1px solid rgba(255,255,255,0.12)"
      minW={0}
    >
      <Icon as={icon} boxSize={6} color="abm.gold" mb={4} />

      <Text
        fontSize="xs"
        color="whiteAlpha.500"
        fontWeight="900"
        letterSpacing="0.14em"
        textTransform="uppercase"
        mb={1}
      >
        {label}
      </Text>

      <Text fontWeight="900" fontSize="xl" color="white">
        {value}
      </Text>

      <Text mt={2} color="whiteAlpha.700" fontSize="sm" lineHeight="1.7">
        {text}
      </Text>
    </Box>
  );
}

export default Hero;
