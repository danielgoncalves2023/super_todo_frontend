import { useEffect, useState } from "react"
import { getDate } from "../../../../lib/getDate"

export const DateNow = () => {
    const [date, setDate] = useState('')

    const callDate = () => {
        setDate(getDate())
    }

    const updateDate = () => {
        setInterval(
            callDate
        ), 1000
    }

    useEffect(() => {
        updateDate()
    }, [])

    return (
        <div className="text-sm">
            {date}
        </div>
    )
}