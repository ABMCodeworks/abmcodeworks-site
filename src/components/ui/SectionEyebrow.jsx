import { Text } from "@chakra-ui/react";

function SectionEyebrow({ children, color = "abm.teal" }) {
    return (
        <Text
            color={color}
            fontWeight="900"
            letterSpacing="0.18em"
            textTransform="uppercase"
            fontSize="sm"
        >
            {children}
        </Text>
    );
}

export default SectionEyebrow;
