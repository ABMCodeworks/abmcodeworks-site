import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaArrowRight, FaBalanceScale, FaCookieBite, FaFileContract, FaShieldAlt, FaUserShield } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Seo from "../components/seo/Seo";
import { LEGAL_UPDATED } from "../data/legalData";

const groups = [
  {
    product: "Drift Mail",
    text: "Desktop email privacy and licence terms.",
    icon: FaShieldAlt,
    links: [
      { label: "Privacy Notice", to: "/drift-mail/privacy" },
      { label: "Terms of Use", to: "/drift-mail/terms" },
    ],
  },
  {
    product: "BillEx",
    text: "Cloud invoicing privacy, service, and business-processing terms.",
    icon: FaFileContract,
    links: [
      { label: "Privacy Notice", to: "/billex/privacy" },
      { label: "Terms of Service", to: "/billex/terms" },
      { label: "Data Processing Addendum", to: "/billex/dpa" },
    ],
  },
  {
    product: "Website",
    text: "Rules for enquiries, site security, and browser storage.",
    icon: FaCookieBite,
    links: [
      { label: "Website Privacy", to: "/legal/privacy" },
      { label: "Cookie Notice", to: "/legal/cookies" },
    ],
  },
  {
    product: "Your privacy rights",
    text: "Access, correction, export, deletion, opt-out, and appeal instructions.",
    icon: FaUserShield,
    links: [
      { label: "Privacy Requests", to: "/legal/privacy-requests" },
    ],
  },
];

function LegalCenter() {
  return (
    <Box bg="abm.paper" minH="100vh">
      <Seo
        title="Legal & Privacy Centre | ABM Codeworks"
        description="Privacy notices, product terms, cookie information, data processing terms, and privacy request instructions for ABM Codeworks, Drift Mail, and BillEx."
        path="/legal"
      />
      <Navbar />
      <Box as="main">
        <Box bg="abm.navy" color="white">
          <Container maxW="1800px" px={{ base: 4, md: 8, xl: 10, "2xl": 12 }} py={{ base: 16, md: 24 }}>
            <Stack spacing={7} maxW="1060px">
              <Badge alignSelf="flex-start" rounded="full" px={4} py={2} bg="rgba(44,122,123,0.22)" color="teal.100">
                Legal & trust
              </Badge>
              <Flex align="center" gap={4}>
                <Box as={FaBalanceScale} boxSize={{ base: 9, md: 12 }} color="abm.gold" flexShrink={0} />
                <Heading as="h1" fontSize={{ base: "4xl", md: "6xl" }} lineHeight="1" letterSpacing="-0.05em">
                  Clear terms. Practical privacy.
                </Heading>
              </Flex>
              <Text color="whiteAlpha.800" fontSize={{ base: "lg", md: "xl" }} lineHeight="1.8">
                Find the documents that apply to the ABM Codeworks website, Drift Mail, and BillEx. Our baseline is transparency, data minimisation, no sale of personal information, and meaningful privacy rights regardless of where you live.
              </Text>
              <Text color="whiteAlpha.600" fontSize="sm">Documents last updated {LEGAL_UPDATED}</Text>
            </Stack>
          </Container>
        </Box>

        <Container maxW="1800px" px={{ base: 4, md: 8, xl: 10, "2xl": 12 }} py={{ base: 12, md: 18 }}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {groups.map((group) => (
              <Box key={group.product} bg="white" border="1px solid" borderColor="abm.line" rounded="2xl" p={{ base: 6, md: 8 }} boxShadow="0 18px 48px rgba(11,23,42,0.06)">
                <Stack spacing={5} height="100%">
                  <Box bg="abm.soft" color="abm.tealDark" rounded="xl" p={4} w="fit-content">
                    <Box as={group.icon} boxSize={6} />
                  </Box>
                  <Box>
                    <Heading as="h2" size="lg" color="abm.navy">{group.product}</Heading>
                    <Text mt={2} color="gray.600" lineHeight="1.7">{group.text}</Text>
                  </Box>
                  <Flex gap={3} wrap="wrap" mt="auto">
                    {group.links.map((link) => (
                      <Button key={link.to} as={RouterLink} to={link.to} variant="outline" borderColor="abm.teal" color="abm.tealDark" rounded="full" rightIcon={<FaArrowRight />}>
                        {link.label}
                      </Button>
                    ))}
                  </Flex>
                </Stack>
              </Box>
            ))}
          </SimpleGrid>

          <Box mt={10} bg="orange.50" border="1px solid" borderColor="orange.200" rounded="2xl" p={{ base: 6, md: 8 }}>
            <Heading as="h2" size="md" color="orange.900">A policy is one part of compliance</Heading>
            <Text mt={3} color="orange.900" lineHeight="1.8">
              These documents describe the intended product practices and preserve non-waivable local rights. Operational compliance also depends on accurate data mapping, contracts with providers, security controls, breach procedures, regulator registrations where required, and keeping these notices aligned with each product release.
            </Text>
          </Box>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default LegalCenter;

