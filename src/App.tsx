import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./component/OnOff/OnOff";
import {UncontrolledRating} from "./component/UncontrolledRating/UncontrolledRating";
import {UncontrolledAccordion} from "./component/UncontrolledAccordion/UncontrolledAccordion";
import {RaitingValueType, Rating} from "./component/Rating/Rating";
import {Accordion} from "./component/Accordion/Accordion";
import {UncontrolledOnOff} from "./component/UncontrolledOnOff/UncontroledOnOff";


function App() {
    let [raitingValue, setraitingValue] = useState<RaitingValueType>(0)
    let [accordionCollapssed, setaccordionCollapssed] = useState<boolean>(false)
    let [uncontrolledOnOff, setUncontrolledOnOff] = useState<boolean>(false)
    return (
        <div className={'App'}>
            {/*<UncontrolledOnOff on={uncontrolledOnOff} onChenge={(on)=>{setUncontrolledOnOff(on)}}/>*/}
            {/*<Accordion */}
            {/*    titleValue={'Menu'}*/}
            {/*    collapsed={accordionCollapssed}*/}
            {/*    onChange={()=>{setaccordionCollapssed(!accordionCollapssed)}}/>*/}
            {/*<Rating value={raitingValue} onClick={setraitingValue}/>*/}
            <OnOff onChange={setUncontrolledOnOff}/> {uncontrolledOnOff.toString()}
        </div>
    );
}


export default App;

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}