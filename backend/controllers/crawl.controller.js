import axios from 'axios';
import * as cheerio from 'cheerio';
import { createPages } from "../models/pages.js";
import { splitContent } from "../utils/splitContent.js";

export const crawlController = async (req, res) => {
    const { url } = req.body;
    if(!url) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    
    try {
        const response = await axios.get(url)
        const $ = cheerio.load(response.data);
        const finish = $('body').text();
        const splitedContent = splitContent(finish);
        const newObject = {  url: url, terms: splitedContent };
        await createPages(newObject);
        res.json(newObject);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}