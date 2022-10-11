import React, {useState} from 'react';
import {UncontrolledOnOff} from "./UncontroledOnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UncontrolledOnOff ',
    component: UncontrolledOnOff,
}

const callback = action ('ssssss')
export const OnMode = () => <UncontrolledOnOff onChenge={callback}/>
export const OffMode = () => <UncontrolledOnOff  onChenge={callback}/>


