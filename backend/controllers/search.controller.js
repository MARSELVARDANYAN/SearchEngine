import { getPages } from "../models/pages.js";

export const searchController = async (req, res) => {
  const { q } = req.query;
  try {
    const engines = await getPages(q);
    res.status(200).json(engines);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const poiskController = async (req, res) => {
  const { q } = req.query;
  try {
    const page = await getPages(q);
    console.log(page);
    if (page.length === 0) {
      return res.status(200).json(null);
    }
    res.json(page[0].title);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
