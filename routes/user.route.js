import express from "express";
import isAuthenticated from "../middlewares/isAuthenticated.js";

import {login,updateProfile, register,logout } from "../controllers/user.controller.js";
import { singleUpload } from "../middlewares/multer.js";
const router = express.Router();

router.route("/register").post( singleUpload,register);
router.route("/login").post( login);
router.route("/logout").get(logout);
router.route("/profile/update").post(singleUpload ,isAuthenticated ,updateProfile);

export default router;