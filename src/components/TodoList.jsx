import React, { useState } from "react";
import TodoItem from "./TodoItem.jsx";

export default function TodoList({ children }) {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        setTodos([...todos, { id: Date.now(), text }]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const childrenWithProps = React.Children.map(children, (child) =>
        React.cloneElement(child, { onAdd: addTodo })
    );

    return (
        <div>
            {childrenWithProps}
            <ul className="task_container">
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        onRemove={removeTodo}
                    />
                ))}
            </ul>
        </div>
    );
}
