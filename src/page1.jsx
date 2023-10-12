import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useSpring, animated } from '@react-spring/web'

import boy from './assets/boy.png'
import bgm from './assets/bgm.png'
import arrow from './assets/arrow.png'

function Page1() {
  const arrowSpring = useSpring({
    from: { y: 0 },
    to: async (next) => {
      while (true) {
        await next({ y: 20 })
        await next({ y: 0 })
      }
    },
    config: { duration: 1000 },
  })

  return (
    <div>
        <ParallaxLayer speed={1.5} offset = {0} style={{ zIndex: 2, backgroundImage: `url(${boy})`, backgroundSize: 'cover' }} />
        <ParallaxLayer speed={1.4} offset = {0} style={{ zIndex: 1, backgroundImage: `url(${bgm})`, backgroundSize: 'cover' }} />

        <ParallaxLayer speed={1.4} offset = {0} style={{ zIndex: 2 }}>
          <animated.div style={{ position: 'absolute', bottom: '1%', left: '50%', transform: arrowSpring.y.to((y) => `translateY(${y}px) translateX(-50%)`) }}>
            <img src={arrow} alt="arrow" />
          </animated.div>
        </ParallaxLayer>
    </div>
  )
}

export default Page1
