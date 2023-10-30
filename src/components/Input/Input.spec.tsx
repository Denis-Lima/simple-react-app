import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Input from './Input'

describe('Input component tests', () => {
    test('renders without crashing', () => {
        const { container } = render(<Input label='teste' />)
        expect(container.querySelector("input")!).toBeInTheDocument()
    })

    test("input with rules with error should render error message", () => {
        const { container } = render(<Input label='teste' rules={[() => "Teste de erro"]} />)
        fireEvent.change(container.querySelector("input")!, { target: { value: "abc" } })
        expect(screen.queryByText("Teste de erro")).toBeInTheDocument();
    })

    test("input with rules without error should render error message", () => {
        const { container } = render(<Input label='teste' rules={[() => true]} />)
        fireEvent.change(container.querySelector("input")!, { target: { value: "abc" } })
        expect(screen.queryByText("Teste de erro")).not.toBeInTheDocument();
    })
})