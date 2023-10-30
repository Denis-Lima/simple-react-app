import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Table from './Table'

describe('Table component tests', () => {
    test('renders without crashing', () => {
        const { container } = render(<Table headers={[{ key: "a", text: "b" }]} items={[{ a: "b" }]} />)
        expect(container.querySelector("div.table-container table")!).toBeInTheDocument()
    })

    test('when there are no items, should show message "Não há itens na lista"', () => {
        render(<Table headers={[]} items={[]} />)
        expect(screen.queryByText("Não há itens na lista")).toBeInTheDocument()
    })
})