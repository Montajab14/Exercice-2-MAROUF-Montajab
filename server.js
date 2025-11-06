import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import todoRoutes from "./src/routes/ToDoRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
// Routes

13

app. use("/api/todos", todoRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));