import express from 'express';
import { createMeal, deleteMeal, listMeals } from '../controllers/mealController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();
router.use(protect);
router.route('/').post(createMeal).get(listMeals);
router.delete('/:id', deleteMeal);
export default router;
