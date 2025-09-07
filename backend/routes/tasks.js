// routes/tasks.js
const express = require('express');
const router = express.Router();
const Task = require('../models/Task');


// GET /api/tasks - list tasks
router.get('/', async (req, res) => {
try {
const tasks = await Task.find().sort({ createdAt: -1 });
res.json(tasks);
} catch (err) {
res.status(500).json({ error: err.message });
}
});


// POST /api/tasks - add task
router.post('/', async (req, res) => {
try {
const { title } = req.body;
const task = new Task({ title });
await task.save();
res.status(201).json(task);
} catch (err) {
res.status(400).json({ error: err.message });
}
});


// PUT /api/tasks/:id - update task
router.put('/:id', async (req, res) => {
try {
const { title, completed } = req.body;
const task = await Task.findByIdAndUpdate(
req.params.id,
{ title, completed },
{ new: true }
);
res.json(task);
} catch (err) {
res.status(400).json({ error: err.message });
}
});


// DELETE /api/tasks/:id - delete task
router.delete('/:id', async (req, res) => {
try {
await Task.findByIdAndDelete(req.params.id);
res.json({ message: 'Task deleted' });
} catch (err) {
res.status(400).json({ error: err.message });
}
});


module.exports = router;