import { Box, Image, Link } from "@chakra-ui/react";

function ClientLogo({ href, src, alt }) {
    return (
        <Link
            href={href}
            isExternal
            _hover={{ textDecoration: "none" }}
            aria-label={alt}
            role="group"
        >
            <Box
                h="150px"
                display="grid"
                placeItems="center"
                bg="white"
                rounded="3xl"
                p={7}
                border="1px solid"
                borderColor="abm.line"
                boxShadow="0 18px 50px rgba(11,23,42,0.06)"
                transition="all 0.22s ease"
                _hover={{
                    transform: "translateY(-4px)",
                    boxShadow: "0 26px 70px rgba(11,23,42,0.11)",
                    borderColor: "abm.teal",
                }}
            >
                <Image
                    src={src}
                    alt={alt}
                    maxH="90px"
                    maxW="190px"
                    objectFit="contain"
                    filter="grayscale(100%)"
                    opacity="0.78"
                    transition="all 0.22s ease"
                    _groupHover={{
                        filter: "grayscale(0%)",
                        opacity: 1,
                    }}
                />
            </Box>
        </Link>
    );
}

export default ClientLogo;
