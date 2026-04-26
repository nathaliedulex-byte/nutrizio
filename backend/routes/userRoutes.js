import express from 'express';
import { deleteAccount, exportUserData, updateProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();
router.use(protect);
router.put('/profile', updateProfile);
router.get('/export', exportUserData);
router.delete('/account', deleteAccount);
export default router;
