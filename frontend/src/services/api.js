import axios from "axios";

export const fetchUrl = async (query) => {
  try {
    const response = await axios.get(`/api/poisk?q=${encodeURIComponent(query)}`);
    return Array.isArray(response.data) ? response.data : [];
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
    return [];
  }
};
