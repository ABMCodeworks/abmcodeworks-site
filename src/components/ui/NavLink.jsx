import { Link } from "@chakra-ui/react";

function NavLink({ href, children }) {
    return (
        <Link
            href={href}
            fontWeight="800"
            color="whiteAlpha.850"
            _hover={{ color: "white", textDecoration: "none" }}
        >
            {children}
        </Link>
    );
}

export default NavLink;
