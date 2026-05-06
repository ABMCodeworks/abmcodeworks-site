import { Box, Heading, Text } from "@chakra-ui/react";

function ValueCard({ title, text }) {
    return (
        <Box
            p={6}
            rounded="3xl"
            bg="white"
            border="1px solid"
            borderColor="abm.line"
            boxShadow="0 18px 50px rgba(11,23,42,0.06)"
        >
            <Heading as="h3" size="md" color="abm.navy" mb={3}>
                {title}
            </Heading>

            <Text color="gray.600" lineHeight="1.7">
                {text}
            </Text>
        </Box>
    );
}

export default ValueCard;
