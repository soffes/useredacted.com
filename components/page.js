import React, {Component} from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Section from '../components/section'

class Page extends Component {
  render () {
    const title = this.props.title === undefined ? "Redacted" : `Redacted — ${this.props.title}`
    return <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/619254/777982/css/fonts.css" />
        <link rel="stylesheet" type="text/css" href="/base.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Section>
        {this.props.children}
      </Section>
      <Footer />
    </div>
  }
}

export default Page
