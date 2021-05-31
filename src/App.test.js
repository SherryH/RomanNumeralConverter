import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('renders 2 inputs', () => {
    render(<App />);
    const romanInputLabel = screen.getByLabelText(/Roman:/i);
    const numeralInputLabel = screen.getByLabelText(/Number:/i);
    expect(romanInputLabel).toBeInTheDocument();
    expect(numeralInputLabel).toBeInTheDocument();
  });
  it('converts 2014 to MMXIV', () => {
    render(<App />);
    const numeralInput = screen.getByTestId('numeral'); // role: spinbuttoon
    // spinbutton role can only be triggered using fireEvent
    fireEvent.input(numeralInput, {
      target: { value: 2014 },
    });
    expect(screen.getByDisplayValue('2014')).toBeInTheDocument();
    expect(screen.getByDisplayValue('MMXIV')).toBeInTheDocument();
  });
  it('converts MDCCLXXVI to 1776', () => {
    render(<App />);
    const romanInput = screen.getByTestId('roman'); // role: textbox
    fireEvent.input(romanInput, {
      target: { value: 'MDCCLXXVI' },
    });
    expect(screen.getByDisplayValue('1776')).toBeInTheDocument();
    expect(screen.getByDisplayValue('MDCCLXXVI')).toBeInTheDocument();
  });
  it('shows nothing in romanInput when entering 4000', () => {
    render(<App />);
    const numeralInput = screen.getByTestId('numeral'); // role: spinbuttoon

    fireEvent.input(numeralInput, {
      target: { value: '4000' },
    });
    expect(screen.getByDisplayValue('4000')).toBeInTheDocument();
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });

  it('shows nothing in romanInput when entering negative number such as -9', () => {
    render(<App />);
    const numeralInput = screen.getByTestId('numeral'); // role: spinbuttoon

    fireEvent.input(numeralInput, {
      target: { value: '-9' },
    });
    expect(screen.getByDisplayValue('-9')).toBeInTheDocument();
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });
  xit('shows the last valid number (5) in romanInput when entering decimals (4.5)', () => {
    // note: the fireEvent simulation is different from the reality
    // in the test, only the first valid number is captured.
    // Hence test commented out for now.
    render(<App />);
    const numeralInput = screen.getByTestId('numeral'); // role: spinbuttoon
    fireEvent.input(numeralInput, {
      target: { value: '4.5' },
    });
    expect(screen.getByDisplayValue('4.5')).toBeInTheDocument();
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });
  it('auto make roman inputs as uppercase and convert  mIx to 1009', () => {
    render(<App />);
    const romanInput = screen.getByTestId('roman'); // role: textbox

    fireEvent.input(romanInput, {
      target: { value: 'mIx' },
    });
    expect(screen.getByDisplayValue('1009')).toBeInTheDocument();
    expect(screen.getByDisplayValue('MIX')).toBeInTheDocument();
  });
  it('auto ignores invalid characters in roman input', () => {
    render(<App />);
    const romanInput = screen.getByTestId('roman'); // role: textbox

    fireEvent.input(romanInput, {
      target: { value: 'a1' },
    });
    expect(screen.getByDisplayValue('1')).toBeInTheDocument();
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
  });
  it('auto converts the roman inputs to sensible order', () => {
    render(<App />);
    const romanInput = screen.getByTestId('roman'); // role: textbox
    userEvent.clear(romanInput);
    userEvent.type(romanInput, 'xdc');
    expect(screen.getByDisplayValue('590')).toBeInTheDocument();
    expect(screen.getByDisplayValue('DXC')).toBeInTheDocument();
  });
});
