import { useEffect, useMemo, useState } from "react"
import Button from "../../components/Button/Button"
import Card from "../../components/Card/Card"
import Input from "../../components/Input/Input"
import './userForm.sass'
import { getUser, saveUser, updateUser } from "../../stores/UserStore"
import { minCharacters } from "../../utils/rules"
import { useParams } from "react-router-dom"

export default function UserForm() {
    const params = useParams()
    const [isEditMode, setIsEditMode] = useState(params.id !== undefined)

    useEffect(() => {
        if (isEditMode) {
            getUser(parseInt(params.id as string)).then((editUser) => {
                if (editUser === null) {
                    setIsEditMode(false)
                } else {
                    setUser(editUser)
                }
            })
        }
    }, [])

    const [user, setUser] = useState({ name: "", email: "", cpf: "", phone: "" })
    const [isLoading, setIsLoading] = useState(false)


    const min3Characters = minCharacters(3)

    const allValid = useMemo(() => Object.keys(user).every((key) => {
        const text = user[key as keyof typeof user]
        return text.trim().length > 0 && min3Characters(text) === true
    }), [user, min3Characters])

    function reset() {
        setUser({ name: "", email: "", cpf: "", phone: "" })
    }

    const [message, setMessage] = useState("")

    async function handleOnClick() {
        setIsLoading(true)

        // para simular uma requisição, senão não iremos conseguir ver animação de loading
        setTimeout(async () => {
            let message
            try {
                if (isEditMode) {
                    await updateUser(user, parseInt(params.id as string))
                    message = "Cadastro atualizado!"
                } else {
                    await saveUser(user)
                    message = "Cadastro realizado!"
                    reset()
                }
            } catch (error) {
                console.log(error)
                message = "Erro ao cadastrar"
            }
            setIsLoading(false)
            setMessage(message)
            setTimeout(() => setMessage(""), 3000)
        }, 2000);
    }

    return (
        <Card className="card-form">
            <div className="input-form">
                <div className="input-item">
                    <Input label="Nome completo (sem abreviações)" required value={user.name} onChange={(event) => setUser((oldUser) => ({ ...oldUser, name: event.target.value }))} rules={[min3Characters]} />
                </div>
                <div className="input-item">
                    <Input label="E-mail" required value={user.email} onChange={(event) => setUser((oldUser) => ({ ...oldUser, email: event.target.value }))} rules={[min3Characters]} />
                </div>
                <div className="input-item">
                    <Input label="CPF" required value={user.cpf} onChange={(event) => setUser((oldUser) => ({ ...oldUser, cpf: event.target.value }))} rules={[min3Characters]} />
                </div>
                <div className="input-item">
                    <Input label="Telefone" required value={user.phone} onChange={(event) => setUser((oldUser) => ({ ...oldUser, phone: event.target.value }))} rules={[min3Characters]} />
                </div>
                <div className="input-item">
                    <Button onClick={handleOnClick} loading={isLoading} disabled={!allValid}>{isEditMode ? "Atualizar" : "Cadastrar"}</Button>
                </div>
                <div className="input-item">
                    {message.length > 0 && <p>{message}</p>}
                </div>
            </div>
        </Card>
    )
}