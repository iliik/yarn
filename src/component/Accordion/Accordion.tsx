import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {


    let [col, setcol]= useState(false)

        return(
            <div>
                <AccordionTitle title={props.titleValue} />
                <button onClick={()=>{setcol(true)}}>TOOGL</button>
                {col&& <AccardionBody/>}
            </div>
        )
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>{props.title}</h3>
    )
}

function AccardionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>

    );
}



