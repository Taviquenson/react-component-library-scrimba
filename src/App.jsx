import { useState } from 'react'
import checkCircle from './assets/check-circle.png'
import myPicture from '/picture-of-me.png'
import Badge from '/components/Badge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Start!</h1>
      <Badge color="red" shape="pill">My first badge</Badge>
    </>
  )
}

export default App
