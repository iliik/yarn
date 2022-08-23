import React from 'react';
import './App.css';
import {Accordion} from "./component/Accordion/Accordion";
import {Rating} from "./component/Rating/Rating";
import {OnOff} from "./component/OnOff/OnOff";


function App() {
    return (
        <div>
            {/*<PageTitle title={'Hii broo'}/>*/}
            {/*<PageTitle title={'My Frend'}/>*/}
            {/*<Accordion titleValue={'Menu'} collapsed={true}/>*/}
            {/*<Accordion titleValue={'Users'} collapsed={false}/>*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            <OnOff />
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