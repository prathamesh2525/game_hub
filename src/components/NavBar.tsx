import { HStack, Image, Text } from "@chakra-ui/react"
import logo from '../assets/logo.webp'

const NavBar = () => {
    return (
        <HStack p={2}>
            <Image src={logo} />
            <Text>Navbar</Text>
        </HStack>
    )
}

export default NavBar