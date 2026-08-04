/* eslint-disable react/prop-types */
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import {
  FiBell,
  FiCheckSquare,
  FiEdit3,
  FiEyeOff,
  FiInbox,
  FiKey,
  FiLock,
  FiRefreshCw,
  FiSearch,
  FiSend,
  FiShield,
  FiSliders,
  FiTag,
} from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";

import Seo from "../components/seo/Seo";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const drift = {
  seed: "#E23D3D",
  seedDark: "#B92F2F",
  accent: "#FF8A65",
  surface: "#FFFAF8",
  panel: "#FFFFFF",
  ink: "#241A1A",
  muted: "#6F5C57",
  line: "#F0D8D1",
  soft: "#FFE8E1",
  soft2: "#FFF1EC",
};

const appModules = [
  {
    title: "Unified mailbox",
    text: "All Inboxes, Sent, Drafts and Trash bring multiple accounts into one clean desktop workflow.",
    icon: FiInbox,
  },
  {
    title: "To-Dos & Reminders",
    text: "Create tasks manually or let emails with TODO and REMINDER subjects become actionable items.",
    icon: FiCheckSquare,
  },
  {
    title: "Snooze for later",
    text: "Hide messages until later today, tomorrow or next week so the inbox only shows what matters now.",
    icon: FiBell,
  },
  {
    title: "Subscription cleanup",
    text: "Scan recent mail for unsubscribe options, open the original message, and send or open unsubscribe requests.",
    icon: FiTag,
  },
  {
    title: "Private by default",
    text: "App lock, blocked remote images, screenshot privacy and encrypted offline cache are built into settings.",
    icon: FiShield,
  },
  {
    title: "Desktop mail basics",
    text: "Compose, reply, attachments, signatures, search and account management live in one focused shell.",
    icon: FiEdit3,
  },
];

const securityItems = [
  {
    title: "App lock",
    text: "Require biometrics or device passcode on launch and after idle.",
    icon: FiLock,
  },
  {
    title: "Remote image blocking",
    text: "Stop sender tracking pixels from loading unless you choose to reveal them.",
    icon: FiEyeOff,
  },
  {
    title: "Encrypted local cache",
    text: "Keep mail available offline while storing cached messages encrypted on the device.",
    icon: FiKey,
  },
  {
    title: "Zero telemetry",
    text: "The app documents no analytics and no trackers as an always-on privacy baseline.",
    icon: FiShield,
  },
];

const betaNotes = [
  "Mac and Windows beta",
  "Gmail, Outlook, iCloud, Yahoo, Zoho and IMAP/SMTP",
  "Built by ABM Codeworks",
];

const legalLinks = [
  { label: "Privacy Notice", to: "/drift-mail/privacy" },
  { label: "Terms of Use", to: "/drift-mail/terms" },
  { label: "Data deletion", to: "/legal/privacy-requests" },
];

function DriftMail() {
  return (
    <Box bg={drift.surface} w="100%" overflowX="hidden">
      <Seo
        title="Drift Mail Beta | Private Desktop Email"
        description="Drift Mail brings unified email, to-dos, reminders, subscriptions and private-by-default settings into one focused desktop app. Beta downloads are temporarily unavailable."
        path="/drift-mail"
      />

      <Navbar />

      <Box as="main" w="100%">
        <HeroSection />
        <AvailabilitySection />
        <ModulesSection />
        <SecuritySection />
        <WorkflowSection />
        <BetaSection />
      </Box>

      <Footer />
    </Box>
  );
}

