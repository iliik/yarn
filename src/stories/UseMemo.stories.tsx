import React, {useMemo, useState} from 'react';

export default {
    title: 'useMemo',
}

const UsersSecret  = (props: { users: Array<string> }) => {
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dima', 'Valera', "Artem"])

    const newArray = useMemo(()=>{
        const newArray = users.filter(u => u.toLowerCase().indexOf('a')> -1)
        return newArray
    },[])

    const addUser = () => {
        const newUser = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUser)
    }

    return <>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <button onClick={()=>addUser()}>addUser</button>
        {counter}
        <Users users={newArray}/>
    </>
}