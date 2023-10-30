import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from './Card'

describe('Card component tests', () => {
    test('renders without crashing', () => {
        const { container } = render(<Card><p>teste</p></Card>)
        expect(container.querySelector("div.custom-card")).toBeInTheDocument()
    })

    test("card elevated should has elevated class", () => {
        const { container } = render(<Card elevated={true}><p>teste</p></Card>)
        expect(container.querySelector("div.custom-card")!.className).toContain("elevated");
    })
})