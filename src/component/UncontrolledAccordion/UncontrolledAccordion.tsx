import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string

}

export function UncontrolledAccordion(props: AccordionPropsType) {

    let [collapsed, setcollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {
                setcollapsed(!collapsed)
            }}/>
            {!collapsed && <AccardionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void

}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => {
            props.onClick()
        }}>{props.title}</h3>
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



