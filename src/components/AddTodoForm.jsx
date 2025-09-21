import React, { useState } from "react";

export default function AddTodoForm({ onAdd }) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        onAdd(text);
        setText("");
    };

    return (
        <form className="todo_f" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter a new task"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="task_title"
            />
            <button className="add_b" type="submit">Add</button>
        </form>
    );
}
