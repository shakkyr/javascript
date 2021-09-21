// school.assignStudent = (studentId, subject) => {
//     const student = school.findPerson("students", studentId);
//     const teacher = school.teachers.find((teacher) => {
//       return teacher.subjects.includes(subject) && teacher.capacityLeft;
//     });
//     if (teacher) {
//       teacher.capacityLeft--;
//       teacher.students.push(student);
//       return teacher;
//     } else {
//       return console.log("Sorry no teachers");
//     }
//   };



//   school.assignTeachersSubject = (teachersId, subject) => {
//     const teacher = school.findPerson("teachers", teachersId);
//     if (!teacher.subjects.includes(subject)) {
//       teacher.subjects.push(subject);
//       return teacher;
//     }
//   };



//   function assignStudent(student, subject) {
//     //מוצאת סטודנת לפי הגדרה
//     let studentObj = school.students.find(
//       (studentQuaery) => (studentQuaery.name = student)
//     );
//     //   מוצא את המורה שיש לו מקום לקבל סטודנט ומלמד את המקוצע הרלוונטי והופך למערך
//     let teacherObj = school.teachers.filter(
//       (teacherQuaery) =>
//         teacherQuaery.subjects.includes(subject) &&
//         teacherQuaery.capleft > 0
//     );
//     // אם יש מורה במערך הוא מקבל סטודנט ויורד לו מקום אחד פנוי. אחרת , לא!!.1
//     if (teacherObj.length > 0) {
//       teacherObj[0].students.push(studentObj);
//       teacherObj[0].capleft--;
//     } else {
//       console.log(`No!!`);
//     }
//   }


const school = {
    teachers: [
    {
    id: 1,
    name: "Pinchas",
    subjects: ["chemistry", "biology", "physics"],
    students: [],
    capacityLeft: 3,
    },
    {
    id: 2,
    name: "Williams",
    subjects: ["history", "ethics"],
    students: [],
    capacityLeft: 2,
    },
    ],
    students: [
    {
    id: 10,
    name: "Jennifer",
    age: 20,
    },
    {
    id: 11,
    name: "Howard",
    age: 23,
    },
    {
    id: 12,
    name: "Old-Timmy",
    age: 86,
    },
    {
    id:13,
    name: "Houston",
    age: 21,
    },
    ],
    
};

// ------------------------------------------ 1 ----------------------------------------
function findPerson (type, id) {
    let resu = [];

    // 
    if (type === 'teachers' || type === "students"){

                // resu = school[type].filter(per =>  per.id === id  )
                return school[type].find(per =>  per.id === id )
    }
    // if (resu.length === 0 ) {
    //         return 'nobody'
    //     };

    // return resu;
 }

console.log(findPerson('students', 10));


function assignStudent (id , subj) {
     let tec1 =   school.teachers.find(per =>  (per.subjects.includes(subj) && per.capacityLeft > 0))
     let stud1 =   school.students.find(per =>  (per.id === id ))

     if ( tec1 !== undefined ){ 
        
        if( stud1 !== undefined    ){
            tec1.students.push(stud1);
            tec1.capacityLeft-- ;
            return true
          
     }
     else return 0;
    
    }
    else return -1;
}


function assignAllStudent (subj){
    
    for (let i= 0; i < school.students.length ; i++ ){
     let check = assignStudent (school.students[i].id , subj);
      
     if ( check == -1){
            return 'no teacher available'
     }

     
    }
    return 'ok'
}

console.log(assignAllStudent ("history"));
console.log(school.teachers);



function assignTeachersSubject ( tId , subj) {
    let teac2 =  findPerson("teachers" , tId);
        teac2.subjects.push(subj);
}


// console.log(assignStudent (12 , "history"));

// // school.assignStudent = (id , sub) 