import React, { useState } from 'react';
import {FaBars, FaPager, FaHome, FaGrinStars} from "react-icons/fa";




import { NavLink } from 'react-router-dom';



const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem = [
        {
            path: "/home",
            name: "Home",
            icon:<FaHome/>
        },

        {
            path: "/about",
            name: "About",
            icon:<FaPager/>
        },

        {
            path: "/login",
            name: "Login",
            icon:<FaGrinStars/>
        },

    ]

    return (

        <div className="containerSideBar">
            <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
                <div className="top_section">
                    {/*<img src="../basket.jpeg" alt="discGolfLogo" style={{display: isOpen ? "block" : "none"}} className="logoLogo">*/}


                    {/*</img>*/}
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }

            </div>
            {children}
        </div>

    );
};

export default Sidebar;