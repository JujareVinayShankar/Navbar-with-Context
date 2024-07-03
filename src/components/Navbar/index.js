import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const textClass = isDarkTheme ? 'light-text' : 'dark-text'
      const navbarContainer = isDarkTheme ? 'dark-navbar' : 'light-navbar'

      const logoImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const lightImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const changeImage = () => {
        toggleTheme()
      }

      const hrVisible = isDarkTheme ? 'not-visible' : ''

      return (
        <div className={`nav-container ${navbarContainer}`}>
          <div className={`navbar-container ${navbarContainer}`}>
            <div className="logo-container">
              <img src={logoImg} alt="website logo" className="logo" />
            </div>
            <navbar>
              <Link to="/">
                <nav className={textClass}>Home</nav>
              </Link>
              <Link to="/about">
                <nav className={textClass}>About</nav>
              </Link>
            </navbar>

            <div className="light-image-container">
              <img
                src={lightImage}
                alt="light img"
                className="light-image"
                onClick={changeImage}
              />
            </div>
          </div>
          <hr className={hrVisible} />
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
