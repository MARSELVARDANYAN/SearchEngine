import express from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { uploadController } from "../controllers/upload.controller.js";


const uploadRouter = express.Router();

uploadRouter.post("/upload", upload.array("textfile", 3), /*upload.single("textfile"),*/ uploadController);

export default uploadRouter;