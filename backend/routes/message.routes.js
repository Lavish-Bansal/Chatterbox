import express from "express";
import { getMessage, sendMessage } from "../controllers/messages.controller.js";
import secureRoute from "../middleware/auth.middleware.js";

const router = express.Router();

router.route("/send/:id").post(secureRoute, sendMessage);
router.route("/get/:id").get(secureRoute, getMessage);

export default router;
