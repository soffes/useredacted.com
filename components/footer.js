import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  width: 640px;
  margin: 0 auto;
  margin: 70px auto;
  color: #89929a;

  @media all and (max-width: 660px) {
    width: 300px;
  }

  p {
    font-size: 17px;
  }

  p:first-child {
    a {
      margin-right: 1.25em;
    }

    a:last-child {
      margin-right: 0;
    }
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
      <p>
        <a href="/support">Support</a>
        <a href="/privacy">Privacy</a>
      </p>
      <p>© 2015–2021 <a href="https://soff.es" rel="external nofollow">Sam Soffes</a></p>
    </FooterContainer>
  )
}

export default Footer
