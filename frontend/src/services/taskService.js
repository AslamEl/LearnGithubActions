const API = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export async function getTasks() {
  const res = await fetch(`${API}/api/tasks`);
  return res.json();
}

export async function createTask(title) {
  const res = await fetch(`${API}/api/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title })
  });
  return res.json();
}

export async function updateTask(task) {
  const res = await fetch(`${API}/api/tasks/${task._id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: task.title, completed: task.completed })
  });
  return res.json();
}

export async function deleteTask(id) {
  await fetch(`${API}/api/tasks/${id}`, { method: 'DELETE' });
}
