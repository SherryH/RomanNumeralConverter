import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders 2 inputs', () => {
    render(<App />);
    const romanInput = screen.getByLabelText(/Roman:/i);
    expect(romanInput).toBeInTheDocument();
    const numeralInput = screen.getByLabelText(/Number:/i);
    expect(numeralInput).toBeInTheDocument();
  });
});
