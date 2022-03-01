import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbCookIt from '../public/images/works/cookit_thumb.png'
import thumbRuri from '../public/images/works/ruri_thumb.png'
const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <Section>
          <WorkGridItem id="cookit" title="COOKIT" thumbnail={thumbCookIt}>
            CookIt is a system that allows you to manage a whole F&#38;B system
            or a single coffee shop, restaurant, etc.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="ruri" title="Hope of Ruri" thumbnail={thumbRuri}>
            Hope of Ruri is a 2D Metroidvania game for Android devices built by
            Unity.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
