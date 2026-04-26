import { analyzeImage, estimateFoodByName } from '../services/aiService.js';
export const analyzeFoodImage = async (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'Image is required' });
  const result = await analyzeImage(req.file.buffer, req.file.originalname);
  res.json(result);
};
export const manualEstimate = async (req, res) => {
  const { query, grams } = req.body;
  const result = await estimateFoodByName(query, grams);
  res.json(result);
};
