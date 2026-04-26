import mongoose from 'mongoose';
const mealLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
  name: { type: String, required: true },
  source: { type: String, enum: ['image', 'manual'], default: 'manual' },
  items: [{
    label: String,
    grams: Number,
    calories: Number,
    protein: Number,
    carbs: Number,
    fat: Number,
    micronutrients: { fiber: Number, sugar: Number, sodium: Number, potassium: Number }
  }],
  totals: { calories: Number, protein: Number, carbs: Number, fat: Number },
  imageUrl: String,
  notes: String,
  loggedAt: { type: Date, default: Date.now, index: true }
}, { timestamps: true });
mealLogSchema.index({ user: 1, loggedAt: -1 });
export default mongoose.model('MealLog', mealLogSchema);
