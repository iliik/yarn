import React, {useState} from "react";


export const UncontrolledRating = React.memo(() => {

    let [value, setvalue] = useState(0)
    return (
        <div>
            <Star selected={value > 0} setvalue={()=>{setvalue(1)}}  />
            <Star selected={value > 1} setvalue={()=>{setvalue(2)}} />
            <Star selected={value > 2} setvalue={()=>{setvalue(3)}} />
            <Star selected={value > 3} setvalue={()=>{setvalue(4)}}/>
            <Star selected={value > 4} setvalue={()=>{setvalue(5)}}/>
        </div>
    )

    type StarPropsType = {
        selected: boolean
        setvalue: () => void
    }

    function Star(props: StarPropsType) {
        return <span onClick={() =>
        {props.setvalue()}}>
        {props.selected ? <b>star </b> : ' star '} </span>
    }
} )





