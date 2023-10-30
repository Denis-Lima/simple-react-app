import { useEffect, useState } from "react"
import Table from "../components/Table/Table"
import { User, deleteUser, getUsers } from "../stores/UserStore"
import Button from "../components/Button/Button"
import { useNavigate } from "react-router-dom"
import Modal from "../components/Modal/Modal"


export default function UserListPage() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [deleteIndex, setDeleteIndex] = useState(-1)
    const [users, setUsers] = useState<User[]>([])
    const headers = [
        { key: "name", text: "Nome" },
        { key: "cpf", text: "Cpf" },
        { key: "phone", text: "Telefone" },
        { key: "email", text: "Email" },
        { key: "actions", text: "Ações" }
    ]

    const navigate = useNavigate()

    function openDeleteModal(index: number) {
        setIsModalOpen(true)
        setDeleteIndex(index)
    }

    function confirmDelete() {
        deleteUser(deleteIndex)
        users.splice(deleteIndex, 1)

        setDeleteIndex(-1)
        setIsModalOpen(false)
    }

    function actionsButton(index: number) {
        return (
            <div className="action-container">
                <Button style={{ padding: "0px 8px", margin: "4px" }} onClick={() => navigate(`/users/${index}`)}>Editar</Button>
                <Button style={{ padding: "0px 8px", margin: "4px" }} onClick={() => openDeleteModal(index)}>Excluir</Button>
            </div>
        )
    }

    useEffect(() => {
        getUsers().then((usersList) => setUsers(usersList.map((userData, index) => ({ ...userData, actions: actionsButton(index) }))))
    }, [])

    const modalButton = (text: string, onClick: () => void, style?: Record<string, string>) => (
        <Button style={{ ...style, padding: "0px 16px" }} onClick={onClick}>
            {text}
        </Button>
    )

    return (
        <>
            <h3>Dados cadastrados</h3>
            <Table items={users} headers={headers} />
            <Modal isOpen={isModalOpen}>
                {<div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%" }}>
                    {isModalOpen && <p style={{ textAlign: "center" }}>Deseja realmente excluir o usuário "{users[deleteIndex].name}"?</p>}
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
                        {modalButton("Excluir", () => confirmDelete(), { backgroundColor: "red" })}
                        {modalButton("Cancelar", () => setIsModalOpen(false))}
                    </div>
                </div>}
            </Modal>
        </>
    )
}