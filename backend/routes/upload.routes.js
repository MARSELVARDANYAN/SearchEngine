import express from "express";
import multer from "multer";
import { uploadController } from "../controllers/upload.controller.js";

const upload = multer({ dest: "public/uploads" });

const uploadRouter = express.Router();

uploadRouter.post("/upload", upload.single("textfile"), uploadController);

export default uploadRouter;