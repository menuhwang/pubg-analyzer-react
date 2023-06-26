import React from "react";

export type NavbarProps = {
    href: string,
    text: string
}

function Navbar(props: NavbarProps) {
    return (
        <nav className="navbar bg-secondary">
            <div className="container-fluid">
                <a className="pa-logo navbar-brand text-warning fw-bold" href={props.href}>
                    {props.text}
                </a>
            </div>
        </nav>
    )
}

export default Navbar;