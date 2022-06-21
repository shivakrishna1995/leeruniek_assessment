import { parse } from "csv-parse";
import fs from "fs";
import Pupil from "../model/Pupil";

export default (path: string): Promise<Array<Pupil>> => new Promise((resolve, reject) => {
    const data: Array<Pupil> = [];
    const stream = fs.createReadStream(path);
    stream.pipe(parse({ columns: true }))
        .on("data", (row) => {
            data.push(row);
        })
        .on("end", () => {
            resolve(data);
        })
        .on("error", (error) => {
            reject(error);
        })

});