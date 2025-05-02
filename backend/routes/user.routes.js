import { Router } from "express";
import {
  allUsers,
  login,
  logout,
  signup,
} from "../controllers/user.controller.js";
import secureRoute from "../middleware/auth.middleware.js";

const router = Router();

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/allusers").get(secureRoute, allUsers);

export default router;
