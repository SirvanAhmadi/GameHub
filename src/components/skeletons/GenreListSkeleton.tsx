
import {  Spinner, Text, VStack } from "@chakra-ui/react"



const GenreListSkeleton = () => {

  return (
    <VStack colorPalette="teal">
      <Spinner color="var(--my-pink)" />
      <Text color="blue.200">Loading...</Text>
    </VStack>
  )
}

export default GenreListSkeleton