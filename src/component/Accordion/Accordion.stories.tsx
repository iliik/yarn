import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Accordion} from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Accordion ',
    component: Accordion,
}
export const callback = action('accordion')
export const onClickCallback = action('some atem wos clicked')

export const MenuCollapsedMode = () => <Accordion
    titleValue={'Menu'}
    collapsed={true}
    onChange={callback} items={[]}
    onClick={onClickCallback}/>
export const OncollapsedMode = () => <Accordion
    titleValue={'users'}
    collapsed={false}
    onChange={callback}
    onClick={onClickCallback}
    items={[
        {title: 'Dima', value: 1},
        {title: 'Ilya', value: 2},
        {title: 'Timuir', value: 3},
        {title: 'Helga', value: 4},
        {title: 'Andgelinous', value: 5}
    ]}/>

export const ModeChange = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion
        titleValue={'users'}
        collapsed={value}
        onChange={() => setValue(!value)}
        onClick={(value) => {
            alert(`user with ID ${value} sold be happy`)
        }}
        items={[
            {title: 'Dima', value: 1},
            {title: 'Ilya', value: 2},
            {title: 'Timuir', value: 3},
            {title: 'Helga', value: 4},
            {title: 'Andgelinous', value: 5}
        ]}/>

}
