import React from 'react'

const MacAppStoreButton = (props) => {
  return(
    <a href={props.url} rel="external nofollow" style={{ border: 0, marginRight: "1em" }}>
      <img src="/mac-app-store.svg" alt="Download on the App Store" width="227" height="55" />
    </a>
  )
}

MacAppStoreButton.defaultProps = {
  "url": "https://itunes.apple.com/app/redacted/id984968384?mt=12&uo=6&at=1l3vmtU&ct="
}

export default MacAppStoreButton
