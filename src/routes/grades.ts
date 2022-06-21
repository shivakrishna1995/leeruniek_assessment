import { Router } from "express";
import GradesController from "../controller/grades";

const router = Router();

/*
    method: GET
    route: /grades
    params: none
    response: List<Pupil>
    descriptioon: return the list all the pupils that have taken a test in a grade
*/
router.get("/", GradesController);
/*
    method: GET
    route: /grades/{grade}
    params: grade
    response: List<Pupil>
    descriptioon: return the list the pupils that have taken a test in a specific grade
*/
router.get("/:grade", GradesController);

export default router;