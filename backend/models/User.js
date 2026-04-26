import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  email: { type: String, required: true, unique: true, index: true, lowercase: true },
  password: { type: String, required: true },
  preferences: { allergies: [String], goal: { type: String, default: 'maintenance' } },
  consent: {
    privacyAccepted: { type: Boolean, default: true },
    marketingOptIn: { type: Boolean, default: false }
  }
}, { timestamps: true });
export default mongoose.model('User', userSchema);
