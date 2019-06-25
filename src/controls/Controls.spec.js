// Test away!
import 'jest-dom/extend-expect'
import React from 'react'
import { fireEvent, render } from 'react-testing-library'
import 'react-testing-library/cleanup-after-each'
import Controls from '../controls/Controls'

it('should call toggleClosed to change on button click', () => {
    const toggleClosed = jest.fn()
    const { getByText } = render(<Controls toggleClosed={toggleClosed} />)

    const button = getByText(/close gate/i)
    fireEvent.click(button)
})

it('should disable open/close button when gate is locked', () => {
    const { getByText } = render(<Controls locked />)

    const button = getByText(/close gate/i)

    expect(button).toBeDisabled()
})

it('should disable lock/unlock button when gate is open', () => {
    const { getByText } = render(<Controls closed={false} />)

    const button = getByText(/lock gate/i)

    expect(button).toBeDisabled()
})
