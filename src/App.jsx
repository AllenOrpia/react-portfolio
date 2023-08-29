import { useState, useEffect } from 'react'
import Header from './Header'
import Home from './Home'
import Projects from './Projects'
import MyImage from './MyImage'
import Links from './Links'
import Contact from './Contact'
import { dark } from '@mui/material/styles/createPalette'
import Technologies from './Technologis'
import About from './About'

function App() {

  const getMode = () => {
    return JSON.parse(localStorage.getItem('darkMode') || false)
  }

  const [darkMode, setDarkMode] = useState(getMode())

  // useEffect = (() => {
  //   setDarkMode(localStorage.getItem('darkMode')?localStorage.getItem('darkMode'))
  // }, [])

  const handleTheme = () => {
    setDarkMode(!darkMode)
    localStorage.setItem('darkMode', JSON.stringify(!darkMode))
    }
  
  return (
    <main className={darkMode ? 'dark' : ''} >
      <Header darkMode={darkMode} handleTheme={handleTheme}/>
      
      <section className=' min-h-screen md:px-20 lg:px-40 dark:bg-gray-800 dark:text-white '>
          <Home />
          <MyImage />
          <Links />
      </section>
      <section className='md:px-20 lg:px-40 dark:bg-gray-800 dark:text-white ' id='About'>
          <About />
      </section>
      <section className='md:px-20 lg:px-40 dark:bg-gray-800 dark:text-white ' id='Projects'>
          <Projects />
      </section>
      <section className='md:px-20 lg:px-40 dark:bg-gray-800 dark:text-white ' id='Technologies'>
          <Technologies />
      </section>
      <section className='md:px-20 lg:px-40 dark:bg-gray-800 dark:text-white ' id='Contact'>
          <Contact />
      </section>
      
    </main>
    
  
  )
}

export default App
