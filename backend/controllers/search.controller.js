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
  console.log("поиск по запросу", req.query.q);
  const { q } = req.query;

  try {
    const pages = await getPages(q);
    if (!pages || pages.length === 0) {
      return res.status(200).json([]);
    }

    // Собираем все ссылки из найденных документов
    const urls = pages.flatMap(page => page.url || []);
    console.log(urls);
    return res.status(200).json(urls);
  } catch (error) {
    console.error("Ошибка при поиске:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

