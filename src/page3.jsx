import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import title from './assets/page3/title.png'
import images from './assets/page3/images.png'
import temp from './assets/page3/temp.png'

function Page3() {

  return (
    <div>
          <ParallaxLayer offset={1} speed={1.5} style={{ zIndex: 0, backgroundImage: `url(${title})`, backgroundSize: 'cover' }}/>
          <ParallaxLayer offset={1} speed={1.5} style={{ zIndex: 1, backgroundImage: `url(${images})`, backgroundSize: 'contain' }}/>
          <ParallaxLayer offset={1} speed={1.5} style={{ zIndex: 1, backgroundImage: `url(${temp})`, backgroundSize: 'contain' }}/>

    </div>
  )
}

export default Page3

