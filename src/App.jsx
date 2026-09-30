import { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterBar from "./components/FilterBar";

function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (text) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text: text,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTodos([newTodo, ...todos]);
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)),
    );
  };

  const handleClearCompleted = () => {
    const completedCount = todos.filter((t) => t.completed).length;
    if (completedCount === 0) return;

    const confirmed = window.confirm(
      `Delete ${completedCount} completed todo${completedCount > 1 ? "s" : ""}?`,
    );
    if (!confirmed) return;

    setTodos(todos.filter((t) => !t.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <Header />
        <TodoForm onAdd={handleAddTodo} />
        <TodoList
          todos={filteredTodos}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
        <FilterBar
          filter={filter}
          onFilterChange={setFilter}
          todos={todos}
          onClearCompleted={handleClearCompleted}
        />
      </div>
    </div>
  );
}

export default App;
