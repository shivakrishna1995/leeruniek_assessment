import readCSV from "../helper/readCSV";
import path from "path";

export default async (req: any, res: any) => {
    const { grade, pupil_id, test_name, min_score, max_score, min_date, max_date } = req.query;
    try {
        const csvData = await readCSV(
            path.join(__dirname, "../data/take_home_assignment_data.csv"));
        const response = csvData.filter(pupil => {
            let condition = true;
            if (grade) condition = condition && pupil.grade == grade;
            if (pupil_id) condition = condition && pupil.pupil_id == pupil_id;
            if (test_name) condition = condition && pupil.test_name == test_name;
            if (min_score) condition = condition && parseInt(pupil.score) >= parseInt(min_score);
            if (max_score) condition = condition && parseInt(pupil.score) <= parseInt(max_score);
            if (min_date) condition = condition && new Date(pupil.date) >= new Date(min_date);
            if (max_date) condition = condition && new Date(pupil.date) <= new Date(max_date);
            return condition;
        });
        res.status(200).send(response)
    } catch (e: any) {
        res.status(400).send(e?.message || e)
    }
}