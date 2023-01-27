import React from 'react'
import { Link } from 'react-router-dom'
import Style from './Nav.module.css'

const Menu = () => {
  return (
   <ol id={Style.MenuBlock}>
     <li><Link to="/home">Home</Link></li>
     <li><Link to="/service">Services</Link></li>
     <li><Link to="/product">Products</Link></li>
     <li><Link to="/ai">AiInternship</Link></li>
     <li><Link to="/career">Career</Link></li>
     <li><Link to="/blog">Blog</Link></li>
     <li><Link to="/">About</Link></li>
     <li><Link to="/cont">Contectus</Link></li>
   </ol>
  )
}

export default Menu
