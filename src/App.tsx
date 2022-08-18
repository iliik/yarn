import React from 'react';
import './App.css';
import {Accordion} from "./component/Accordion/Accordion";
import {Rating} from "./component/Rating/Rating";


function App() {
    return (
        <div>
            <PageTitle title={'Hii broo'}/>
            <PageTitle title={'My Frend'}/>
            <Rating value={3}/>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            <Rating value={1}/>
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