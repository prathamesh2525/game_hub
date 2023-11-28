import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch"
import useOnlineStatus from "../hooks/useOnlineStatus"
import SearchInput from "./SearchInput"

interface Props {
  onSearch: (searchText: string) => void
}

const NavBar = ({ onSearch }: Props) => {
  const isOnline = useOnlineStatus()

  return (
    <HStack gap={4} p={"10px"}>
      <Image src={logo} />
      <SearchInput onSearch={onSearch} />
      <Text fontSize={"smaller"}>{isOnline ? "🟢 Online" : "🔴 Offline"}</Text>
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
