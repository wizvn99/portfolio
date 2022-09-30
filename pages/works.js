import { Container, Box, Heading, SimpleGrid, Boxider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbCookIt from '../public/images/projects/cookit_thumb.png'
import thumbRuri from '../public/images/projects/ruri_thumb.png'
const Works = () => {
  return (
    <Container maxWidth="100%">
      <Heading as="h3" fontSize={20} mb={4}>
        Work Experience
      </Heading>

      <SimpleGrid columns={[1, 1, 1]} gap={6}>
        <Section>
          <WorkGridItem
            id="kms-bill-avenger"
            title="KMS"
            thumbnail={thumbCookIt}
          >
            CookIt is a system that allows you to manage a whole F&#38;B system
            or a single coffee shop, restaurant, etc.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
