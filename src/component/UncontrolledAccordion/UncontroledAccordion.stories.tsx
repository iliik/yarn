import React from 'react';

import {UncontrolledAccordion} from "./UncontrolledAccordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontroledAccordion ',
    component: UncontrolledAccordion,
}
const callback = action ("accordion on ")

export const ModeChange = ()=>{

    return  <UncontrolledAccordion titleValue={'users'}/>

}
