import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { LinkIcon } from '@chakra-ui/icons'

const Project = () => {
  return (
    <Layout title="CookIt">
      <Container maxWidth="100%">
        <Title>
          CookIt
          <Badge ml="2">2021</Badge>
        </Title>
        <P>
          A project which helps small and medium restaurants, coffee shops...
          manage their business process such as: manage items, ingredients,
          menus, customers, promotion campaign, branches, etc; and cashier-cheft
          process.
        </P>
        <List mx={2} my={8}>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Website</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>ReactJS, Typescript, NodeJS</span>
          </ListItem>
        </List>
        <ProjectImage src="/images/projects/cookit_01.png" alt="Cookit" />
        <ProjectImage src="/images/projects/cookit_02.png" alt="Cookit" />
        <ProjectImage src="/images/projects/cookit_03.png" alt="Cookit" />
        <ProjectImage src="/images/projects/cookit_04.png" alt="Cookit" />
        <ProjectImage src="/images/projects/cookit_05.png" alt="Cookit" />
      </Container>
    </Layout>
  )
}

export default Project
