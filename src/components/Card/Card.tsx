import './card.sass'

type CardProps = {
    children: React.ReactElement | React.ReactElement[] | string | number
    elevated?: boolean
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export default function Card(props: CardProps) {
    const { children, className = "", elevated = true, ...rest } = props
    const elevatedClass = elevated ? " elevated" : ""
    return (
        <div className={"custom-card " + className + elevatedClass} {...rest} data-testid="custom-card">
            {children}
        </div>
    )
}