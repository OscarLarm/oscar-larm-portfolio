import { useState } from 'react'
import githubLogo from './assets/github-mark-white.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Oscar Larm</h1>
      <div>
        <a href="https://github.com/OscarLarm">
          <img src={githubLogo} alt="Github link" className='logo' />
        </a>
      </div>
    </>
  )
}

export default App
