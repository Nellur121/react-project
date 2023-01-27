import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './Component/About'
import AiInternship from './Component/AiIntrenship'
import Blog from './Component/Blog'
import Contectus from './Component/Contectus'
import Career from './Component/Career'
import Home from './Component/Home'
import Products from './Component/Products'
import Services from './Component/Services'
import Logo from './Component/Logo'
import Navbar from './Component/Navbar'
import Menu from './Component/Menu'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      {/* <Logo/>
      <Menu/> */}
      <Navbar/>
      <Routes>
        <Route path="/"element={<About/>}/>
        <Route path="/ai"element={<AiInternship/>}/>
        <Route path="/blog"element={<Blog/>}/>
        <Route path='/career'element={<Career/>}/>
        <Route path='/cont'element={<Contectus/>}/>
        <Route path='/home'element={<Home/>}/>
        <Route path='/product'element={<Products/>}/>
        <Route path='/service'element={<Services/>}/>

        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App