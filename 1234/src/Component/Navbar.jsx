import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Style from './Nav.module.css'

const Navbar = () => {
  return (
   <section id={Style.nav}>
   <article>
   <img src="https://rubixe.com/assets/img/logo/white-rubixe-logo.png" alt="Rubixe Logo"></img>
   <div class={Style.Logo}><Logo/></div>
   <div class={Style.Menu}><Menu/></div>
   </article>
   
   </section>
  )
}

export default Navbar
