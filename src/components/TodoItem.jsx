function TodoItem({ todo }) {
  return (
    <li className="flex items-center gap-3 p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => {}}
        className="w-5 h-5 accent-cyan-500 cursor-pointer"
      />
      <span
        className={`flex-1 ${
          todo.completed ? "line-through text-slate-500" : "text-white"
        }`}
      >
        {todo.text}
      </span>
    </li>
  );
}

export default TodoItem;
