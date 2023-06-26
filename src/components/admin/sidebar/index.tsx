import React from "react";

type SidebarItem = {
    name: string,
    href: string,
    text: string
}

export const items: SidebarItem[] = [
    {
        name: 'match',
        href: '/admin/matches',
        text: '매치 관리'
    },
    {
        name: 'pubg-api',
        href: '/admin/fetch-api',
        text: 'PUBG API 호출'
    },
    {
        name: 'board',
        href: '#',
        text: '공지사항'
    },
]

const navLink = items.map(item => <a key={'sidebar-item-' + item.name} className="nav-link" href={item.href}>{item.text}</a>);

function Sidebar() {
    return (
        <nav className="nav flex-column">
            {navLink}
        </nav>
    )
}

export default Sidebar;