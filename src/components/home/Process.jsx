import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Stack,
    Text,
} from "@chakra-ui/react";

import SectionEyebrow from "../ui/SectionEyebrow";
import { processSteps } from "../../data/homeData";

function Process() {
    return (
        <Box id="process" bg="abm.navy" color="white">
            <Container maxW="7xl" py={{ base: 16, md: 24 }}>
                <Stack spacing={4} maxW="760px" mb={12}>
                    <SectionEyebrow color="abm.gold">How we work</SectionEyebrow>

                    <Heading as="h2" size="2xl" letterSpacing="-0.04em">
                        A simple process that keeps complex builds under control.
                    </Heading>
                </Stack>

                <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={6}>
                    {processSteps.map((step) => (
                        <ProcessCard key={step.number} {...step} />
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}

function ProcessCard({ number, title, text }) {
    return (
        <Box
            p={7}
            rounded="3xl"
            bg="whiteAlpha.100"
            border="1px solid rgba(255,255,255,0.14)"
        >
            <Text color="abm.gold" fontWeight="900" mb={5}>
                {number}
            </Text>

            <Heading as="h3" size="md" mb={3}>
                {title}
            </Heading>

            <Text color="whiteAlpha.800" lineHeight="1.8">
                {text}
            </Text>
        </Box>
    );
}

export default Process;
