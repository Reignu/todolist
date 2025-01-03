import React from "react";
import axios from "../../axios";
import { ListContainer, Row, Text, DeleteIcon } from "./styles";

function TodoList({ todos, fetchData }) {
  console.log(todos, 'hi');

  const updateTodo = async (id, currentStatus) => {
    try {
      await axios.put(`/todos/${id}`, {
        completed: !currentStatus
      });
      fetchData();
    } catch (err) {
      console.error(err.message);
    }
  }

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/todos/${id}`);
      fetchData();
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <div>
      <ListContainer>
        {todos?.map((todo) => (
          <Row key={todo._id}>
            <Text 
              onClick={() => updateTodo(todo._id, todo.completed)}
              isCompleted={todo.completed}
            >
              {todo.text.trim()}
            </Text>
            <DeleteIcon onClick={() => deleteTodo(todo._id)}>X</DeleteIcon>
          </Row>
        ))}
      </ListContainer>
    </div>
  )
}

export default TodoList