import NextLink from 'next/link'
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  Button,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Layout>
      <Container maxWidth="100%">
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Wiz - Truong Vy
            </Heading>
            <p>Website / Mobile Application / Game</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/profile-image.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            My name is Duong Nguyen Truong Vy, you can call me Wiz. I am a
            software engineer from VietNam. I love coding, creating new apps,
            websites, games, etc. I also love football and reading fiction.
            Becoming a developer, I wish I can create tech products like a
            wizard creating magic stuff!.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/projects/">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1999</BioYear>
            Born in Cam Ranh City, Khanh Hoa Province, VietNam
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Internship at Gameloft Ho Chi Minh city, Vietnam
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Completed the Bachelor&apos; Degree of Software Engineer -
            University of Sicence (HCMVNU)
          </BioSection>
          <BioSection>
            <BioYear>2021 &#8594; Now</BioYear>
            Software Engineer at KMS Technology VietNam
          </BioSection>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
