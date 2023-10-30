import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Loader from './Loader'

describe('Loader component tests', () => {
    test('renders without crashing', () => {
        const { container } = render(<Loader />)
        expect(container.querySelector("div.loader")!).toBeInTheDocument()
    })
})