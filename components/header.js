import React from 'react'
import styled from 'styled-components'
import Title from '../components/title'
import AppIcon from '../components/app_icon'

const HeaderContainer = styled.header`
  display: block;
  max-width: 640px;
  margin: 70px auto 24px;
`

const Header = (props) => {
  return(
    <HeaderContainer>
      <AppIcon />
      <Title>
        <a href="/" rel="home">Redacted</a>
      </Title>
    </HeaderContainer>
  )
}

export default Header
