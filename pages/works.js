import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'

import thumbCookIt from '../public/images/projects/cookit_thumb.png'
import thumbRuri from '../public/images/projects/ruri_thumb.png'
const Works = () => {
  return (
    <Container maxWidth="100%">
      <Heading as="h3" fontSize={20} mb={4}>
        Work Experience
      </Heading>
    </Container>
  )
}

export default Works
