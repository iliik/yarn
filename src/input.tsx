import {ChangeEvent, useState} from "react";

export  const Input = () => {
    return <input/>
}
export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChang = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChang}/>
}
export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChang = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type='checkbox' checked={parentValue} onChange={onChang}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState < string | null>( null)
    const onChang = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return<select>
        <option>none </option>
        <option>none</option>
        <option>none</option>

    </select>
}