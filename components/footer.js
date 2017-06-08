import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  max-width: 640px;
  margin: 0 auto;
  margin: 70px auto;
  color: #89929a;

  p {
    font-size: 17px;
  }

  a {
    color: #89929a;

    &:hover {
      color: #207aee;
    }
  }
`

const Footer = (props) => {
  return(
    <FooterContainer>
      <p><a href="/support" style={{ "margin-right": "1.25em" }}>Support</a> <a href="/press">Press</a></p>
      <p>© 2017 <a href="https://nothingmagical.com" rel="external nofollow">Nothing Magical, Inc.</a></p>
    </FooterContainer>
  )
}

export default Footer
