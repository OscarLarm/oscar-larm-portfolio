import githubLogo from './assets/github-mark-white.svg'
import './App.css'

function App() {

  return (
    <>
      <div className="hero">
        <div className='hero-content'>
          <div className="hero-left">
            <div className="hero-text">
              <h1 className='hero-title'><span className='accent'>Oscar Larm</span></h1>
              <hr className='seperator'></hr>
              <p className="hero-subtitle">Studying <span className='accent text-software-engineering'><br></br>Software Engineering</span><br></br>BTH, Sweden</p>
              <div className="hero-para text-secondary">
                <p className=''>(Blekinge Institute of Technology)</p>
              </div>
            </div>
            <div className='icon'>
              <a href="https://github.com/OscarLarm"><img src={githubLogo} alt="https://github.com/OscarLarm" /></a>
            </div>
          </div>
          <div className="hero-right">
            <img className="tempImg" src="https://www.strasys.uk/wp-content/uploads/2022/02/Depositphotos_484354208_S.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className="testSection">

      </div>
    </>
  )
}

export default App
