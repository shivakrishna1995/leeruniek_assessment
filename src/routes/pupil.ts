import { Router } from "express";
import Pupil from "../controller/pupil";

const router = Router();

/*
    method: GET
    route: /pupil/{id}/scores
    params: id (pupil id)
    response: List<Pupil>
    descriptioon: return the list of all the scores of a pupil
*/
router.get("/:id/scores", Pupil);

export default router;