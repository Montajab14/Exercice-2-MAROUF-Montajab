import { pool } from "../config/db.js";

export default class Todo {
  static async getAll() {
    const result = await pool.query("SELECT * FROM todos ORDER BY id ASC");
    return result.rows;
  }

  static async addTask(title) {
    const result = await pool.query(
      "INSERT INTO todos (title) VALUES ($1) RETURNING *",
      [title]
    );
    return result.rows[0];
  }

  static async deleteTask(id) {
    const result = await pool.query(
      "DELETE FROM todos WHERE id=$1 RETURNING *",
      [id]
    );
    return result.rows[0];
  }

  static async toggleDone(id) {
    const result = await pool.query(
      "UPDATE todos SET done = NOT done WHERE id=$1 RETURNING *",
      [id]
    );
    return result.rows[0];
  }
}
