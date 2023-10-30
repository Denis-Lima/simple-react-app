const userStoreKey = "react-simple-app-users"
const firstTimeAccessKey = "first-time-access"

function isFirstTimeAccess(): boolean {
    const value = localStorage.getItem(firstTimeAccessKey)
    return value === null || JSON.parse(value)
}

function setFirstTimeAccess(isFirstTime: boolean): void {
    localStorage.setItem(firstTimeAccessKey, JSON.stringify(isFirstTime))
}

export type User = {
    name: string,
    cpf: string,
    phone: string,
    email: string
}
export async function getUsers(): Promise<User[]> {
    let users: User[] = JSON.parse(localStorage.getItem(userStoreKey) ?? "[]")
    if (users.length === 0 && isFirstTimeAccess()) {
        users = await (await fetch("https://private-9d65b3-tinnova.apiary-mock.com/users")).json()
        setFirstTimeAccess(false)
        saveUsersInLocalStorage(users)
    }
    return users
}

function saveUsersInLocalStorage(users: User[]): void {
    localStorage.setItem(userStoreKey, JSON.stringify(users))
}

export async function getUser(index: number): Promise<User | null> {
    const users = await getUsers()

    if (users.length <= index) return null
    return users[index]
}

export async function saveUser(newUser: User): Promise<void> {
    const users = await getUsers()
    users.push(newUser)
    saveUsersInLocalStorage(users)
}

export async function updateUser(userData: User, index: number): Promise<boolean> {
    const users = await getUsers()
    if (users.length <= index) return false

    users[index] = userData
    saveUsersInLocalStorage(users)
    return true
}

export async function deleteUser(index: number): Promise<boolean> {
    const users = await getUsers()
    if (users.length <= index) return false
    users.splice(index, 1)
    saveUsersInLocalStorage(users)
    return true
}