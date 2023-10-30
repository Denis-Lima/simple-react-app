import './loader.sass'

type LoaderProps = {
    active?: boolean
    size?: number
    color?: string
}

export default function Loader({ active = true, size = 32, color = "#3498db" }: LoaderProps) {
    const sizePx = size + "px"
    return <div className={'loader' + (active ? " active" : "")} style={{ width: sizePx, height: sizePx, borderTopColor: color }}></div>
}