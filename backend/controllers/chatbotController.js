import { askNutritionChatbot } from '../services/aiService.js';
export const chatbotReply = async (req, res) => {
  const context = { user: { goal: req.user?.preferences?.goal || 'maintenance' } };
  const result = await askNutritionChatbot(req.body.message, context);
  res.json(result);
};
