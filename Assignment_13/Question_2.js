import "core-js/actual/array/group-by";

let students = [
    { name: "John", marks: "92" },
    { name: "Oliver", marks: "85" },
    { name: "Michael", marks: "79" },
    { name: "Dwight", marks: "64" },
    { name: "Kevin", marks: "48" },
];

function getGrades(grd) {
    let grade = "";
    switch (true) {
        case grd > 90 && grd <= 100:
            grade = "A";
            break;
        case grd > 80 && grd <= 90:
            grade = "B";
            break;
        case grd > 70 && grd <= 80:
            grade = "C";
            break;
        case grd > 60 && grd <= 70:
            grade = "D";
            break;
        case grd > 50 && grd <= 60:
            grade = "E";
            break;
        default:
            grade = "F";
            break;
    }
    return grade;
}

for (let i of students) {
    let grd = getGrades(i.marks);
    i.grade = grd;
}

let group = students.groupBy(grp => {
    return grp.grade;
});

console.log(students);

console.log(group); // not working