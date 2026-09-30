function FilterBar({ filter, onFilterChange, todos, onClearCompleted }) {
  const activeCount = todos.filter((t) => !t.completed).length;
  const completedCount = todos.filter((t) => t.completed).length;

  const filters = [
    { key: "all", label: "All", count: todos.length },
    { key: "active", label: "Active", count: activeCount },
    { key: "completed", label: "Completed", count: completedCount },
  ];

  return (
    <div className="flex items-center justify-between mt-6 p-3 bg-slate-800/50 rounded-lg border border-slate-700">
      <div className="flex gap-1">
        {filters.map(({ key, label, count }) => (
          <button
            key={key}
            onClick={() => onFilterChange(key)}
            className={`px-3 py-1.5 text-sm rounded transition-colors ${
              filter === key
                ? "bg-cyan-500 text-slate-900 font-semibold"
                : "text-slate-400 hover:text-white hover:bg-slate-700"
            }`}
          >
            {label}
            <span className="ml-1.5 text-xs opacity-70">{count}</span>
          </button>
        ))}
      </div>

      <button
        onClick={onClearCompleted}
        disabled={completedCount === 0}
        className="px-3 py-1.5 text-sm text-slate-400 hover:text-red-400 hover:bg-red-400/10 rounded transition-colors disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:text-slate-400 disabled:hover:bg-transparent"
      >
        Clear Completed
      </button>
    </div>
  );
}

export default FilterBar;
