function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="flex items-center gap-3 p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors group">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="w-5 h-5 accent-cyan-500 cursor-pointer"
      />
      <span
        className={`flex-1 ${
          todo.completed ? "line-through text-slate-500" : "text-white"
        }`}
      >
        {todo.text}
      </span>
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
