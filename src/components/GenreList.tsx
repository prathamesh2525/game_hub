import { HStack, Image, List, ListItem, SimpleGrid, Text } from '@chakra-ui/react'
import useGenres from '../hooks/useGenres'
import getCroppedImageUrl from '../services/img-url'
import GenreListSkeleton from './GenreListSkeleton'

const GenreList = () => {

    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const { data, isLoading, error } = useGenres()

    if (error) return null

    if (isLoading) return <SimpleGrid columns={1} spacing={'2px'}>
        {skeletons.map(skeleton => <GenreListSkeleton key={skeleton} />)}
    </SimpleGrid>

    return (
        <List>
            {data.map(genre => <ListItem key={genre.id} paddingY={2}>
                <HStack>
                    <Image boxSize={'32px'} borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                    <Text fontSize='lg'>{genre.name}</Text>
                </HStack>
            </ListItem>)}
        </List>
    )
}

export default GenreList