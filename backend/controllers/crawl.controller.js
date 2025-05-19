import axios from "axios";
import * as cheerio from "cheerio";
import { createPages, findOnePage, updatePage } from "../models/pages.js";
import { splitContent } from "../utils/splitContent.js";
import { isValidTerm } from "../services/crael.service.js";

export const crawlController = async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: "Missing required fields" });

  let page = null;

  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const finish = $("body").text();
    const splitedContent = splitContent(finish);
    for (const term of splitedContent) {
      if (!term.trim() || term.length < 2 || term.length > 50) continue;
      if (!isValidTerm(term)) continue;

      const existing = await findOnePage(term);
      if (existing) {
        if (!existing.url.includes(url)) {
          page = await updatePage(term, url);
        }
      } else {
        page = await createPages({ word: term, url: [url] });
      }
    }
    res.status(200).json({ message: "Crawling completed", page });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
