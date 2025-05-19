import { getDB } from "../config/db.js";

export const getPages = async (term) => {
  try {
    const db = getDB();
    return await db.collection("pages").find({ word: term }).toArray();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const createPages = async (newPage) => {
  try {
    const db = getDB();
    const existing = await db.collection("pages").insertOne({
      word: newPage.word,
      url: [newPage.url[0]],
    });

    return existing;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const findOnePage = async (term) => {
  try {
    const db = getDB();
    return await db.collection("pages").findOne({ word: term });
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updatePage = async (word, newUrl) => {
  try {
    const db = getDB();
    const result = await db
      .collection("pages")
      .updateOne({ word }, { $addToSet: { url: newUrl } });
    return result;
  } catch (error) {
    console.error("Error updating page:", error);
    return null;
  }
};
