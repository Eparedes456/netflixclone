import React, { useEffect, useState } from 'react';
import "../componentes/Nav.css";

function Nav() {

    const [show,handleShow] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        return ()=>{
            window.removeEventListener("scroll");
        }
    },[]);

    return (
        <div className= { `nav ${show &&  "nav_black"}`}>
            <img 
                className="nav_logo"
                src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"
                alt="Netflix Logo"
            />

            <img
                className="nav_avatar"
                src="https://occ-0-1822-116.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABTYctxxbe-UkKEdlMxXm4FVGD6DqTHkQ0TQ5CQJ9jbOMnG0CYxYcSICcTUQz8DrB7CpKUGpqJVMtEqksLlvSJx2ac3Ak.png?r=a41"
                alt="Netflix Logo Avatar"
            
            />



        </div>
    )
}

export default Nav
