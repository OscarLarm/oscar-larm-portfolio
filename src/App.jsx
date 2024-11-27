import { useState } from 'react'
import githubLogo from './assets/github-mark-white.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="hero">
        <div className='hero-content'>
        <div className="hero-left">
          <img className="tempImg" src="https://www.strasys.uk/wp-content/uploads/2022/02/Depositphotos_484354208_S.jpg" alt="" />
        </div>
        <div className="hero-right">
          <div className="hero-text">
          <h1 className='hero-title'><span className='accent'>Oscar Larm</span></h1>
          <hr className='seperator'></hr>
            <p className="hero-subtitle">I am studying <span className='accent'><br></br>Software Engineering</span> at BTH</p>
            <div className="hero-para">
              <p><i>(Blekinge Institute of Technology)</i></p>
            </div>
            </div>
            <div className='icon'>
              <a href="https://github.com/OscarLarm"><img src={githubLogo} alt="https://github.com/OscarLarm" /></a>
            </div>
          </div>
        </div>
        </div>

        <div className="testSection">

        </div>
          </>
  )
}

export default App
