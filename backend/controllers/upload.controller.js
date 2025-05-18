import { splitContent } from "../utils/splitContent.js";
import { createPages } from "../models/pages.js";
import fs from "fs";

export const uploadController = async (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ error: "No files uploaded" });
  }
  try {
    const results = [];

    for (const file of req.files) {
      const content = fs.readFileSync(file.path, "utf-8");
      const splitedContent = splitContent(content);
      const newObject = { title: file.path, terms: splitedContent };

      await createPages(newObject);
      results.push(newObject);
    }

    res.json({ message: "Files uploaded", data: results });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Server error" });
  }
};
