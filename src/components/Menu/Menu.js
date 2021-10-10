import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

export default function Menu() {
    return (
        <div className="navbar">
            <div className="navbar-profile">
                <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/profile-design-template-4c23db68ba79c4186fbd258aa06f48b3_screen.jpg?ts=1581063859"/>
                <h1>Thiago</h1>
            </div>
            <div className='navbar-options'>
                <ul>
                    <Link to='/home'><li>Jogos</li></Link>
                    <li>Gênero</li>
                    <Link to='/admin'><li>Administrador</li></Link>
                </ul>
            </div>
        </div>
    )
}
