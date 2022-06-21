require("dotenv").config();
import express from "express";
import GradeRoutes from "./routes/grade";
import PupilRoutes from "./routes/pupil";
import ScoreRoutes from "./routes/score";

const NODE_APP_PORT = process.env.NODE_APP_PORT || 3000;
const app = express();

app.use("/grades", GradeRoutes);
app.use("/pupil", PupilRoutes);
app.use("/scores", ScoreRoutes);

app.listen(NODE_APP_PORT, () => {
    console.log(`Server is listening on PORT ${NODE_APP_PORT}`)
})