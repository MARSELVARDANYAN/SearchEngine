import express from "express";
import cors from "cors";
import { connectDb } from "./config/db.js";
import searchRouter from "./routes/search.routes.js";
import crawlRouter from "./routes/crawl.routes.js";
import uploadRouter from "./routes/upload.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/", searchRouter);
app.use("/", crawlRouter);
app.use("/", uploadRouter);

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
