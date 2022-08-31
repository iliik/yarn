import React, {useState} from "react";

type  RatingPropsType = {

}

export function UncontrolledRating(props: RatingPropsType) {

    let [value, setvalue ] = useState(0)
    return (
        <div>
            <Star selected={value > 0}/><button onClick={()=>{setvalue(1)}}>1</button>
            <Star selected={value > 1}/><button onClick={()=>{setvalue(2)}}>2</button>
            <Star selected={value > 2}/><button onClick={()=>{setvalue(3)}}>3</button>
            <Star selected={value > 3}/><button onClick={()=>{setvalue(4)}}>4</button>
            <Star selected={value > 4}/><button onClick={()=>{setvalue(5)}}>5</button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    return(<div>
        {props.selected && <span><b>Star</b> </span>}
    </div>
    )
}