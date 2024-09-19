import React from "react";
import { render, screen } from '@testing-library/react';
import Page from './Page';

test('renders Home heading and About link', () => {
    render(<Page />);
    const heading = screen.getByText(/Home/i);
    const link = screen.getByRole('link', { name: /About/i });
    const memberFirstName = screen.getByText(/First Name/i);
    expect(heading).toBeInTheDocument();
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/about');
    expect(memberFirstName).toBeInTheDocument();
});