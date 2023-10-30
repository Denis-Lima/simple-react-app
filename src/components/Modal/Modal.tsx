import Card from "../Card/Card"
import './modal.sass'

type ModalProps = {
    children: React.ReactElement | React.ReactElement[] | string | number
    isOpen: boolean
}

export default function Modal(props: ModalProps) {

    return (
        <div className="modal" style={{ display: props.isOpen ? "" : "none" }}>
            <Card className="modal-content" elevated={false}>
                {props.children}
            </Card>
        </div>
    )
}