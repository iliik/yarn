import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            Hello
            <Star/>
            <Accordion/>
        </div>
    );
}

function Star() {
    return (
        <div>Star</div>
    );
}

function Accordion() {
    console.log("Accordion rendering")
    return (

    <div>
      <AccordionTitle/>
      <AccardionBody/>
    </div>
);
}

function AccordionTitle() {
    console.log("AccordionTitle rendering")
    return (
        <div>
            <h3>Меню</h3>
        </div>
    );
}

function AccardionBody() {
    console.log("AccardionBody rendering")
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}

export default App;
