import { Box, Heading, Icon, Text } from "@chakra-ui/react";

function ServiceCard({ icon, title, desc }) {
    return (
        <Box
            p={7}
            rounded="3xl"
            bg="white"
            border="1px solid"
            borderColor="abm.line"
            boxShadow="0 20px 55px rgba(11,23,42,0.06)"
            transition="all 0.22s ease"
            _hover={{
                transform: "translateY(-5px)",
                boxShadow: "0 28px 75px rgba(11,23,42,0.11)",
                borderColor: "abm.teal",
            }}
        >
            <Box
                w="52px"
                h="52px"
                rounded="2xl"
                bg="abm.soft"
                display="grid"
                placeItems="center"
                mb={5}
            >
                <Icon as={icon} boxSize={6} color="abm.teal" />
            </Box>

            <Heading as="h3" size="md" color="abm.navy" mb={3}>
                {title}
            </Heading>

            <Text color="gray.600" lineHeight="1.7">
                {desc}
            </Text>
        </Box>
    );
}

export default ServiceCard;
