
import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import App from './App';

test('check text', () => {
    render(<App />);
    expect(screen.getByText('Hello React')).toBeInTheDocument();
});
