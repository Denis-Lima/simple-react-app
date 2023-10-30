import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Modal from './Modal'

describe('Modal component tests', () => {
    test('renders without crashing', () => {
        const { container } = render(<Modal isOpen={true}><p>teste</p></Modal>)
        expect(container.querySelector("div.modal")!).toBeInTheDocument()
    })

    test('modal isOpen == true should be visible', () => {
        const { container } = render(<Modal isOpen={true}><p>teste</p></Modal>)
        expect(container.querySelector("div.modal")!).toBeVisible()
    })

    test("modal isOpen == false shouldn't be visible", () => {
        const { container } = render(<Modal isOpen={false}><p>teste</p></Modal>)
        expect(container.querySelector("div.modal")!).not.toBeVisible()
    })
})