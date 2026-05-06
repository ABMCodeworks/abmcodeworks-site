import { Box, Container, Flex, HStack, Image, Text } from "@chakra-ui/react";

import logo from "../../assets/logo.png";

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

export default Footer;
