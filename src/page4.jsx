import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function Page4() {

  return (
    <div>
        <ParallaxLayer offset={1.9999} speed={1.5} style={{ zIndex: 0, backgroundColor: '#C666DF' }}>
        <div className="chicken-coop">
        <h1>THE CHICKEN POOP</h1>
        </div>
        </ParallaxLayer>
    </div>
  )
}

export default Page4