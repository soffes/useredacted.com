import React from 'react'

const AppStoreButton = (props) => {
  return(
    <a href={props.url} rel="external nofollow">
      <img src="/static/appstore.svg" alt="Download on the App Store" />
    </a>
  )
}

AppStoreButton.defaultProps = {
  "url": "https://itunes.apple.com/app/redacted/id984968384?mt=12&uo=6&at=1l3vmtU&ct="
}

export default AppStoreButton
