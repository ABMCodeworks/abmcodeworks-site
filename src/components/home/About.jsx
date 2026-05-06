import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Stack,
    Text,
} from "@chakra-ui/react";

import SectionEyebrow from "../ui/SectionEyebrow";
import ValueCard from "../ui/ValueCard";
import { values } from "../../data/homeData";

function About() {
    return (
        <Box id="about" bg="abm.paper">
            <Container maxW="7xl" py={{ base: 16, md: 24 }}>
                <SimpleGrid
                    columns={{ base: 1, lg: 2 }}
                    spacing={12}
                    alignItems="center"
                >
                    <Stack spacing={5}>
                        <SectionEyebrow>About ABM Codeworks</SectionEyebrow>

                        <Heading
                            as="h2"
                            size="2xl"
                            color="abm.navy"
                            letterSpacing="-0.04em"
                        >
                            Practical software engineering for teams that need things to work.
                        </Heading>

                        <Text color="gray.700" fontSize="lg" lineHeight="1.8">
                            We partner with schools, non-profits, startups and established
                            businesses to create dependable digital tools. From planning and
                            design to build, deployment and support, the focus is always on
                            clarity, speed and long-term value.
                        </Text>
                    </Stack>

                    <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={5}>
                        {values.map((value) => (
                            <ValueCard key={value.title} {...value} />
                        ))}
                    </SimpleGrid>
                </SimpleGrid>
            </Container>
        </Box>
    );
}

export default About;
