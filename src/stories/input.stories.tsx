import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";


export default {
    title: 'input'
}


// export const UncontrolledInput = () => <input/>
// export const TrackValueOfControlledInput = () => {
//     const [value, setValue] = useState('')
//
//     const onChange = (event: ChangeEvent<HTMLInputElement>) => {
//         const actualValue = event.currentTarget.value
//         setValue(actualValue)
//     }
//     return <><input onChange={onChange}/> {value}</>
// }
//
// export const GetValueOnControlledByButton = () => {
//     const [value, setValue] = useState('')
//     const inputRef = useRef<HTMLInputElement>(null)
//     const save = () => {
//         const el = inputRef.current as HTMLInputElement
//         setValue(el.value)
//     }
//     return <><input ref={inputRef}/>
//         <button onClick={save}> save</button>
//         - actual value:{value}</>
// }
export const ControlledSelect = () => {
const [parentValue, setParentValue] = useState('')
    const onChange = (e:ChangeEvent<HTMLSelectElement>) => {
setParentValue(e.currentTarget.value)
    }
    return <select value={parentValue}  onChange={onChange}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Kiev</option>
</select>
}

export const ControlledWithFixValue = () => <input value={'it-kamasutra'}/>