import MealLog from '../models/MealLog.js';
export const createMeal = async (req, res) => {
  const meal = await MealLog.create({ ...req.body, user: req.user._id });
  res.status(201).json(meal);
};
export const listMeals = async (req, res) => {
  const meals = await MealLog.find({ user: req.user._id }).sort({ loggedAt: -1 }).limit(100);
  res.json(meals);
};
export const deleteMeal = async (req, res) => {
  await MealLog.deleteOne({ _id: req.params.id, user: req.user._id });
  res.json({ message: 'Meal removed' });
};
