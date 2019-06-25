// Test away
import 'jest-dom/extend-expect';
import React from 'react';
import { render } from 'react-testing-library';
import Controls from '../controls/Controls';
import Display from '../display/Display';
import Dashboard from './Dashboard';

it('should render Dashboard', () => {
    render(<Dashboard />)
})


it('should render Display', () => {
    render(<Display />)
})


it('should render Controls', () => {
    render(<Controls />)
})

it('should render buttons', () => {
    const { getByText } = render(<Dashboard />)

    getByText(/unlocked/i)
    getByText(/open/i)
    getByText(/lock gate/i)
    getByText(/close gate/i)
})

