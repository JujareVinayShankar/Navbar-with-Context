import ThemeContext from '../../context/ThemeContext'
import './index.css'
import Navbar from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notFoundBg = isDarkTheme ? 'not-found-dark' : 'not-found-light'
      return (
        <div className="not">
          <Navbar />
          <div className={notFoundBg}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-img"
            />
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
