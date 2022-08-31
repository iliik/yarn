import React, {useState} from "react";
import s from './OnOff.module.css'


export const OnOff = () => {

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

    return (
        <div>
            <div style={onStyle} onClick={() => {
                seton(true)
            }}>On
            </div>
            <div style={offStyle} onClick={() => {
                seton(false)
            }}>Off
            </div>
            <div style={indicatorStyle} onClick={() => {
            }}></div>
        </div>
    )
}