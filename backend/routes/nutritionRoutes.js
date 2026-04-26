import express from 'express';
import { analyzeFoodImage, manualEstimate } from '../controllers/nutritionController.js';
import { protect } from '../middleware/authMiddleware.js';
import { upload } from '../middleware/uploadMiddleware.js';
const router = express.Router();
router.post('/analyze-image', protect, upload.single('image'), analyzeFoodImage);
router.post('/manual-estimate', protect, manualEstimate);
export default router;
