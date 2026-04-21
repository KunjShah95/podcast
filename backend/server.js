import express from "express";
import healthRoutes from "./routes/health.routes.js";
import podcastRoutes from "./routes/podcast.routes.js";

const app = express();
const port = Number(process.env.PORT ?? 4000);

app.use(express.json({ limit: "1mb" }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    res.sendStatus(204);
    return;
  }

  next();
});

app.get("/", (_req, res) => {
  res.json({
    message: "Podcast backend is running",
    health: "/health",
    apiBase: "/api/v1",
  });
});

app.use("/health", healthRoutes);
app.use("/api/v1", podcastRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.originalUrl} not found`,
  });
});

app.use((error, _req, res, next) => {
  void next;
  console.error(error);
  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

app.listen(port, () => {
  console.log(`Podcast backend listening on http://localhost:${port}`);
});