import styled from 'styled-components'

const Container = styled.a`
  display: block;
  position: relative;
  left: -8px;
`

const AppIcon = () => <Container href="/" rel="home">
  <img src="/icon.svg" alt="Redacted" />
</Container>

export default AppIcon
