import { Router } from "express";
import Scores from "../controller/scores";

const router = Router();

/*
    method: GET
    route: /scores
    params: grade, pupil_id, test_name, min_score, max_score, max_date, min_date, max_date
    response: Object<{average, median}>
    descriptioon: return the average and median value of all scores with the possibilities to add the following filters:
        - By grade
        - By pupil_id
        - By test_name
        - By minimum and maximum scores considered (inclusive)
        - By minimum and maximum date considered (inclusive)
*/
router.get("/", Scores);

export default router;