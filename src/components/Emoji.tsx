import { Image, ImageProps } from "@chakra-ui/react"
import bullseye from "../assets/focus.png"
import like from "../assets/like.png"
import meh from "../assets/meh.png"

interface Props {
  rating: number
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null

  const emojis: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: like, alt: "meh", boxSize: "25px" },
    5: { src: bullseye, alt: "meh", boxSize: "35px" },
  }

  return <Image {...emojis[rating]} />
}

export default Emoji
