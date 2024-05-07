import express from 'express';
import { deleteUser, getNotificationNumber, getUsers, profilePosts, savePost, updateUser } from '../controllers/user.controller';
import { verifyToken } from '../middleware/verifyToken';

const router = express.Router();

router.get("/", getUsers);
// router.get("/search/:id", verifyToken, getUser);
router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);
router.post("/save", verifyToken, savePost);
router.get("/profilePosts", verifyToken, profilePosts);
router.get("/notification", verifyToken, getNotificationNumber);

export default router;