function HeroSection() {
  return (
    <Box
      bg={`linear-gradient(135deg, ${drift.surface} 0%, #FFF3EE 48%, #FFE0D6 100%)`}
      color={drift.ink}
      w="100%"
      overflow="hidden"
      borderBottom="1px solid"
      borderColor={drift.line}
    >
      <Container
        maxW="1800px"
        px={{ base: 4, md: 8, xl: 10, "2xl": 12 }}
        py={{ base: 14, md: 20, xl: 24 }}
      >
        <SimpleGrid
          columns={{ base: 1, lg: "1.02fr 0.98fr" }}
          spacing={{ base: 10, lg: 16 }}
          alignItems="center"
        >
          <Stack spacing={7} maxW="930px">
            <Eyebrow>Drift Mail Beta</Eyebrow>

            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "6xl", xl: "7xl" }}
              lineHeight="0.96"
              letterSpacing="-0.04em"
            >
              Email, to-dos and reminders in one private desktop app.
            </Heading>

            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color={drift.muted}
              lineHeight="1.8"
              maxW="850px"
            >
              Drift Mail is a focused Mac and Windows mail app with unified
              inboxes, TODO and REMINDER capture, message snoozing,
              subscription cleanup and privacy controls that are switched on by
              default.
            </Text>

            <HStack spacing={4} flexWrap="wrap">
              <Button
                as={RouterLink}
                to="/contact"
                size="lg"
                rounded="8px"
                bg={drift.seed}
                color="white"
                rightIcon={<FaArrowRight />}
                _hover={{
                  bg: drift.seedDark,
                  transform: "translateY(-2px)",
                  boxShadow: "0 18px 35px rgba(226,61,61,0.25)",
                }}
              >
                Request beta access
              </Button>

              <Button
                as={RouterLink}
                to="/contact"
                size="lg"
                rounded="8px"
                variant="outline"
                borderColor={drift.seed}
                color={drift.seed}
                rightIcon={<FaArrowRight />}
                _hover={{
                  bg: drift.soft,
                  borderColor: drift.seedDark,
                }}
              >
                Send feedback
              </Button>
            </HStack>

            <HStack spacing={3} flexWrap="wrap">
              {betaNotes.map((note) => (
                <Badge
                  key={note}
                  rounded="8px"
                  px={4}
                  py={2}
                  bg={drift.panel}
                  color={drift.seedDark}
                  border="1px solid"
                  borderColor={drift.line}
                >
                  {note}
                </Badge>
              ))}
            </HStack>
          </Stack>

          <MailPreview />
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function MailPreview() {
  const navItems = [
    { label: "All Inboxes", count: "12", active: true },
    { label: "To-Do & Reminders", count: "4" },
    { label: "Subscriptions", count: "9" },
    { label: "Privacy & Security", count: "On" },
  ];

  return (
    <Box
      bg="rgba(255,255,255,0.72)"
      border="1px solid"
      borderColor={drift.line}
      rounded="8px"
      p={{ base: 3, md: 4 }}
      boxShadow="0 34px 90px rgba(120,45,35,0.18)"
      aria-label="Drift Mail app structure preview"
    >
      <Box bg={drift.panel} color={drift.ink} rounded="8px" overflow="hidden">
        <Flex
          align="center"
          justify="space-between"
          px={{ base: 4, md: 5 }}
          py={4}
          borderBottom="1px solid"
          borderColor={drift.line}
        >
          <HStack spacing={3}>
            <BrandMark size="42px" iconSize={5} />
            <Box>
              <Text fontWeight="900" lineHeight="1">
                Drift Mail
              </Text>
              <Text fontSize="sm" color={drift.muted}>
                Desktop beta
              </Text>
            </Box>
          </HStack>

          <Badge rounded="8px" bg={drift.soft} color={drift.seedDark} px={3} py={1}>
            Private by default
          </Badge>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: "0.58fr 1fr" }} minH="430px">
          <Stack
            spacing={0}
            bg={drift.soft2}
            borderRight={{ base: "none", md: "1px solid" }}
            borderBottom={{ base: "1px solid", md: "none" }}
            borderColor={drift.line}
          >
            {navItems.map((item) => (
              <Flex
                key={item.label}
                align="center"
                justify="space-between"
                px={4}
                py={4}
                bg={item.active ? drift.panel : "transparent"}
                borderBottom="1px solid"
                borderColor={drift.line}
              >
                <HStack spacing={3}>
                  <Box
                    boxSize={2.5}
                    rounded="full"
                    bg={item.active ? drift.seed : "#E0B8AE"}
                  />
                  <Text fontWeight="800">{item.label}</Text>
                </HStack>
                <Text fontSize="sm" color={drift.muted} fontWeight="800">
                  {item.count}
                </Text>
              </Flex>
            ))}
          </Stack>

          <Stack spacing={5} p={{ base: 4, md: 6 }}>
            <Badge
              alignSelf="flex-start"
              rounded="8px"
              bg={drift.soft}
              color={drift.seedDark}
              px={3}
              py={1}
            >
              TODO / REMINDER capture
            </Badge>

            <Heading as="h2" size="lg" color={drift.ink} lineHeight="1.1">
              Turn important email into action.
            </Heading>

            <Text color={drift.muted} lineHeight="1.75">
              Messages can be read, replied to, marked unread, deleted, restored
              from Trash, added to the to-do list, snoozed and opened from the
              original source.
            </Text>

            <Stack spacing={3} pt={1}>
              {[
                { label: "All accounts in one smart inbox", icon: FiInbox },
                { label: "To-dos and reminders from email", icon: FiCheckSquare },
                { label: "Subscription unsubscribe flow", icon: FiTag },
                { label: "Search from encrypted cache", icon: FiSearch },
              ].map((item) => (
                <HStack key={item.label} spacing={3}>
                  <Icon as={item.icon} color={drift.seed} />
                  <Text fontWeight="800" color={drift.ink}>
                    {item.label}
                  </Text>
                </HStack>
              ))}
            </Stack>
          </Stack>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

