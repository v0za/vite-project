import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import title from './assets/page5/title.png'
import temp from './assets/page5/temp.png'

function Page5() {

  return (
    <div>
          <ParallaxLayer offset={2} speed={1.5} style={{ zIndex: 0, backgroundImage: `url(${title})`, backgroundSize: 'cover' }}/>
          <ParallaxLayer offset={2} speed={1.5} style={{ zIndex: 1, backgroundImage: `url(${temp})`, backgroundSize: 'contain' }}/>

    </div>
  )
}

export default Page5


