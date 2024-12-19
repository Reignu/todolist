import React, {useState} from 'react'
import { Container } from './styles'
import Form from '../form'

function Todo() {
        const [input, setInput] = useState(``);
        console.log(input, "input");

    return (
        <Container>
            <h2>List of Todos</h2>
            {/* Form Component */}
            <Form input = {input} setInput = {setInput}/>
            {/* Task */}
            {/* Key */}
            {/* Author */}
        </Container>
    )
}

export default Todo