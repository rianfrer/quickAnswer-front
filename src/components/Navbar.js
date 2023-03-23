import React from 'react'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import '../styles/Navbar.css'
import { IconContext } from 'react-icons'
import perfilImg from '../../src/LogoQuickAnswer.png';
import Cabecalho from './Cabecalho'


function Navbar() {

    return (
        <>
            <Cabecalho/>
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