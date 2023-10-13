import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import title from './assets/page4/title.png'
import temp from './assets/page4/temp.png'

function Page4() {

  return (
    <div>
          <ParallaxLayer offset={1.9999} speed={1.5} style={{ zIndex: 0, backgroundImage: `url(${title})`, backgroundSize: 'cover' }}/>
          <ParallaxLayer offset={1.9999} speed={1.5} style={{ zIndex: 1, backgroundImage: `url(${temp})`, backgroundSize: 'contain' }}/>

    </div>
  )
}

export default Page4

