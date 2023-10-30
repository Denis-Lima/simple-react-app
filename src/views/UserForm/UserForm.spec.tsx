import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import UserForm from './UserForm'

describe('UserForm component tests', () => {
    test('renders without crashing', () => {
        const { container } = render(<UserForm />)
        expect(container.querySelector("div.card-form")!).toBeInTheDocument()
    })

    test('when form is empty, button should be disabled', () => {
        const { container } = render(<UserForm />)
        expect(container.querySelector("div.card-form button")!).toBeDisabled()
    })

    test('when form is filled with error, button should be disabled', () => {
        const { container } = render(<UserForm />)
        Array.from(container.querySelectorAll("div.card-form input"))
            .forEach(input => fireEvent.change(input, { target: { value: "ab" } }))
        expect(container.querySelector("div.card-form button")!).toBeDisabled()
    })

    test('when form is filled without error, button should be enabled', () => {
        const { container } = render(<UserForm />)
        Array.from(container.querySelectorAll("div.card-form input"))
            .forEach(input => fireEvent.change(input, { target: { value: "abcdef" } }))
        expect(container.querySelector("div.card-form button")!).toBeEnabled()
    })
})