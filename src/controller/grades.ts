import readCSV from "../helper/readCSV";
import path from "path";

export default async (req: any, res: any) => {
    const { grade } = req.params;
    try {
        if (grade > 8 || grade < 1) throw new Error("Please select grades between 1 - 8")
        const csvData = await readCSV(
            path.join(__dirname, "../data/take_home_assignment_data.csv"));
        const response = csvData.filter(pupil => {
            if (grade) {
                return pupil.grade === grade;
            }
            return !!pupil.grade;
        });
        res.status(200).send(response)
    } catch (e: any) {
        res.status(400).send(e?.message || e)
    }
}