function AvailabilitySection() {
  return (
    <Box id="availability" bg={drift.panel} w="100%">
      <Container
        maxW="1800px"
        px={{ base: 4, md: 8, xl: 10, "2xl": 12 }}
        py={{ base: 16, md: 24 }}
      >
        <SimpleGrid
          columns={{ base: 1, lg: "1fr 0.75fr" }}
          spacing={{ base: 8, lg: 14 }}
          alignItems="center"
        >
          <Stack spacing={4} maxW="900px">
            <Eyebrow>Beta availability</Eyebrow>
            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "5xl" }}
              color={drift.ink}
              letterSpacing="-0.035em"
              lineHeight="1"
            >
              Downloads are temporarily unavailable.
            </Heading>
            <Text color={drift.muted} fontSize={{ base: "lg", md: "xl" }} lineHeight="1.85">
              We are preparing the next Mac and Windows beta builds. Contact
              ABM Codeworks to request early access or be notified when public
              downloads return.
            </Text>
          </Stack>

          <Box bg={drift.soft2} border="1px solid" borderColor={drift.line} rounded="8px" p={{ base: 6, md: 8 }}>
            <Stack spacing={5}>
              <Icon as={FiBell} color={drift.seed} boxSize={8} />
              <Heading as="h3" size="md" color={drift.ink}>Get notified</Heading>
              <Text color={drift.muted} lineHeight="1.75">
                Tell us whether you use Mac or Windows and we will share the
                next available beta when it is ready.
              </Text>
              <Button
                as={RouterLink}
                to="/contact"
                alignSelf="flex-start"
                rounded="8px"
                bg={drift.seed}
                color="white"
                rightIcon={<FaArrowRight />}
                _hover={{ bg: drift.seedDark }}
              >
                Request beta access
              </Button>
            </Stack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function ModulesSection() {
  return (
    <Box bg={drift.surface} w="100%">
      <Container
        maxW="1800px"
        px={{ base: 4, md: 8, xl: 10, "2xl": 12 }}
        py={{ base: 16, md: 24 }}
      >
        <Stack spacing={10}>
          <Stack spacing={4} maxW="1080px">
            <Eyebrow>App Structure</Eyebrow>

            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "5xl" }}
              color={drift.ink}
              letterSpacing="-0.035em"
              lineHeight="1"
            >
              Built around the real Drift Mail screens.
            </Heading>

            <Text color={drift.muted} fontSize="lg" lineHeight="1.85">
              The beta already has a mailbox shell, account onboarding, compose,
              search, subscriptions, signatures, privacy settings and a
              dedicated To-Do & Reminders area.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={5}>
            {appModules.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
}

