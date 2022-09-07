import React, {useState} from "react";


type AccordionPropsType = {
    titleValue:string
    collapsed:boolean
    onChange:()=>void
}
export function Accordion(props: AccordionPropsType) {
        return(
            <div>
                <AccordionTitle title={props.titleValue} onChange={props.onChange} />
                {! props.collapsed && <AccardionBody/>}
            </div>)
}
type AccordionTitlePropsType = {
    title: string
    onChange:()=>void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onChange}>{props.title}</h3>
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



