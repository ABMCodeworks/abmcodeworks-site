import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import logo from "../../assets/logo.png";

function Footer() {
  function openStorageNotice() {
    window.dispatchEvent(new Event("abm:open-storage-notice"));
  }

  return (
    <Box as="footer" bg="abm.navy" color="white" w="100%">
      <Container
        maxW="1800px"
        px={{ base: 4, md: 8, xl: 10, "2xl": 12 }}
        py={{ base: 8, md: 10 }}
      >
        <Flex
          align={{ base: "flex-start", md: "center" }}
          justify="space-between"
          direction={{ base: "column", md: "row" }}
          gap={6}
          w="100%"
        >
          <HStack spacing={3}>
            <Box bg="white" rounded="xl" p={2} flexShrink={0}>
              <Image src={logo} alt="ABM Codeworks logo" boxSize="28px" />
            </Box>

            <Box>
              <Text fontWeight="900">ABM Codeworks</Text>
              <Text fontSize="sm" color="whiteAlpha.700">
                © {new Date().getFullYear()} All rights reserved.
              </Text>
            </Box>
          </HStack>

          <HStack spacing={5} wrap="wrap" align="center">
            <Link
              as={RouterLink}
              to="/website-design-zimbabwe"
              fontSize="sm"
              color="whiteAlpha.700"
              _hover={{ color: "white" }}
            >
              Website Design
            </Link>

            <Link
              as={RouterLink}
              to="/software-development-zimbabwe"
              fontSize="sm"
              color="whiteAlpha.700"
              _hover={{ color: "white" }}
            >
              Software Development
            </Link>

            <Link
              as={RouterLink}
              to="/portfolio"
              fontSize="sm"
              color="whiteAlpha.700"
              _hover={{ color: "white" }}
            >
              Portfolio
            </Link>

            <Link
              as={RouterLink}
              to="/drift-mail"
              fontSize="sm"
              color="whiteAlpha.700"
              _hover={{ color: "white" }}
            >
              Drift Mail
            </Link>

            <Link
              as={RouterLink}
              to="/legal"
              fontSize="sm"
              color="whiteAlpha.700"
              _hover={{ color: "white" }}
            >
              Legal & Privacy
            </Link>

            <Link
              as={RouterLink}
              to="/legal/privacy-requests"
              fontSize="sm"
              color="whiteAlpha.700"
              _hover={{ color: "white" }}
            >
              Data Requests
            </Link>

            <Button
              onClick={openStorageNotice}
              variant="link"
              fontSize="sm"
              fontWeight="normal"
              color="whiteAlpha.700"
              _hover={{ color: "white", textDecoration: "underline" }}
            >
              Storage notice
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
