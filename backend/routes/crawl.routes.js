import express from 'express';
import { crawlController } from '../controllers/crawl.controller.js';

const crawlRouter = express.Router();

crawlRouter.post('/crawl', crawlController);

export default crawlRouter