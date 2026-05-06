import {
    Badge,
    Box,
    Button,
    Container,
    Heading,
    Image,
    SimpleGrid,
    Stack,
    Text,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

import logo from "../../assets/logo.png";

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

export default Hero;
