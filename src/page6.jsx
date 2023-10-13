import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import title from './assets/page6/title.png'

function Page6() {

  return (
    <div>
          <ParallaxLayer offset={2.9999} speed={1.5} style={{ zIndex: 0, backgroundImage: `url(${title})`, backgroundSize: 'cover' }}/>
    </div>
  )
}

export default Page6


