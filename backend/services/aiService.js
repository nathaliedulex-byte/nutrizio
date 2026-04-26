import axios from 'axios';
const client = axios.create({ baseURL: process.env.AI_SERVICE_URL, timeout: 30000 });
export const analyzeImage = async (buffer, filename) => {
  const payload = { image_base64: buffer.toString('base64'), filename };
  const { data } = await client.post('/analyze-food', payload);
  return data;
};
export const estimateFoodByName = async (query, grams) => {
  const { data } = await client.post('/estimate-food', { query, grams });
  return data;
};
export const askNutritionChatbot = async (message, context) => {
  const { data } = await client.post('/chat', { message, context });
  return data;
};
