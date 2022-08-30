import { Container, Badge } from '@chakra-ui/react'
import { Title } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => {
  return (
    <Layout title="CookIt">
      <Container maxWidth="100%">
        <Title>
          CookIt
          <Badge ml="2">2021</Badge>
        </Title>
        <P>Update soon!!!</P>
      </Container>
    </Layout>
  )
}

export default Project