function FeatureCard({ feature }) {
  const FeatureIcon = feature.icon;

  return (
    <Box
      bg={drift.panel}
      rounded="8px"
      p={{ base: 6, md: 7 }}
      border="1px solid"
      borderColor={drift.line}
      height="100%"
      boxShadow="0 18px 46px rgba(120,45,35,0.06)"
    >
      <Stack spacing={4}>
        <Box bg={drift.soft} color={drift.seed} rounded="8px" p={3} w="fit-content">
          <Icon as={FeatureIcon} boxSize={6} />
        </Box>

        <Heading as="h3" size="md" color={drift.ink}>
          {feature.title}
        </Heading>

        <Text color={drift.muted} lineHeight="1.75">
          {feature.text}
        </Text>
      </Stack>
    </Box>
  );
}

function SecuritySection() {
  return (
    <Box bg={drift.panel} w="100%">
      <Container
        maxW="1800px"
        px={{ base: 4, md: 8, xl: 10, "2xl": 12 }}
        py={{ base: 16, md: 24 }}
      >
        <SimpleGrid
          columns={{ base: 1, lg: "0.85fr 1.15fr" }}
          spacing={{ base: 10, lg: 16 }}
          alignItems="start"
        >
          <Stack spacing={4} maxW="740px">
            <Eyebrow>Security</Eyebrow>

            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "5xl" }}
              color={drift.ink}
              letterSpacing="-0.035em"
              lineHeight="1"
            >
              Privacy controls are part of the product, not an afterthought.
            </Heading>

            <Text color={drift.muted} fontSize="lg" lineHeight="1.85">
              Drift Mail’s settings default to protections that make sense for a
              desktop inbox: lock the app, block tracking images, protect
              previews and keep cached mail encrypted.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4}>
            {securityItems.map((item) => (
              <Box
                key={item.title}
                bg={drift.surface}
                rounded="8px"
                p={5}
                border="1px solid"
                borderColor={drift.line}
              >
                <Stack spacing={3}>
                  <Icon as={item.icon} color={drift.seed} boxSize={6} />
                  <Heading as="h3" size="sm" color={drift.ink}>
                    {item.title}
                  </Heading>
                  <Text color={drift.muted} lineHeight="1.65">
                    {item.text}
                  </Text>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function WorkflowSection() {
  return (
    <Box bg={drift.surface} w="100%">
      <Container
        maxW="1800px"
        px={{ base: 4, md: 8, xl: 10, "2xl": 12 }}
        py={{ base: 16, md: 24 }}
      >
        <SimpleGrid
          columns={{ base: 1, lg: 3 }}
          spacing={{ base: 8, lg: 12 }}
        >
          {[
            {
              label: "01",
              title: "Connect accounts",
              text: "Start with Gmail, Outlook, iCloud, Yahoo, Zoho, Proton Bridge or custom IMAP/SMTP settings.",
              icon: FiSliders,
            },
            {
              label: "02",
              title: "Triage the inbox",
              text: "Use smart folders, search, reply, attachments, signatures, delete, restore and snooze controls.",
              icon: FiRefreshCw,
            },
            {
              label: "03",
              title: "Capture work",
              text: "Turn email into to-dos or reminders, then decide whether the source message stays, moves to Trash or is deleted.",
              icon: FiCheckSquare,
            },
          ].map((item) => (
            <Box
              key={item.title}
              borderLeft="4px solid"
              borderColor={drift.seed}
              pl={{ base: 5, md: 7 }}
              py={2}
            >
              <HStack spacing={3} mb={4}>
                <Icon as={item.icon} color={drift.seed} boxSize={5} />
                <Text
                  color={drift.seedDark}
                  fontWeight="900"
                  fontSize="sm"
                  letterSpacing="0.12em"
                  textTransform="uppercase"
                >
                  {item.label}
                </Text>
              </HStack>

              <Heading
                as="h3"
                size="lg"
                color={drift.ink}
                mb={4}
                lineHeight="1.15"
              >
                {item.title}
              </Heading>

              <Text color={drift.muted} fontSize="lg" lineHeight="1.85">
                {item.text}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function BetaSection() {
  return (
    <Box bg={drift.panel} w="100%">
      <Container
        maxW="1800px"
        px={{ base: 4, md: 8, xl: 10, "2xl": 12 }}
        py={{ base: 16, md: 24 }}
      >
        <SimpleGrid
          columns={{ base: 1, lg: "0.9fr 1.1fr" }}
          spacing={{ base: 10, lg: 16 }}
          alignItems="center"
        >
          <Stack spacing={4} maxW="760px">
            <Eyebrow>Beta Release</Eyebrow>

            <Heading
              as="h2"
              fontSize={{ base: "3xl", md: "5xl" }}
              color={drift.ink}
              letterSpacing="-0.035em"
              lineHeight="1"
            >
              Help shape Drift Mail before the full launch.
            </Heading>

            <Text color={drift.muted} fontSize="lg" lineHeight="1.85">
              The beta is for testing the real app structure: account setup,
              mailbox performance, to-do capture, reminders, subscriptions,
              privacy settings and everyday desktop mail workflows.
            </Text>

            <HStack spacing={4} flexWrap="wrap">
              {legalLinks.map((link) => (
                <Button
                  key={link.to}
                  as={RouterLink}
                  to={link.to}
                  variant="link"
                  color={drift.seedDark}
                  fontWeight="800"
                >
                  {link.label}
                </Button>
              ))}
            </HStack>
          </Stack>

          <Box
            bg={drift.ink}
            color="white"
            rounded="8px"
            p={{ base: 7, md: 9 }}
            boxShadow="0 24px 70px rgba(120,45,35,0.18)"
          >
            <Stack spacing={5}>
              <HStack spacing={4}>
                <BrandMark size="56px" iconSize={7} />
                <Box>
                  <Heading as="h3" size="lg">
                    Early access build
                  </Heading>
                  <Text color="whiteAlpha.700">Mac and Windows beta</Text>
                </Box>
              </HStack>

              <Text color="whiteAlpha.820" fontSize="lg" lineHeight="1.8">
                Beta builds may change frequently as features, performance and
                platform behavior are refined. Keep important email backed up
                and send feedback through ABM Codeworks.
              </Text>

              <Button
                as={RouterLink}
                to="/contact"
                alignSelf="flex-start"
                rounded="8px"
                bg={drift.accent}
                color={drift.ink}
                rightIcon={<FaArrowRight />}
                _hover={{
                  bg: "#FF9C7D",
                  transform: "translateY(-2px)",
                }}
              >
                Contact support
              </Button>
            </Stack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function BrandMark({ size, iconSize }) {
  return (
    <Flex
      align="center"
      justify="center"
      w={size}
      h={size}
      rounded="8px"
      bg={`linear-gradient(135deg, ${drift.seed}, ${drift.accent})`}
      color="white"
      flexShrink={0}
      boxShadow="0 12px 26px rgba(226,61,61,0.22)"
    >
      <Icon as={FiSend} boxSize={iconSize} />
    </Flex>
  );
}

function Eyebrow({ children }) {
  return (
    <Text
      color={drift.seedDark}
      fontWeight="900"
      fontSize="sm"
      letterSpacing="0.16em"
      textTransform="uppercase"
    >
      {children}
    </Text>
  );
}

export default DriftMail;
