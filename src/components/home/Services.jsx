import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Stack,
    Text,
} from "@chakra-ui/react";

import SectionEyebrow from "../ui/SectionEyebrow";
import ServiceCard from "../ui/ServiceCard";
import { services } from "../../data/homeData";

function Services() {
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

export default Services;
