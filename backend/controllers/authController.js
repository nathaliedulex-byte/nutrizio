import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import { z } from 'zod';
import User from '../models/User.js';
import PasswordResetToken from '../models/PasswordResetToken.js';
import { generateToken } from '../utils/generateToken.js';
import { sendResetEmail } from '../utils/mailer.js';
const signupSchema = z.object({
  name: z.string().min(2),
  age: z.number().min(10).max(120),
  gender: z.string().min(1),
  weight: z.number().min(20).max(400),
  height: z.number().min(80).max(250),
  email: z.string().email(),
  password: z.string().min(8)
});
export const signup = async (req, res) => {
  const parsed = signupSchema.parse(req.body);
  const exists = await User.findOne({ email: parsed.email });
  if (exists) return res.status(409).json({ message: 'Email already exists' });
  const password = await bcrypt.hash(parsed.password, 12);
  const user = await User.create({ ...parsed, password });
  res.status(201).json({ token: generateToken(user._id), user: { id: user._id, name: user.name, email: user.email } });
};
export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) return res.status(401).json({ message: 'Invalid credentials' });
  res.json({ token: generateToken(user._id), user: { id: user._id, name: user.name, email: user.email } });
};
export const forgotPassword = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.json({ message: 'If the email exists, a reset link has been sent.' });
  const rawToken = crypto.randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + 1000 * 60 * 30);
  await PasswordResetToken.create({ user: user._id, token: rawToken, expiresAt });
  await sendResetEmail({ to: user.email, token: rawToken });
  res.json({ message: 'If the email exists, a reset link has been sent.' });
};
export const resetPassword = async (req, res) => {
  const record = await PasswordResetToken.findOne({ token: req.params.token });
  if (!record || record.expiresAt < new Date()) return res.status(400).json({ message: 'Reset token invalid or expired' });
  const user = await User.findById(record.user);
  user.password = await bcrypt.hash(req.body.password, 12);
  await user.save();
  await PasswordResetToken.deleteOne({ _id: record._id });
  res.json({ message: 'Password reset successful' });
};
export const profile = async (req, res) => res.json(req.user);
