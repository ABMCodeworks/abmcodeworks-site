import { Box, Button, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

function CTASection() {
    return (
        <Box bg="abm.navy" color="white">
            <Container maxW="7xl" py={{ base: 16, md: 20 }}>
                <Stack spacing={6} textAlign="center" align="center">
                    <Heading as="h2" size="2xl" maxW="760px" letterSpacing="-0.04em">
                        Ready to build a better website, app or business system?
                    </Heading>

                    <Text color="whiteAlpha.800" fontSize="lg" maxW="680px">
                        Tell us what you need built, fixed or improved.
                    </Text>

                    <Button
                        as={RouterLink}
                        to="/contact"
                        size="lg"
                        rounded="full"
                        bg="abm.teal"
                        color="white"
                        rightIcon={<FaArrowRight />}
                        _hover={{ bg: "abm.tealDark" }}
                    >
                        Contact ABM Codeworks
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
}

export default CTASection;
