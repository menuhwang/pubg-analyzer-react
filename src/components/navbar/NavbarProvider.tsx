import React from "react";
import {NavbarProps} from "./Navbar";
import Navbar from "./Navbar";

export const common : NavbarProps = {
    href: "/",
    text: "PUBG Analyzer"
}

export const admin : NavbarProps = {
    href: "/admin",
    text: "PUBG Analyzer Admin"
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