import { Grid, GridItem, Show } from "@chakra-ui/react"
import "./App.css"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { Genre } from "./hooks/useGenres"
import PlatformSelector from "./components/PlatformSelector"
import { Platform } from "./hooks/useGames"

function App() {
  const [genre, setGenre] = useState<Genre | null>(null)
  const [platform, setPlatform] = useState<Platform | null>(null)

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem paddingX={4} area={"aside"}>
          <GenreList
            selectedGenre={genre}
            onSelectGenre={(genre) => setGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <PlatformSelector
          selectedPlatform={platform}
          onSelectPlatform={(platform) => setPlatform(platform)}
        />
        <GameGrid selectedPlatform={platform} selectedGenre={genre} />
      </GridItem>
    </Grid>
  )
}

export default App
