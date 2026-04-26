import User from '../models/User.js';
export const updateProfile = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.user._id, req.body, { new: true }).select('-password');
  res.json(user);
};
export const exportUserData = async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  res.json({ user, message: 'GDPR export payload' });
};
export const deleteAccount = async (req, res) => {
  await User.findByIdAndDelete(req.user._id);
  res.json({ message: 'Account deleted' });
};
