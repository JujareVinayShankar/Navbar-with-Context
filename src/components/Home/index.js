import ThemeContext from '../../context/ThemeContext'
import './index.css'
import Navbar from '../Navbar'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const homeBgContainer = isDarkTheme ? 'home-light' : 'home-dark'
      return (
        <div className={`home-page-container ${homeBgContainer}`}>
          <Navbar />
          <div className={`home-container ${homeBgContainer}`}>
            <img src={homeImg} className="home-img" alt="home Img" />
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
