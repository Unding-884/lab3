import TodoList from "./components/TodoList.jsx";
import AddTodoForm from "./components/AddTodoForm.jsx";

export default function App() {
    return (
        <div className="app">
            <h1 className="title">To-Do List</h1>
            <TodoList>
                <AddTodoForm />
            </TodoList>
        </div>
    );
}
