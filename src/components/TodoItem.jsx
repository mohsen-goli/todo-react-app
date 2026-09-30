import { useState } from "react";

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleDoubleClick = () => {
    setIsEditing(true);
    setEditText(todo.text);
  };

  const handleSave = () => {
    const trimmed = editText.trim();
    if (trimmed && trimmed !== todo.text) {
      onEdit(todo.id, trimmed);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <li className="flex items-center gap-3 p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors group">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5 accent-cyan-500 cursor-pointer"
      />

      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleSave}
          autoFocus
          className="flex-1 px-3 py-1 bg-slate-900 text-white rounded border border-cyan-400 focus:outline-none"
        />
      ) : (
        <span
          onDoubleClick={handleDoubleClick}
          className={`flex-1 cursor-pointer select-none ${
            todo.completed ? "line-through text-slate-500" : "text-white"
          }`}
          title="Double-click to edit"
        >
          {todo.text}
        </span>
      )}

      <button
        onClick={() => onDelete(todo.id)}
        className="px-3 py-1 text-sm text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded transition-colors opacity-0 group-hover:opacity-100"
        aria-label="Delete todo"
      >
        ✕
      </button>
    </li>
  );
}

export default TodoItem;
