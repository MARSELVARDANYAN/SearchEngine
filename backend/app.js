import express from "express";
import cors from "cors";
import { connectDb, closeDB } from "./config/db.js";
import searchRouter from "./routes/search.routes.js";
import crawlRouter from "./routes/crawl.routes.js";
import uploadRouter from "./routes/upload.routes.js";
import morgan from "morgan";
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
app.use(morgan("dev")); // Логирует все запросы


app.use(cors());
app.use(express.json());
//app.use(express.static("public"));


app.use("/api", searchRouter);
app.use("/api", crawlRouter);
app.use("/api", uploadRouter);

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.join(__dirname, '../frontend/dist/')));

// Fallback для React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});


const PORT = process.env.PORT || 4000;

const startServer = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

startServer();

process.on("SIGINT", async () => {
  console.log("\n🛑 SIGINT received");
  await closeDB();
  process.exit();
});

process.on("SIGTERM", async () => {
  console.log("\n🛑 SIGTERM received");
  await closeDB();
  process.exit();
});
