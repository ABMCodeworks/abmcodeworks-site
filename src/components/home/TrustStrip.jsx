import {
    Box,
    Container,
    HStack,
    Icon,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";

import { trustItems } from "../../data/homeData";

function TrustStrip() {
    return (
        <Box bg="white" borderBottom="1px solid" borderColor="abm.line">
            <Container maxW="7xl" py={6}>
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5}>
                    {trustItems.map((item) => (
                        <TrustItem key={item.text} {...item} />
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}

function TrustItem({ icon, text }) {
    return (
        <HStack spacing={3}>
            <Icon as={icon} color="abm.teal" boxSize={5} />
            <Text fontWeight="700" color="abm.ink">
                {text}
            </Text>
        </HStack>
    );
}

export default TrustStrip;
