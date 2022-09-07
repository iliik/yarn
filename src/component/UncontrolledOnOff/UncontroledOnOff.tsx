import React, {useState} from "react";
import s from './OnOff.module.css'

type PropsType ={
    on:boolean
   onChenge:(on:boolean)=>void
}
export const UncontrolledOnOff = (props:PropsType) => {
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        padding: "2px",
        backgroundColor: props.on ? "green" : "white"
    }

    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: props.on ? "white" : "red"
    }

    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px  solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red"
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {props.onChenge(true)}}>On
            </div>
            <div style={offStyle} onClick={() => {props.onChenge(false)}}>Off
            </div>
            <div style={indicatorStyle} onClick={() => {
            }}></div>
        </div>
    )
}