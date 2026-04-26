import MealLog from '../models/MealLog.js';
export const getDashboard = async (req, res) => {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const meals = await MealLog.find({ user: req.user._id, loggedAt: { $gte: start } }).sort({ loggedAt: -1 });
  const totals = meals.reduce((acc, meal) => {
    acc.calories += meal.totals?.calories || 0;
    acc.protein += meal.totals?.protein || 0;
    acc.carbs += meal.totals?.carbs || 0;
    acc.fat += meal.totals?.fat || 0;
    return acc;
  }, { calories: 0, protein: 0, carbs: 0, fat: 0 });
  const sevenDaysAgo = new Date(Date.now() - 6 * 24 * 60 * 60 * 1000);
  const weekly = await MealLog.aggregate([
    { $match: { user: req.user._id, loggedAt: { $gte: sevenDaysAgo } } },
    { $group: { _id: { $dateToString: { format: '%Y-%m-%d', date: '$loggedAt' } }, calories: { $sum: '$totals.calories' }, protein: { $sum: '$totals.protein' }, carbs: { $sum: '$totals.carbs' }, fat: { $sum: '$totals.fat' } } },
    { $sort: { _id: 1 } }
  ]);
  res.json({ today: totals, recentMeals: meals, weekly });
};
