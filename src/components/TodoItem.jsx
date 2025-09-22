import React, { useState } from "react";

export default function TodoItem({ id, text, onRemove }) {
    const [completed, setCompleted] = useState(false);

    return (
        <li className="item">
            <input
                className="task_checkbox"
                type="checkbox"
                checked={completed}
                onChange={() => setCompleted(!completed)}
            />
            <span className="item-text" style={{ textDecoration: completed ? "line-through" : "none" }}>
                {text}
            </span>
            <button className="delete_b" onClick={() => onRemove(id)}>Delete</button>
        </li>
    );
}
