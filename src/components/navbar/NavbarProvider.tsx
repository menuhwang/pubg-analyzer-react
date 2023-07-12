import React from "react";
import {NavbarProps} from "./Navbar";
import Navbar from "./Navbar";
import {Application} from "../../constants/application";

export const common : NavbarProps = {
    href: "/",
    text: Application.brand
}

export const admin : NavbarProps = {
    href: "/admin",
    text: `${Application.brand} Admin`
}

export type NavbarProviderProps = {
    isAdmin: boolean
}
function NavbarProvider({isAdmin}: NavbarProviderProps) {
    if (isAdmin) {
        return(
            <Navbar href={admin.href} text={admin.text} />
        )
    }
    return (
        <Navbar href={common.href} text={common.text} />
    )
}

export default NavbarProvider;