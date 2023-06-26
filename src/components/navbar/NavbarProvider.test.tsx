import React from "react";
import {render, screen} from "@testing-library/react";
import {common, admin} from "./NavbarProvider";
import NavbarProvider from "./NavbarProvider";

describe('renders navbar from NavbarProvider', () => {
    it('common navbar', () => {
        render(<NavbarProvider isAdmin={false} />);
        const logo= screen.getByText(common.text);
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute('href', common.href);
    });
    it('admin navbar', () => {
        render(<NavbarProvider isAdmin={true} />);
        const logo= screen.getByText(admin.text);
        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute('href', admin.href);
    })
})
