import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12 px-4 bg-slate-800/50 rounded-lg border border-dashed border-slate-700">
        <p className="text-slate-400 text-lg mb-2">No todos yet 📝</p>
        <p className="text-slate-500 text-sm">
          Add your first task above to get started!
        </p>
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
