import React from 'react'

const IOSAppStoreButton = (props) => {
  return(
    <a href={props.url} rel="external nofollow" style={{ border: 0 }}>
      <img src="/static/ios-app-store.svg" alt="Download on the App Store" width="186" height="55" />
    </a>
  )
}

IOSAppStoreButton.defaultProps = {
  "url": "https://itunes.apple.com/app/redacted-easily-obscure-parts-of-an-image/id992003008?mt=8&at=1l3vmtU"
}

export default IOSAppStoreButton
