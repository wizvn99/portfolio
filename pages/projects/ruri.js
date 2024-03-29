import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  AspectRatio
} from '@chakra-ui/react'
import { DownloadIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="Hope Of Ruri">
      <Container maxWidth="100%">
        <Title>
          Hope Of Ruri
          <Badge ml="2">2020</Badge>
        </Title>
        <P>A 2D Metroidvania game built by Unity.</P>
        <List mx={2} my={8}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Unity, C#</span>
          </ListItem>
          <ListItem>
            <Meta>Download</Meta>
            <Link
              target="_blank"
              href="https://drive.google.com/file/d/1Sh6tNGC13eTxj5AxulMLdrugV-JBgkR_/view?usp=sharing"
            >
              Download APK file &nbsp;
              <DownloadIcon />
            </Link>
          </ListItem>
          <Meta>Trailer</Meta>
          <AspectRatio>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/hxV9h-iOP9w"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </AspectRatio>
        </List>
        <ProjectImage src="/images/projects/ruri_01.png" alt="Ruri" />
        <ProjectImage src="/images/projects/ruri_02.png" alt="Ruri" />
        <ProjectImage src="/images/projects/ruri_03.png" alt="Ruri" />
      </Container>
    </Layout>
  )
}

export default Project
