import React, {useMemo, useState} from 'react';

export default {
    title: 'useMemo',
}

const UsersSecret = (props: { users: Array<string> }) => {
    return <div>{
        props.users.map((u, i) => <div key={i}>{u}</div>)
    }</div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', "CSS", 'HTML'])

    const newArray = useMemo(() => {
        const newArray = books.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [books])

    const addBook = () => {
        const newUser = [...books, 'Angular' + new Date().getTime()]
        setBooks(newUser)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addBook()}> addBook</button>
        {counter}
        <Book books={newArray}/>
    </>
}


const BooksSecret = (props: { books: Array<string> }) => {
    return <div>{
        props.books.map((book, i) => <div key={i}>{book}</div>)
    }</div>
}
const Book = React.memo(BooksSecret)