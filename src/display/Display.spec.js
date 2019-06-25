// Test away!
import 'jest-dom/extend-expect'
import React from 'react'
import { render } from 'react-testing-library'
import 'react-testing-library/cleanup-after-each'
import Display from './Display'

it('should display Closed if closed props is true', () => {
    const { getByText } = render(<Display closed={true} />)

    getByText(/closed/i)
})

it('should display Locked if the locked prop is true', () => {
    const { getByText } = render(<Display locked={true} />)

    getByText(/locked/i)
})

it('should have red-led class when locked or closed', () => {
    const { getByText } = render(<Display locked={true} />)
    const locked = getByText(/locked/i)

    expect(locked).toHaveClass('red-led')
})

it('should have green-led class when unlocked or open', () => {
    const { getByText } = render(<Display locked={false} />)
    const locked = getByText(/unlocked/i)

    expect(locked).toHaveClass('green-led')
})
