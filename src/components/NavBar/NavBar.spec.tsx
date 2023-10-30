import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import NavBar from './NavBar'
import { BrowserRouter } from 'react-router-dom'

const mockedUsedNavigate = jest.fn()

jest.mock("react-router-dom", () => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...(jest.requireActual("react-router-dom") as any),
    useNavigate: () => mockedUsedNavigate
}))

describe('NavBar component tests', () => {
    test('renders without crashing', () => {
        const { container } = render(<NavBar />)
        expect(container.querySelector("div.navbar-container")!).toBeInTheDocument()
    })

    test('NavBar should has at least 1 button', () => {
        const { container } = render(<BrowserRouter><NavBar /></BrowserRouter>)
        expect(container.querySelector("div.navbar-container button")!).toBeInTheDocument()
    })
})