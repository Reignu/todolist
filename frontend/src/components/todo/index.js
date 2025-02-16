import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import Form from '../form';
import TodoList from '../todolist';
import Key from '../key';
import Author from '../author';
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

    const addTodo = async (e) => {
        e.preventDefault(); // Prevent screen refreshing
        if (input.length === 0) return null;
        try {
            await axios.post("/todos", {
                text: input,
                completed: false
            });
            fetchData();
            setInput("");
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <Container>
            <h2>List of Todos</h2>
            <Form input = {input} setInput = {setInput} addTodo = {addTodo}/>
            <TodoList todos={todos} fetchData={fetchData} />
            <Key />
            <Author />
        </Container>
    );
}

export default Todo;