import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import Form from '../form';
import axios from "../../axios";

function Todo() {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    // console.log(input, "input");

    const fetchData = async () => {
        try {
            const response = await axios.get("/todos");
            setTodos(response.data);
        } catch (err) {
            console.log(err.message);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const addTodo = async () => {
        console.log("added Todo");
    }

    console.log(todos, "todos");

    return (
        <Container>
            <h2>List of Todos</h2>
            {/* Form Component */}
            <Form input = {input} setInput = {setInput}/>
            {/* Task */}
            {/* Key */}
            {/* Author */}
        </Container>
    );
}

export default Todo;