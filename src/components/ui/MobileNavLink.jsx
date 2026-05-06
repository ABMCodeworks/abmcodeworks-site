import { Link } from "@chakra-ui/react";

function MobileNavLink({ href, onClick, children }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            py={3}
            color="white"
            fontWeight="800"
            borderBottom="1px solid rgba(255,255,255,0.08)"
            _hover={{ color: "abm.gold", textDecoration: "none" }}
        >
            {children}
        </Link>
    );
}

export default MobileNavLink;
