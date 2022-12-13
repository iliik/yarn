import React, {useState} from 'react';
import './App.css';
import {RaitingValueType, Rating} from "./component/Rating/Rating";
import {Accordion} from "./component/Accordion/Accordion";
import {UncontrolledAccordion} from "./component/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./component/UncontrolledRating/UncontrolledRating";


function App() {
    let [raitingValue, setraitingValue] = useState<RaitingValueType>(0)
    let [accordionCollapssed, setaccordionCollapssed] = useState<boolean>(false)
    let [uncontrolledOnOff, setUncontrolledOnOff] = useState<boolean>(false)
    return (
        <div className={'App'}>
            <input/>
            <UncontrolledRating/>
            <UncontrolledAccordion titleValue={'User'}/>
        </div>
    );
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}

type PageTitlePropsType = {
    title: string
}


export default App;
