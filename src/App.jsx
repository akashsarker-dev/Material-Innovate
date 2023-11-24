import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Services from './components/Services/Services'
import Blog from './components/blog/Blog'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Services></Services>
    <Blog></Blog>
    </>
  )
}

export default App
