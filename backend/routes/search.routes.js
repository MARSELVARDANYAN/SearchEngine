import express from 'express';
import {  getPages } from '../models/pages.js';


const searchRouter = express.Router();    

searchRouter.get('/search', async (req, res) => {
    const { q } = req.query;
    try {
        const engines = await getPages(q);
        res.status(200).json(engines);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



searchRouter.get('/poisk', async (req, res) => {
    const { q } = req.query;
    try {
        const page = await getPages(q);
        if(page.length === 0) {
            return res.status(200).json(null);
        }
        res.json(page[0].url);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default searchRouter;