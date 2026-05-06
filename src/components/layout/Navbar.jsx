import {
    Box,
    Button,
    Collapse,
    Container,
    Flex,
    HStack,
    IconButton,
    Image,
    Link,
    Text,
    useDisclosure,
    VStack,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

import logo from "../../assets/logo.png";
import NavLink from "../ui/NavLink";
import MobileNavLink from "../ui/MobileNavLink";

function Navbar() {
    const { isOpen, onToggle, onClose } = useDisclosure();

    return (
        <Box
            as="header"
            position="sticky"
            top="0"
            zIndex="1000"
            bg="rgba(11, 23, 42, 0.92)"
            color="white"
            backdropFilter="blur(16px)"
            borderBottom="1px solid rgba(255,255,255,0.12)"
        >
            <Container maxW="7xl" py={3}>
                <Flex align="center" justify="space-between" gap={6}>
                    <Link href="#home" _hover={{ textDecoration: "none" }}>
                        <HStack spacing={3}>
                            <Box
                                bg="white"
                                rounded="2xl"
                                p={2}
                                boxShadow="0 14px 30px rgba(0,0,0,0.22)"
                            >
                                <Image src={logo} alt="ABM Codeworks logo" boxSize="34px" />
                            </Box>

                            <Box>
                                <Text fontWeight="900" lineHeight="1">
                                    ABM Codeworks
                                </Text>
                                <Text
                                    fontSize="xs"
                                    color="whiteAlpha.700"
                                    display={{ base: "none", sm: "block" }}
                                >
                                    Web, mobile and cloud systems
                                </Text>
                            </Box>
                        </HStack>
                    </Link>

                    <HStack display={{ base: "none", lg: "flex" }} spacing={7}>
                        <NavLink href="#about">About</NavLink>
                        <NavLink href="#services">Services</NavLink>
                        <NavLink href="#process">Process</NavLink>
                        <NavLink href="#clients">Clients</NavLink>

                        <Button
                            as="a"
                            href="#contact"
                            size="sm"
                            rounded="full"
                            bg="abm.teal"
                            color="white"
                            _hover={{ bg: "abm.tealDark", transform: "translateY(-1px)" }}
                        >
                            Start a project
                        </Button>
                    </HStack>

                    <IconButton
                        aria-label="Open menu"
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        display={{ base: "inline-flex", lg: "none" }}
                        onClick={onToggle}
                        variant="ghost"
                        color="white"
                        _hover={{ bg: "whiteAlpha.200" }}
                    />
                </Flex>
            </Container>

            <Collapse in={isOpen} animateOpacity>
                <Box
                    display={{ lg: "none" }}
                    bg="abm.navy2"
                    borderTop="1px solid rgba(255,255,255,0.12)"
                    maxH="calc(100vh - 72px)"
                    overflowY="auto"
                >
                    <VStack align="stretch" spacing={1} px={5} py={5}>
                        <MobileNavLink href="#about" onClick={onClose}>
                            About
                        </MobileNavLink>

                        <MobileNavLink href="#services" onClick={onClose}>
                            Services
                        </MobileNavLink>

                        <MobileNavLink href="#process" onClick={onClose}>
                            Process
                        </MobileNavLink>

                        <MobileNavLink href="#clients" onClick={onClose}>
                            Clients
                        </MobileNavLink>

                        <Button
                            as="a"
                            href="#contact"
                            mt={3}
                            rounded="full"
                            bg="abm.teal"
                            color="white"
                            onClick={onClose}
                            _hover={{ bg: "abm.tealDark" }}
                        >
                            Contact ABM
                        </Button>
                    </VStack>
                </Box>
            </Collapse>
        </Box>
    );
}

export default Navbar;
