import ThemeContext from '../../context/ThemeContext'
import './index.css'
import Navbar from '../Navbar'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const aboutContainer = isDarkTheme ? 'about-light' : 'about-dark'

      return (
        <div className={`about-bg ${aboutContainer}`}>
          <Navbar />
          <hr />
          <img src={aboutImg} className="about-img" alt="about Img" />
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
