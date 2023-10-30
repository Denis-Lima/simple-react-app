import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from './Button'

describe('Button component tests', () => {
    test('renders without crashing', () => {
        render(<Button>Botão de teste</Button>)
        expect(screen.getByText('Botão de teste')).toBeInTheDocument()
    })

    test("loader appers when loading", () => {
        render(<Button loading={true}>Botão de teste</Button>)
        expect(screen.getByRole("button").children[0].className).toContain("loader")
    })
})