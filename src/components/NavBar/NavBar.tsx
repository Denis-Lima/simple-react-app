import { useNavigate } from "react-router-dom"
import Button from "../Button/Button"
import './navbar.sass'


export default function NavBar() {
    const navigate = useNavigate()

    return (
        <div className="navbar-container">
            <div className="navbar-content">
                <Button onClick={() => navigate("/users")}>Listagem de cadastro</Button>
                <Button onClick={() => navigate("/users/register")}>Adicionar cadastro</Button>
            </div>
        </div>
    )
}