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
                    {props.text}
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;