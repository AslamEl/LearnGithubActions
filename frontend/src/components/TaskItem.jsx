export default function TaskItem({ task, onToggle, onEdit, onDelete }) {
  return (
    <li className="flex items-center justify-between p-2 border-b">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task)}
        />
        <span className={task.completed ? "line-through text-gray-400" : ""}>
          {task.title}
        </span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(task)}
          className="text-sm text-blue-500"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(task._id)}
          className="text-sm text-red-500"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
