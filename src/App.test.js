import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('renders 2 inputs', () => {
    render(<App />);
    const romanInputLabel = screen.getByLabelText(/Roman:/i);
    expect(romanInputLabel).toBeInTheDocument();
    const numeralInputLabel = screen.getByLabelText(/Number:/i);
    expect(numeralInputLabel).toBeInTheDocument();
  });
  xit('converts 2014 to MMXIV', async () => {
    render(<App />);
    const numeralInput = screen.getByTestId('numeral');
    const romanInput = screen.getByTestId('roman');
    // const numeralInput = screen.getByRole('spinbutton', { name: 'Number:' });
    // const romanInput = screen.getByRole('textbox', { name: 'Roman:' });
    console.log(numeralInput);
    await userEvent.type(numeralInput, '2014');
    console.log(romanInput);
    // expect(romanInput).toHaveValue('MMXIV');
    expect(screen.getByDisplayValue('MMXIV')).toBeInTheDocument();
  });
});
