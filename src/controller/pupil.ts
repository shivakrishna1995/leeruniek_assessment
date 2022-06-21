import readCSV from "../helper/readCSV";
import path from "path";

export default async (req: any, res: any) => {
    const { id } = req.params;
    try {
        const csvData = await readCSV(
            path.join(__dirname, "../data/take_home_assignment_data.csv"));
        const response = csvData.filter(pupil => pupil.pupil_id === id);
        res.status(200).send(response)
    } catch (e: any) {
        res.status(400).send(e?.message || e)
    }
}