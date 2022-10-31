import React, {useMemo, useState} from 'react';

export default {
    title: 'useState demo',
}

export const Example1 = () => {
    const [counter, setCounter] = useState(0)


    const changer =(state: number) => {
        return state +1
    }

    return<>
        <button onClick={()=>setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}

