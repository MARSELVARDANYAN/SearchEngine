import express from "express";
import {
  poiskController,
  searchController,
} from "../controllers/search.controller.js";

const searchRouter = express.Router();

searchRouter.get("/search", searchController);

searchRouter.get("/poisk", poiskController);

export default searchRouter;
