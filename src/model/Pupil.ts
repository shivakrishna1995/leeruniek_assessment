interface Pupil {
    pupil_id: Number;
    pupil_name: String;
    grade: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
    test_name: String;
    score: String;
    date: String;
}

export default Pupil;