import { render, screen } from '@testing-library/react';
import Data from './Data';

test('render WELCOME', () => {
    render(<Data />)

    const headingElement =screen.getByText('WELCOME');
    expect(headingElement).toBeInDocument();
    
})