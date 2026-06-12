import { Router } from "express";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { updateProgress, fetchProgress } from "./progress.controller";

const router = Router();

/**
 * Protected routes
 */
router.use(authMiddleware);

router.post("/", updateProgress);
router.get("/", fetchProgress);

export default router;
