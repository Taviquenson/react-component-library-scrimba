import { useState } from 'react'
import checkCircle from './assets/check-circle.png'
import myPicture from '/picture-of-me.png'
import Badge from '/components/Badge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Library Components</h1>
      <section class="badges">
      <h2 class="badges-section-title">Badges</h2>
      <div class="badges-table">
        <div class="badges-shape-square">
          <h3>Square</h3>
          <div class="badges-container">
            <Badge color="gray">Badge</Badge>
            <Badge color="red">Badge</Badge>
            <Badge color="yellow">Badge</Badge>
            <Badge color="green">Badge</Badge>
            <Badge color="blue">Badge</Badge>
            <Badge color="indigo">Badge</Badge>
            <Badge color="purple">Badge</Badge>
            <Badge color="pink">Badge</Badge>
          </div>
        </div>
        <div class="badges-shape-pill">
          <h3>Pill</h3>
          <div class="badges-container">
            <Badge color="gray" shape="pill">Badge</Badge>
            <Badge color="red" shape="pill">Badge</Badge>
            <Badge color="yellow" shape="pill">Badge</Badge>
            <Badge color="green" shape="pill">Badge</Badge>
            <Badge color="blue" shape="pill">Badge</Badge>
            <Badge color="indigo" shape="pill">Badge</Badge>
            <Badge color="purple" shape="pill">Badge</Badge>
            <Badge color="pink" shape="pill">Badge</Badge>
          </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default App
