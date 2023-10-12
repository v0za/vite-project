import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function Page5() {

  return (
    <div>
        <ParallaxLayer offset={2} speed={1.5} style={{ zIndex: 0, backgroundColor: '#0028ff' }}>
        <div className="chicken-coop">
        <h1>THE CHICKEN DffOOP</h1>
        </div>
        </ParallaxLayer>
  </div>
  )
}

export default Page5
