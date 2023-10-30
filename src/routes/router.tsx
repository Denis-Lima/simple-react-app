import { Outlet, createBrowserRouter } from "react-router-dom"
import publicRoutes from "./PublicRoutes"
import NavBar from "../components/NavBar/NavBar"

const router = createBrowserRouter([
    {
        id: "0",
        element: (
            <>
                <NavBar />
                <Outlet />
            </>
        ),
        children: [
            ...publicRoutes
        ],
    }
])

export default router