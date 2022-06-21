interface Pupil {
    pupil_id: Number;
    pupil_name: String;
    grade: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
    test_name: string;
    score: string;
    date: string;
}

export default Pupil;