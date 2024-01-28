// src/server.ts
import express, { Application, Request, Response } from 'express';
import connectDB from './config/db';
import dotenv from 'dotenv';
const cors = require("cors");
import UserRoutes from './routes/UserRoutes';

const port = 8000;

const app:Application = express();
app.use(cors());
app.use(express.json());

dotenv.config();

connectDB();

// Default
app.get("/api", (req: Request, res: Response) =>  {
  res.status(201).json({ message: "you are at... /api" });
})

// User Route
app.use("/api/auth", UserRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
