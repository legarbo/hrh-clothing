import { css } from 'glamor'
import React from 'react'
import { ReactSVG } from 'react-svg'

const styles = css({
  ' svg': {
    height: 100,
    width: 100,
  },
})

function Logo() {
  return (
    <div>
      <ReactSVG src="hrh_logo.svg" {...styles} />
    </div>
  )
}
 export default Logo
