import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}

export function UncontrolledAccordion(props: AccordionPropsType) {


    let [collapsed, setcol]= useState(false)

        return(
            <div>
                <AccordionTitle title={props.titleValue} />
                <button onClick={()=>{setcol(!collapsed)}}>TOOGL</button>
                {!collapsed&& <AccardionBody/>}
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



