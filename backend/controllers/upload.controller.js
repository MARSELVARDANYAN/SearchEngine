import { splitContent } from "../utils/splitContent.js";
import { createPages } from "../models/pages.js";
import fs from "fs";

export const uploadController = async (req, res) => {
  const filePath = req.file.path;

  if (!filePath || !req.file) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const content = fs.readFileSync(filePath, "utf-8");
    const splitedContent = splitContent(content);
    const newObject = { title: filePath, terms: splitedContent };
    await createPages(newObject);
    res.json(newObject);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
