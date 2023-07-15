import React from "react";
import {Link} from "react-router-dom";

export type NavbarProps = {
    href: string,
    text: string
}

function Navbar(props: NavbarProps) {
    return (
        <nav className="navbar bg-secondary">
            <div className="container-fluid">
                <Link className="pa-logo navbar-brand text-warning fw-bold" to={props.href}>
                    <img className="me-1 align-text-bottom" src={process.env.PUBLIC_URL + 'logo192.png'} height={24} alt="Logo"/>
                    {props.text}
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;