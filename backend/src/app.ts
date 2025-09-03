import express from "express";
import authRoutes from "./routes/auth.routes";

const app = express();

app.use(express.json());

app.use(authRoutes);

app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;
