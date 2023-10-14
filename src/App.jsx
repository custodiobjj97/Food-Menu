
import './App.css'
import ScrollAnimation from './animations/scroll'
import About from './components/About/About'
import Category from './components/Category/Category'
import Home from './components/Home/Home'
import Menu from './components/Menu/Menu'
import Navbar from './components/Navbar/Navbar'

function App() {
  

  return (
    <>
      <Navbar/>
      <ScrollAnimation>
      <Home/>
      </ScrollAnimation>
      <ScrollAnimation>
      <About/>
      </ScrollAnimation>
      <ScrollAnimation>
      <Menu/>
      </ScrollAnimation>
      <ScrollAnimation>
        <Category/>
      </ScrollAnimation>
      
    </>
  )
}

export default App
