import { useState } from 'react'
import './input.sass'

type RuleType = (text: string) => boolean | string
type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { label: string, rules?: RuleType[] }

export default function Input({ label, rules = [], onChange = () => { }, ...props }: InputProps) {
    const [isValid, setIsValid] = useState(true)
    const [errorMessage, setErrorMessage] = useState("")

    function validate(text: string) {
        let valid = false
        for (const ruleFunction of rules) {
            const result = ruleFunction(text)
            if (typeof result === "boolean" && result) {
                valid = true
                continue
            }

            valid = false
            setIsValid(false)
            setErrorMessage(result as string)
            break
        }
        if (valid) {
            setIsValid(true)
            setErrorMessage("")
        }
    }

    return (
        <div className='custom-input'>
            <div className={'control' + (isValid ? "" : " invalid")}>
                <div className='main'>
                    <input onChange={(event) => { validate(event.target.value); onChange(event) }} {...props} />
                    <span className="floating-label">{label}</span>
                </div>
                <div className={'error-message'}>
                    <span>{errorMessage}</span>
                </div>
            </div>
        </div>
    )
}