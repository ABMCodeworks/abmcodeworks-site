/* eslint-disable react/prop-types */
import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Seo from "../components/seo/Seo";
import { LEGAL_EFFECTIVE, LEGAL_UPDATED } from "../data/legalData";

function LegalPage({ document }) {
  return (
    <Box bg="abm.paper" minH="100vh">
      <Seo
        title={`${document.title} | ABM Codeworks`}
        description={document.description}
        path={document.slug}
      />
      <Navbar />

      <Box as="main">
        <Box bg="abm.navy" color="white" borderBottom="1px solid" borderColor="whiteAlpha.200">
          <Container
            maxW="1800px"
            px={{ base: 4, md: 8, xl: 10, "2xl": 12 }}
            py={{ base: 14, md: 20 }}
          >
            <Stack spacing={6} maxW="1100px">
              <Badge
                alignSelf="flex-start"
                rounded="full"
                px={4}
                py={2}
                bg="rgba(44,122,123,0.22)"
                color="teal.100"
                letterSpacing="0.08em"
                textTransform="uppercase"
              >
                {document.product} · {document.kind}
              </Badge>
              <Heading
                as="h1"
                fontSize={{ base: "4xl", md: "6xl" }}
                lineHeight="1"
                letterSpacing="-0.045em"
              >
                {document.title}
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color="whiteAlpha.800" lineHeight="1.8">
                {document.intro}
              </Text>
              <Flex gap={3} wrap="wrap" color="whiteAlpha.700" fontSize="sm">
                <Text>Effective {LEGAL_EFFECTIVE}</Text>
                <Text aria-hidden="true">•</Text>
                <Text>Last updated {LEGAL_UPDATED}</Text>
              </Flex>
            </Stack>
          </Container>
        </Box>

        <Container
          maxW="1800px"
          px={{ base: 4, md: 8, xl: 10, "2xl": 12 }}
          py={{ base: 10, md: 16 }}
        >
          <Grid
            templateColumns={{ base: "minmax(0, 1fr)", lg: "280px minmax(0, 920px)" }}
            columnGap={{ lg: 14 }}
            rowGap={10}
            alignItems="start"
          >
            <Stack spacing={6} minW={0}>
              <Box bg="white" border="1px solid" borderColor="abm.line" rounded="2xl" p={5}>
                <Heading as="h2" size="sm" mb={4}>At a glance</Heading>
                <Stack spacing={3}>
                  {document.highlights.map((highlight) => (
                    <Flex key={highlight} gap={3} align="flex-start">
                      <Box as={FaCheckCircle} color="abm.teal" mt="3px" flexShrink={0} />
                      <Text fontSize="sm" lineHeight="1.6">{highlight}</Text>
                    </Flex>
                  ))}
                </Stack>
              </Box>

              <Box>
                <Text fontSize="xs" fontWeight="900" color="gray.500" textTransform="uppercase" letterSpacing="0.12em" mb={3}>
                  On this page
                </Text>
                <Stack spacing={1}>
                  {document.sections.map((section, index) => (
                    <Link
                      key={`${section.title}-${index}`}
                      href={`#section-${index + 1}`}
                      px={3}
                      py={2}
                      rounded="lg"
                      fontSize="sm"
                      color="gray.700"
                      _hover={{ bg: "white", color: "abm.teal", textDecoration: "none" }}
                    >
                      {section.title}
                    </Link>
                  ))}
                </Stack>
              </Box>
            </Stack>

            <Stack spacing={8} minW={0}>
              {document.cta ? (
                <Box bg="teal.50" border="1px solid" borderColor="teal.200" rounded="2xl" p={{ base: 5, md: 6 }}>
                  <Flex align={{ base: "flex-start", sm: "center" }} justify="space-between" direction={{ base: "column", sm: "row" }} gap={4}>
                    <Box>
                      <Heading as="h2" size="md" color="abm.navy">Ready to make a request?</Heading>
                      <Text mt={2} color="gray.700">Email our privacy contact directly. We will confirm receipt and next steps.</Text>
                    </Box>
                    <Button as="a" href={document.cta.href} bg="abm.teal" color="white" rounded="full" rightIcon={<FaArrowRight />} _hover={{ bg: "abm.tealDark" }}>
                      {document.cta.label}
                    </Button>
                  </Flex>
                </Box>
              ) : null}

              {document.sections.map((section, index) => (
                <Box
                  as="section"
                  id={`section-${index + 1}`}
                  key={`${section.title}-${index}`}
                  bg="white"
                  border="1px solid"
                  borderColor="abm.line"
                  rounded="2xl"
                  p={{ base: 6, md: 9 }}
                  scrollMarginTop="104px"
                >
                  <Text color="abm.teal" fontWeight="900" fontSize="sm" mb={2}>
                    {String(index + 1).padStart(2, "0")}
                  </Text>
                  <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }} color="abm.navy" letterSpacing="-0.025em" mb={5}>
                    {section.title}
                  </Heading>

                  <Stack spacing={4} color="gray.700" lineHeight="1.8">
                    {section.paragraphs?.map((paragraph) => (
                      <Text key={paragraph}>{paragraph}</Text>
                    ))}

                    {section.items ? (
                      <Stack spacing={3}>
                        {section.items.map((item) => (
                          <Box key={item.label} bg="abm.paper" border="1px solid" borderColor="abm.line" rounded="xl" p={5}>
                            <Text as="h3" fontWeight="900" color="abm.navy" mb={1}>{item.label}</Text>
                            <Text>{item.text}</Text>
                          </Box>
                        ))}
                      </Stack>
                    ) : null}

                    {section.bullets ? (
                      <UnorderedList spacing={3} pl={4}>
                        {section.bullets.map((bullet) => (
                          <ListItem key={bullet} pl={1}>{bullet}</ListItem>
                        ))}
                      </UnorderedList>
                    ) : null}

                    {section.note ? (
                      <Box bg="blue.50" borderLeft="4px solid" borderColor="abm.teal" p={4} rounded="md">
                        <Text fontSize="sm" color="blue.900"><strong>Important:</strong> {section.note}</Text>
                      </Box>
                    ) : null}
                  </Stack>
                </Box>
              ))}

              <Divider borderColor="abm.line" />

              <Flex align={{ base: "flex-start", md: "center" }} justify="space-between" direction={{ base: "column", md: "row" }} gap={5}>
                <Box>
                  <Text fontWeight="900" color="abm.navy">Related legal pages</Text>
                  <Text color="gray.600" fontSize="sm" mt={1}>Read the documents that apply alongside this one.</Text>
                </Box>
                <Flex gap={3} wrap="wrap">
                  {document.related.map((item) => (
                    <Button key={item.to} as={RouterLink} to={item.to} variant="outline" borderColor="abm.teal" color="abm.tealDark" rounded="full" rightIcon={<FaArrowRight />}>
                      {item.label}
                    </Button>
                  ))}
                </Flex>
              </Flex>
            </Stack>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default LegalPage;
