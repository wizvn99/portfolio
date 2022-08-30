import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { ProjectGridItem } from '../components/grid-item'

import thumbCookIt from '../public/images/projects/cookit_thumb.png'
import thumbRuri from '../public/images/projects/ruri_thumb.png'
const Projects = () => {
  return (
    <Container maxWidth="100%">
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>
      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <Section>
          <ProjectGridItem id="cookit" title="COOKIT" thumbnail={thumbCookIt}>
            CookIt is a system that allows you to manage a whole F&#38;B system
            or a single coffee shop, restaurant, etc.
          </ProjectGridItem>
        </Section>
        <Section>
          <ProjectGridItem id="ruri" title="Hope of Ruri" thumbnail={thumbRuri}>
            Hope of Ruri is a 2D Metroidvania game for Android devices built by
            Unity.
          </ProjectGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Projects
