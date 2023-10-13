import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import title from './assets/page2/title.png'
import images from './assets/page2/images.png'
import temp from './assets/page2/temp.png'

function Page2() {

  return (
    <div>
          <ParallaxLayer offset={0.9999} speed={1.5} style={{ zIndex: 0, backgroundImage: `url(${title})`, backgroundSize: 'cover' }}/>
          <ParallaxLayer offset={0.9999} speed={1.5} style={{ zIndex: 1, backgroundImage: `url(${images})`, backgroundSize: 'contain' }}/>
          <ParallaxLayer offset={0.9999} speed={1.5} style={{ zIndex: 1, backgroundImage: `url(${temp})`, backgroundSize: 'contain' }}/>

    </div>
  )
}

export default Page2
