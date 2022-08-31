import React from 'react';
import './App.css';
import { UncontrolledAccordion} from "./component/Accordion/Accordion";
import {Rating} from "./component/Rating/Rating";
import {OnOff} from "./component/OnOff/OnOff";
import {UncontrolledRating} from "./component/UncontrolledRating/UncontrolledRating";




function App() {
    return (
        <div className={'App'}>
            {/*<PageTitle title={'Hii broo'}/>*/}
            {/*<PageTitle title={'My Frend'}/>*/}
            <UncontrolledAccordion titleValue={'Menu'} />
            <UncontrolledAccordion titleValue={'Users'} />
            <UncontrolledRating />
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            <OnOff />
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