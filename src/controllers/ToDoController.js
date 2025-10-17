import Todo from "../models/ToDoModel.js";

const TodoController = {
  // GET /api/todos
  list: async (req, res) => {
    try {
      const todos = await Todo.getAll();  // ✅ static method
      res.json(todos);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // POST /api/todos
  add: async (req, res) => {
    try {
      const { title } = req.body;
      if (!title) return res.status(400).json({ error: "Le champ 'title' est requis" });
      const newTask = await Todo.addTask(title);
      res.status(201).json(newTask);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // DELETE /api/todos/:id
  delete: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const deleted = await Todo.deleteTask(id);
      if (!deleted) return res.status(404).json({ error: "Tâche non trouvée" });
      res.json({ message: "Tâche supprimée", deleted });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  // PATCH /api/todos/:id
  toggleDone: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updated = await Todo.toggleDone(id);
      if (!updated) return res.status(404).json({ error: "Tâche non trouvée" });
      res.json(updated);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};

export default TodoController;
