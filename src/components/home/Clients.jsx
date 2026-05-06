import { Box, Container, Heading, SimpleGrid, Stack } from "@chakra-ui/react";

import SectionEyebrow from "../ui/SectionEyebrow";
import ClientLogo from "../ui/ClientLogo";
import { clients } from "../../data/homeData";

function Clients() {
    return (
        <Box id="clients" bg="abm.paper">
            <Container maxW="7xl" py={{ base: 16, md: 24 }}>
                <Stack spacing={4} textAlign="center" maxW="760px" mx="auto" mb={12}>
                    <SectionEyebrow>Selected clients</SectionEyebrow>

                    <Heading as="h2" size="2xl" color="abm.navy" letterSpacing="-0.04em">
                        Trusted by organisations across education, tourism, conservation,
                        retail and commerce.
                    </Heading>
                </Stack>

                <SimpleGrid columns={{ base: 1, sm: 2, lg: 3, xl: 4 }} spacing={6}>
                    {clients.map((client) => (
                        <ClientLogo key={client.alt} {...client} />
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}

export default Clients;
