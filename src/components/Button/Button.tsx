import './button.sass'
import Loader from '../Loader/Loader'

type ButtonProps = {
    loading?: boolean
    children: React.ReactElement | React.ReactElement[] | string | number
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button(props: ButtonProps) {
    const { loading = false, ...rest } = props
    return (
        <button {...rest}>
            {loading ? <Loader active={loading} size={16} /> : props.children}
        </button>
    )
}