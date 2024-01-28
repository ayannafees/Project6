import express from 'express'
import {login,signup,getAllUsers} from '../controllers/users';

const router = express.Router();

router.route("/").get(getAllUsers)
router.route("/login").post(login);
router.post("/register",signup);

export default router;
