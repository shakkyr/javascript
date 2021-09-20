school.assignStudent = (studentId, subject) => {
    const student = school.findPerson("students", studentId);
    const teacher = school.teachers.find((teacher) => {
      return teacher.subjects.includes(subject) && teacher.capacityLeft;
    });
    if (teacher) {
      teacher.capacityLeft--;
      teacher.students.push(student);
      return teacher;
    } else {
      return console.log("Sorry no teachers");
    }
  };



  school.assignTeachersSubject = (teachersId, subject) => {
    const teacher = school.findPerson("teachers", teachersId);
    if (!teacher.subjects.includes(subject)) {
      teacher.subjects.push(subject);
      return teacher;
    }
  };



  function assignStudent(student, subject) {
    //מוצאת סטודנת לפי הגדרה
    let studentObj = school.students.find(
      (studentQuaery) => (studentQuaery.name = student)
    );
    //   מוצא את המורה שיש לו מקום לקבל סטודנט ומלמד את המקוצע הרלוונטי והופך למערך
    let teacherObj = school.teachers.filter(
      (teacherQuaery) =>
        teacherQuaery.subjects.includes(subject) &&
        teacherQuaery.capleft > 0
    );
    // אם יש מורה במערך הוא מקבל סטודנט ויורד לו מקום אחד פנוי. אחרת , לא!!.1
    if (teacherObj.length > 0) {
      teacherObj[0].students.push(studentObj);
      teacherObj[0].capleft--;
    } else {
      console.log(`No!!`);
    }
  }