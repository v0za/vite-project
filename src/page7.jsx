import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function Page7() {

  return (
    <div>
        <ParallaxLayer offset={3} speed={1.5} style={{ zIndex: 0, backgroundColor: '#0028ff' }}>
        <div className="chicken-coop">
        <h1>TEMP</h1>
        </div>
        </ParallaxLayer>
  </div>
  )
}

export default Page7
