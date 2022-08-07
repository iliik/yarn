import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            Hello
            <Star/>
            <Accordion title={"Menu"} collapsed={true}/>
            <Accordion title={"User"} collapsed={false}/>
        </div>
    );
}

function Star() {
    return (
        <div>Star</div>
    );
}

type AccordionPropsType = {
    title: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")
    if (props.collapsed) {
        return<>
            <AccordionTitle title={props.title}/>
        </>
    } else {
        return(
            <>
                <AccordionTitle title={props.title}/>
                <AccardionBody/>
            </>
        )

    }


type AccordionTitlePropsType = {
    title: string

}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return (
        <h3>{props.title}</h3>
    );
}


function AccardionBody() {
    console.log("AccardionBody rendering")
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>

    );
}
}

export default App;