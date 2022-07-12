import React from "react"
import { MenuItems } from "./MenuItems";
import './Navbar.css'
import pfp from "../../imgs/Pfp.png"
import Icon from "./Icon"
import { Link } from "react-router-dom"
class NavBar extends React.Component { 
    state = { clicked: false } 

    handleClick = () => { 
        this.setState( {clicked: !this.state.clicked} )
    }

    render() { 
        return ( 
            <nav className="NavBarItems">
                <h1 className="navbar-logo"><img className="pfp-img" alt="Pfp" src={pfp}></img></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return ( 
                            <li key={index}>
                                <Link className={item.cName} to= {item.url}>
                                <Icon className="icon" name={item.title}/> 
                                    {item.title}
                                </Link>
                            </li>
                            )
                    })}
                </ul>
            </nav>
        ); 
    } 
}


export default NavBar