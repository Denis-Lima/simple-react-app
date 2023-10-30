import { Route, createRoutesFromElements, redirect } from "react-router-dom"
import ListPage from "../pages/UserListPage"
import RegisterPage from "../pages/RegisterPage"

const publicRoutes = createRoutesFromElements([
    <Route id="1" path="/users" element={<ListPage />} />,
    <Route id="2" path="/users/register" element={<RegisterPage />} />,
    <Route id="3" path="/users/:id" element={<RegisterPage />} />,
    <Route id="4" path="*" loader={() => redirect("/users")} />
])

export default publicRoutes