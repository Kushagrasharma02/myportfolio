import React from 'react'
import { Link } from 'react-router-dom'
import K from './images/K logo.png'

const Navbar = () => {

    return (
        <header>

             {/* hamburger  */}

            <input type="checkbox" id="navi-toggle" className="checkbox" />
            <label htmlFor="navi-toggle" className="button">
                <span className="icon">&nbsp;</span>
            </label>
            <div className="background">&nbsp;</div>

              {/* nav  */}

            <nav className="nav">
                <div className="logo">
                <img src={K} alt="logo" />
                <p>Web Developer</p>
                </div>
                <ul className="list">
                    <li className="item"> <Link className='link'  to='/'>Home</Link> </li>
                    <li className="item"> <Link className='link' to='/about'>About</Link> </li>
                    <li className="item"> <Link className='link' to='/skill'>Skills</Link> </li>
                    <li className="item"> <Link className='link' to='/contact'>Contact</Link> </li>
                    {/* <li className="item"> <Link className='link' to='/spinner'>Spinner</Link> </li> */}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
