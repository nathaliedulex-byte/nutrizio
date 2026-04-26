import express from 'express';
import { chatbotReply } from '../controllers/chatbotController.js';
import { protect } from '../middleware/authMiddleware.js';
import { chatLimiter } from '../middleware/rateLimiter.js';
const router = express.Router();
router.post('/', protect, chatLimiter, chatbotReply);
export default router;
