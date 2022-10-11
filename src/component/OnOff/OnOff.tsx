import React, {useState} from "react";
import s from './OnOff.module.css'

type PropsType = {
    on:boolean
    onChange: (on: boolean) => void
}


export const OnOff = (props: PropsType) => {

    let [on, seton] = useState(false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        padding: "2px",
        backgroundColor: on ? "green" : "white"
    }

    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: on ? "white" : "red"
    }

    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px  solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red"
    }

    const onClickd = () => {
        seton(true)
        props.onChange(true)
    }
    const offClickd = () => {
        seton(false)
        props.onChange(false)
    }
    return (
        <div>
            <div style={onStyle} onClick={onClickd}>On
            </div>
            <div style={offStyle} onClick={offClickd}>Off
            </div>
            <div style={indicatorStyle} onClick={() => {
            }}></div>
        </div>
    )
}