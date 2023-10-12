import './App.css'

import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import {useSpring, animated} from '@react-spring/web'
import Page1 from './page1'
import Page2 from './page2'
import Page3 from './page3'
import Page4 from './page4'
import Page5 from './page5'
import Page6 from './page6'
import Page7 from './page7'

function App() {

  return (
    <div>
      <div>
      <Parallax pages={4} style={{ top: '0', left: '0' }}>
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
      </Parallax>
      </div>
    </div>
  )
}

export default App