import Page from '../components/page'
import Subheading from '../components/subheading'
import IOSAppStoreButton from '../components/ios_app_store_button'

export default () => (
  <Page title="iOS">
    <Subheading style={{ "marginBottom": "20px" }}>Easily obscure parts of an image</Subheading>
    <p>Hide sensitive details in an image by simply clicking and dragging. Copy and paste in and out of Redacted for super quick sharing. Pick from three different redaction styles or mix and match.</p>
    <p>Quickly import an image into Redacted or simply paste and image to get going. When you're done, share it to Facebook, Twitter, and more with iOS's share menu or simply copy the image out of Redacted.</p>
    <IOSAppStoreButton />
  </Page>
)
