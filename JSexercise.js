const StudentId= [
    {
        Name: "kly",
        IDNum: 101011,
        Year: 2020,
        Grade: 76,
    },
    {
        Name: "diego",
        IDNum: 101010,
        Year: 2020,
        Grade: 75,
    },
    {
        Name: "val",
        IDNum: 101012,
        Year: 2020,
        Grade: 77,
    },
    {
        Name: "cis",
        IDNum: 101013,
        Year: 2020,
        Grade: 78,
    },
    {
        Name: "kristian",
        IDNum: 101014,
        Year: 2020,
        Grade: 79,
    },
    {
        Name: "kurt",
        IDNum: 101015,
        Year: 2020,
        Grade: 80,
    },
    {
        Name: "jay",
        IDNum: 101016,
        Year: 2020,
        Grade: 81,
    },
    {
        Name: "marian",
        IDNum: 101017,
        Year: 2020,
        Grade: 82,
    },
    {
        Name: "lyd",
        IDNum: 101018,
        Year: 2020,
        Grade: 83,
    },
    {
        Name: "adam",
        IDNum: 101019,
        Year: 2020,
        Grade: 84,
    }
]


function search(StudentId){
    let highestStudent = StudentId[0];
    let lowestStudent = StudentId[0];

    for (let i = 0; i < 10; i++){
        if (StudentId[i].Grade > highestStudent.Grade){
            highestStudent = StudentId[i];
        }
        if (StudentId[i].Grade < lowestStudent.Grade){
            lowestStudent = StudentId[i];
        }
    }

    console.log("Highest Graded Student:", highestStudent);
    console.log("Lowest Graded Student:", lowestStudent);
}

search(StudentId);

