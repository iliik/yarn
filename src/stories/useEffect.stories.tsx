import React, {useEffect, useMemo, useState} from 'react';

export default {
    title: 'useEffect demo',
}

export const SimpleExample1 = () => {
    const [counter, setCounter] = useState(0)

useEffect(()=>{
    setInterval(()=>{
        setCounter(state => state + 1)
    },1000)
},[])



    return<>
        Hello,counter: {counter}
    </>
}

