import { Router } from "express";
import GradesController from "../controller/grades";

const router = Router();

// list all the pupils that have taken a test in a grade
router.get("/", GradesController);
// list the pupils that have taken a test in a specific grade
router.get("/:grade", GradesController);

export default router;