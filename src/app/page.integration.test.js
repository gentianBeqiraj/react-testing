import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Page from './Page';

test('renders About page link with correct navigation', () => {
    render(
        <MemoryRouter>
            <Page />
        </MemoryRouter>
    );
    const link = screen.getByRole('link', { name: /About/i });
    expect(link).toHaveAttribute('href', '/about');
});