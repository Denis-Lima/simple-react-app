import { useMemo, useState } from 'react'
import './table.sass'
import Button from '../Button/Button'

type header = {
    text: string,
    key: string
}
type TableProps = {
    headers: header[]
    items: Record<string, string>[]
    itemsPerPage?: number
}

function calculateButtonsPages(count: number, ellipsis = '…') {
    // https://stackoverflow.com/a/70263913
    const { floor, min, max } = Math
    const range = (lo: number, hi: number) => Array.from({ length: hi - lo }, (_, i) => i + lo)

    return (page: number, total: number) => {
        const start = max(1, min(page - floor((count - 3) / 2), total - count + 2))
        const end = min(total, max(page + floor((count - 2) / 2), count - 1))
        return [
            ... (start > 2 ? [1, ellipsis] : start > 1 ? [1] : []),
            ...range(start, end + 1),
            ... (end < total - 1 ? [ellipsis, total] : end < total ? [total] : [])
        ]
    }
}

export default function Table(props: TableProps) {
    const { itemsPerPage = 10 } = props
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = useMemo(() => Math.ceil(props.items.length / itemsPerPage), [props.items, itemsPerPage])
    const buttonsAmount = 7

    const buttonsNumbers = useMemo(() => {
        return calculateButtonsPages(buttonsAmount)(currentPage, totalPages)
    }, [currentPage, totalPages])

    const buttons = useMemo(() => {
        return buttonsNumbers.map((buttonNumber, index) => {
            return typeof buttonNumber === "number" ?
                <Button key={"btn" + buttonNumber} className={currentPage === buttonNumber ? "active" : ""} onClick={() => setCurrentPage(buttonNumber)} >
                    {buttonNumber}
                </Button>
                :
                <Button key={"btn-ellipses" + index} disabled className='ellipses' >
                    {buttonNumber}
                </Button>

        })
    }, [buttonsNumbers, currentPage])

    const pageItems = props.items.slice((currentPage - 1) * itemsPerPage, (currentPage * itemsPerPage))

    return (
        <div>
            <div className='table-container'>
                {props.items.length > 0 ? (
                    <>
                        <table>
                            <thead>
                                <tr>
                                    {props.headers.map((header, index) => (
                                        <th key={header.key + index}>{header.text}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {pageItems.map((item, index) => (
                                    <tr key={"row" + index}>
                                        {props.headers.map((header, dataIndex) => (
                                            <td key={"row-data" + index.toString() + dataIndex.toString()}>{item[header.key]}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                ) :
                    <p>Não há itens na lista</p>}
            </div>
            <div className='pagination-container'>
                {buttons}
            </div>

        </div>
    )
}