import React from 'react'
import style from "./navbar2.module.css";
import logo from"./assets/registerlogo.png"
const NavBar2 = () => {
  return (
    <div>
       <nav className={style.navigate}>
          <section className={style.left}>
            <img src={logo} alt="" height="60px" />
            
          </section>

          <section className={style.right}>
            <div>Home</div>
            <div>Our Services <i class="fa-solid fa-angle-down"></i></div>
            <div>Blog</div>
            <div>Contact Us</div>
            <div>About Us</div>
            <div><i class="fa-solid fa-magnifying-glass"></i></div>
            <div id={style.ex}> Talk An Expert</div>
               
          </section>
       </nav>
    </div>
  )
}

export default NavBar2
