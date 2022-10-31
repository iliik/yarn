import React, {useEffect, useState} from "react";

type PropsType = {}


const get2diqitsString = (number: number) => number < 10 ? "0" + number : number
export const Clock: React.FC<PropsType> = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])

    return <div>
        <span>{get2diqitsString(date.getHours())}</span>
        :
        <span>{get2diqitsString(date.getMinutes())}</span>
        :
        <span>{get2diqitsString(date.getSeconds())}</span>
    </div>
}