import React from 'react';
import { render, screen } from '@testing-library/react';
import {items} from "./index";
import Sidebar from "./index";

test('renders admin sidebar component', () => {
    render(<Sidebar />);
    items.forEach(item => {
        expect(screen.getByText(item.text)).toBeInTheDocument();
    })
});
