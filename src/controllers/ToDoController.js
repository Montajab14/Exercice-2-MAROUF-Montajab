import Todo from "../models/ToDoModel.js";

const todoModel = new Todo();

const TodoController = {
  // GET /api/todos
  list: (req, res) => {
    const todos = todoModel.getAll();
    res.json(todos);
  },

  // POST /api/todos
  add: (req, res) => {
    const { title } = req.body;
    if (!title) {
      return res.status(400).json({ error: "Le champ 'title' est requis" });
    }
    const newTask = todoModel.addTask(title);
    res.status(201).json(newTask);
  },

  // DELETE /api/todos/:id
  delete: (req, res) => {
    const id = parseInt(req.params.id);
    const deleted = todoModel.deleteTask(id);
    if (!deleted) {
      return res.status(404).json({ error: "Tâche non trouvée" });
    }
    res.json({ message: "Tâche supprimée", deleted });
  }
};

export default TodoController;
