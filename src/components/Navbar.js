import React from 'react'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import './Navbar.css'
import { IconContext } from 'react-icons'
import perfilImg from '../../src/LogoQuickAnswer.png';


function Navbar() {

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <nav className={'nav-menu active'}>
                    <ul className='nav-menu-items'>
                        <li>
                            <img src={perfilImg} alt="perfil" className='logo' />
                        </li>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar