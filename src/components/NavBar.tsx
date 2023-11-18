import { HStack, Image, Text } from "@chakra-ui/react"
import logo from '../assets/logo.webp'
import ColorModeSwitch from "./ColorModeSwitch"
import useOnlineStatus from "../hooks/useOnlineStatus"

const NavBar = () => {

    const isOnline = useOnlineStatus()

    return (
        <HStack justifyContent={'space-between'} p={'10px'}>
            <Image src={logo} />
            <HStack gap={12}>
                <Text>{isOnline ? "🟢 Online" : "🔴 Offline"}</Text>
                <ColorModeSwitch />
            </HStack>
        </HStack>
    )
}

export default NavBar