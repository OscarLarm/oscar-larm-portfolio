import { useState } from 'react'
import githubLogo from './assets/github-mark-white.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="hero">
      <div className='heroLogo'>
          <a href="https://github.com/OscarLarm">
            <img src={githubLogo} alt="Github link" className='logo'/>
          </a>
        </div>
        <h1 className='heroText'>Hello! <br></br> My name is Oscar.</h1>
      </div>
    </>
  )
}

export default App
