import styled from 'styled-components'
import Page from '../components/page'
import SubHeading from '../components/subheading'
import SubSubHeading from '../components/subsubheading'
import Aside from '../components/aside'

const Question = styled.div`
  margin-bottom: 2em;
`

export default () => (
  <Page>
    <SubHeading>Support</SubHeading>

    <Question>
      <SubSubHeading>What kind of images does Redacted support?</SubSubHeading>
      <p>Redacted can work with any image you can open in Preview.</p>
    </Question>

    <Question>
      <SubSubHeading>Does Redacted support PDFs?</SubSubHeading>
      <p>Currently, no. Dealing with PDFs is extremely complicated. I'm holding off on PDF support until I can ensure I remove all of the redacted area from the document. This is something I definitely want to add in the future.</p>
    </Question>

    <Question>
      <SubSubHeading>Will you support an older version of macOS than Yosemite?</SubSubHeading>
      <p>Sorry, no. Redacted is built on top of the latest Apple technologies. You can upgrade to Yosemite for free in the App Store.</p>
    </Question>

    <Question>
      <SubSubHeading>Is the blur reversible?</SubSubHeading>
      <p>Technically, yes. This is the nature of blur algorithms. (You can read more about this <a href="https://dheera.net/projects/blur" rel="external nofollow">here</a>.) I have plans to make it much harder to reverse by adding random noise below the blur. That will be coming in a future version. If you want to redacted something very sensitive, use the black bar mode.</p>
    </Question>

    <Question>
      <SubSubHeading>Are you making an iOS version?</SubSubHeading>
      <p>Yes! It's mostly complete and should be available in the next several weeks!</p>
    </Question>

    <Question>
      <SubSubHeading>Will you make a Windows or Android version?</SubSubHeading>
      <p>Sorry, no. Redacted it built on top of Apple's technologies. Rewriting it for Windows or Android would take a ton of time that I'd rather spend working on new ideas.</p>
    </Question>

    <Question>
      <SubSubHeading>Who makes Redacted?</SubSubHeading>
      <p>Redacted was designed and developed by <a href="http://nothingmagical.com" rel="external nofollow">Nothing Magical Inc</a>.</p>
    </Question>

    <Question>
      <SubSubHeading>My question wasn't answered. Help!</SubSubHeading>
      <p>Just <a href="mailto:support@nothingmagical.com?subject=Redacted for Mac Support">email me</a> and I'll get you taken care of!</p>
    </Question>

    <Aside>
      Special thanks to <a href="https://twitter.com/MattieuGA">Mattieu Gamache-Asselin</a> for French localization and <a href="https://twitter.com/hiddevdploeg">Hidde van der Ploeg</a> for Dutch localization.
    </Aside>
  </Page>
)
