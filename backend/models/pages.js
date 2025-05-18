import { getDB } from "../config/db.js";

 async function getPages(term) {
    try {
        const db = getDB();
        return await db.collection('pages').find({terms: term}).toArray();
    } catch (error) {
        console.error(error);
        return [];
    }
}  

async function createPages(newPage) {
    try {
        const db = getDB();
        return await db.collection('pages').insertOne(newPage);
    } catch (error) {
        console.error(error);
    }
}



export {
    getPages,
    createPages
}

