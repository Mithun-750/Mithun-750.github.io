import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

export default function Navbar() {

    const [expand, setExpand] = useState(false)

    const NavToggle = () => {
        setExpand(!expand)
    }

    return (
        <>
            <nav>
                <div className="mobview">
                    <h1>Mithun</h1>
                    <span id='hamburger' className="material-symbols-outlined" onClick={NavToggle} >
                        menu
                    </span>
                </div>
                <ul id='nav-right' className={expand ? `expand` : ``}>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/projects'}>Projects</Link></li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                </ul>
            </nav>
        </>
    )
}
