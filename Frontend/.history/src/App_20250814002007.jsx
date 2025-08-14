import { useState } from 'react'

import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Home/>
    </div>
  )
}

export default App
