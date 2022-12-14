import React, {useState} from "react";

type PropsType ={
   onChenge:(on:boolean)=>void
}
export const UncontrolledOnOff = React.memo((props:PropsType) => {
    let [on,seton]=useState(false)
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
            <div style={onStyle} onClick={() => {props.onChenge(true)}}>On
            </div>
            <div style={offStyle} onClick={() => {props.onChenge(false)}}>Off
            </div>
            <div style={indicatorStyle} onClick={() => {
            }}></div>
        </div>
    )
} )