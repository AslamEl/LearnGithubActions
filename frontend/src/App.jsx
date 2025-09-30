import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import { getTasks, createTask, updateTask, deleteTask } from "./services/taskService";

export default function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    const data = await getTasks();
    setTasks(data);
  }

  async function handleAdd(title) {
    const newTask = await createTask(title);
    setTasks((prev) => [newTask, ...prev]);
  }

  async function handleToggle(task) {
    const updated = await updateTask({
      ...task,
      completed: !task.completed,
    });
    setTasks((prev) =>
      prev.map((t) => (t._id === updated._id ? updated : t))
    );
  }

  async function handleEdit(task) {
    const newTitle = prompt("Edit task", task.title);
    if (!newTitle) return;
    const updated = await updateTask({ ...task, title: newTitle });
    setTasks((prev) =>
      prev.map((t) => (t._id === updated._id ? updated : t))
    );
  }

  async function handleDelete(id) {
    await deleteTask(id);
    setTasks((prev) => prev.filter((t) => t._id !== id));
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">My Simple Tasks</h1>
        <TaskForm onAdd={handleAdd} />
        <TaskList
          tasks={tasks}
          onToggle={handleToggle}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
        <Footer />
      </div>
    </div>
  );
}
