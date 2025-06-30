let subjectsArray = [];
const courses = [
    { name: "اساسيات التمريض I", hours: 3, level: 1, code: "NUR 101" },
    { name: "اساسيات التمريض I (عملي)", hours: 3, level: 1, code: "CLN 101" },
    { name: "اخلاقيات المهن والتشريعات", hours: 1, level: 1, code: "NUR 102" },
    { name: "علم وظائف الأعضاء", hours: 3, level: 1, code: "MED 101" },
    { name: "علم التشريح (نظري)", hours: 3, level: 1, code: "MED 102" },
    { name: "تعذية وكيمياء حيوية", hours: 2, level: 1, code: "MED 103" },
    { name: "ميكروبيولوجي ومكافحة العدوى", hours: 2, level: 1, code: "MED 104" },
    { name: "اللغة الإنجليزية I", hours: 2, level: 1, code: "GEN 101" },
    { name: "اساسيات التمريض II", hours: 3, level: 1, code: "NUR 103",},
    { name: "اساسيات التمريض II (عملي)", hours: 3, level: 1, code: "CLN 102",},
    { name: "المعلوماتية وتكنولوجيا التعليم في التمريض", hours: 2, level: 1, code: "NUR 104",},
    { name: "مهارات التواصل في التمريض", hours: 2, level: 1, code: "NUR 105",},
    { name: "الرعاية التمريضية الشاملة", hours: 2, level: 1, code: "NUR 106",},
    { name: "علم الأدوية", hours: 2, level: 1, code: "MED 105", },
    { name: "التثقيف الصحي", hours: 2, level: 1, code: "SUP 101",},
    { name: "التفكير الناقد", hours: 2, level: 1, code: "GEN 102",},
    { name: "تمريض البالغين I", hours: 3, level: 2, code: "NUR 201" },
    { name: "تمريض البالغين I (عملي)", hours: 4, level: 2, code: "CLN 201" },
    { name: "التقييم الصحي (نظري)", hours: 3, level: 2, code: "NUR 202" },
    { name: "التغذية التطبيقية", hours: 2, level: 2, code: "MED 201" },
    { name: "الباثوفسيولوجي", hours: 2, level: 2, code: "MED 202" },
    { name: "علم النفس", hours: 2, level: 2, code: "SUP 201" },
    { name: "اللغة الإنجليزية II", hours: 2, level: 2, code: "GEN 201" },
    { name: "تمريض البالغين II", hours: 3, level: 2, code: "NUR 203" },
    { name: "تمريض البالغين II (عملي)", hours: 4, level: 2, code: "CLN 202" },
    { name: "جراحة عامة", hours: 2, level: 2, code: "MED 203" },
    { name: "أدوية تطبيقية", hours: 2, level: 2, code: "MED 204" },
    { name: "إجهاد الأعصاب", hours: 2, level: 2, code: "SUP 203" },
    { name: "مبادئ إحصاء", hours: 2, level: 2, code: "SUP 203" },
    { name: "سيادة الأعمال", hours: 2, level: 2, code: "GEN 202" },
    { name: "تمريض النساء والولادة", hours: 3, level: 3, code: "NUR 301" },
    { name: "تمريض النساء والولادة (عملي)", hours: 4, level: 3, code: "CLN 301" },
    { name: "تمريض الحالات الحرجة والطوارئ", hours: 3, level: 3, code: "NUR 302" },
    { name: "تمريض الحالات الحرجة والطوارئ (عملي)", hours: 3, level: 3, code: "CLN 302" },
    { name: "البحث العلمي في التمريض", hours: 2, level: 3, code: "NUR 303" },
    { name: "علم الحالات الحرجة", hours: 1, level: 3, code: "MED 301" },
    { name: "جراحة الطوارئ", hours: 1, level: 3, code: "MED 302" },
    { name: "علم النساء والولادة", hours: 2, level: 3, code: "MED 303" },
    { name: "تمريض الأطفال", hours: 3, level: 3, code: "NUR 304" },
    { name: "تمريض الأطفال (عملي)", hours: 4, level: 3, code: "CLN 303" },
    { name: "النمو والتطور في مراحل الحياة المختلفة", hours: 2, level: 3, code: "NUR 305" },
    { name: "استراتيجيات التدريس في تعليم التمريض", hours: 2, level: 3, code: "NUR 306" },
    { name: "علم الأطفال", hours: 2, level: 3, code: "MED 304" },
    { name: "جراحة الأطفال", hours: 2, level: 3, code: "MED 305" },
    { name: "اللغة الإنجليزية III", hours: 2, level: 3, code: "GEN 301" },
    { name: "مقرر اختياري III", hours: 2, level: 3, code: "ELEC" },
    { name: "تمريض صحة النفسية والعقلية", hours: 3, level: 4, code: "NUR 401" },
    { name: "تمريض صحة النفسية والعقلية (عملي)", hours: 3, level: 4, code: "CLN 401" },
    { name: "إدارة التمريض", hours: 2, level: 4, code: "NUR 402" },
    { name: "إدارة التمريض (عملي)", hours: 2, level: 4, code: "CLN 402" },
    { name: "مهارات تطوير العملية في التمريض", hours: 2, level: 4, code: "NUR 403" },
    { name: "الممارسة التمريضية القائمة على الأدلة", hours: 2, level: 4, code: "NUR 404" },
    { name: "مشروع التخرج I", hours: 2, level: 4, code: "NUR 405" },
    { name: "الطب النفسي", hours: 2, level: 4, code: "MED 401" },
    { name: "تمريض صحة المجتمع", hours: 3, level: 4, code: "NUR 406" },
    { name: "تمريض صحة المجتمع (عملي)", hours: 3, level: 4, code: "CLN 403" },
    { name: "تمريض مسنين", hours: 2, level: 4, code: "NUR 407" },
    { name: "تمريض مسنين (عملي)", hours: 2, level: 4, code: "CLN 404" },
    { name: "إجراءات الجودة والأمان في الصحة العامة", hours: 2, level: 4, code: "NUR 408" },
    { name: "مشروع التخرج II", hours: 1, level: 4, code: "NUR 409" },
    { name: "الوبائيات", hours: 2, level: 4, code: "MED 402" },
    { name: "إدارة صحة عامة", hours: 2, level: 4, code: "MED 403" },
    { name: "طب مسنين", hours: 1, level: 4, code: "MED 404" },
    { name: "اللغة الإنجليزية IV", hours: 2, level: 4, code: "GEN 401" },
    { name: "علم نفس الطفل", hours: 2, level: "مقرر اختياري", code: "ELEC 501" },
    { name: "الطب البديل", hours: 2, level: "مقرر اختياري", code: "ELEC 502" },
    { name: "الدراسات البيئية", hours: 2, level: "مقرر اختياري", code: "ELEC 503" },
    { name: "صحة الفم والأسنان", hours: 2, level: "مقرر اختياري", code: "ELEC 504" },
    { name: "السلوك النفسي والتكيف", hours: 2, level: "مقرر اختياري", code: "ELEC 505" },
    { name: "مبادئ التعليم", hours: 2, level: "مقرر اختياري", code: "ELEC 506" },
    { name: "منع الشيخوخة الصحية والأمراض المزمنة", hours: 2, level: "مقرر اختياري", code: "ELEC 507" },
    { name: "النمو اللغوي", hours: 2, level: "مقرر اختياري", code: "ELEC 508" },
    { name: "ريادة اعمال", hours: 2, level: 2, code: "GEN 202" }
];

const subjectSelect = document.getElementById("subjectSelect");

courses.forEach(course => {
    const option = document.createElement("option");
    option.value = course.code;
    option.textContent = `${course.name} (${course.hours} ساعات)`;
    subjectSelect.appendChild(option);
});

function addSubject() {
    let select = document.getElementById("subjectSelect");
    let selectedOption = select.options[select.selectedIndex];
    let subjectCode = selectedOption.value;

    let selectedCourse = courses.find(course => course.code === subjectCode);

    if (!selectedCourse) {
        alert("يرجي تبليغ أدهم ان المادة غير موجودة!");
        return;
    }

    if (subjectsArray.some(subject => subject.code === selectedCourse.code)) {
        alert("تمت إضافة هذه المادة مسبقًا!");
        return;
    }

    let subjectObject = {
        name: selectedCourse.name,
        hours: selectedCourse.hours,
        code: selectedCourse.code,
        grade: null
    };
    subjectsArray.push(subjectObject);

    let listItem = document.createElement("li");
    listItem.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
    listItem.innerHTML = `${subjectObject.name} 
        <span class='badge bg-secondary'>${subjectObject.hours} ساعات</span> 
        <input type='number' class='grade-input' min='0' max='100' 
            onchange='updateGrade(${subjectsArray.length - 1}, this.value)' 
            placeholder='درجة'>
        <button class='btn btn-danger btn-sm' 
            onclick='removeSubject(this, ${subjectsArray.length - 1})'>&times;</button>`;
    
    document.getElementById("subjectList").appendChild(listItem);

    let totalHours = document.getElementById("totalHours");
    totalHours.textContent = parseInt(totalHours.textContent) + selectedCourse.hours;
}

function removeSubject(button, index) {
    let listItem = button.parentElement;
    listItem.remove();
    let removedSubject = subjectsArray.splice(index, 1)[0];
    let totalHours = document.getElementById("totalHours");
    totalHours.textContent = parseInt(totalHours.textContent) - removedSubject.hours;
}

function updateGrade(index, grade) {
    subjectsArray[index].grade = parseFloat(grade);
}

function getSubjectMark(percentage) {
    if (percentage >= 95) return "A+";
    if (percentage >= 90) return "A";
    if (percentage >= 85) return "A-";
    if (percentage >= 80) return "B+";
    if (percentage >= 75) return "B";
    if (percentage >= 70) return "C+";
    if (percentage >= 65) return "C";
    if (percentage >= 60) return "D+";
    if (percentage >= 55) return "D";
    if (percentage >= 50) return "D-";
    return "F";
}

function getGradeValue(grade) {
    const gradeMap = {
        "A+": 4, "A": 3.7, "A-": 3.4, "B+": 3, "B": 2.7,
        "C+": 2.3, "C": 2, "D+": 1.6, "D": 1.3, "D-": 1, "F": 0
    };
    return gradeMap[grade] || 0;
}

function calculateGPA() {
    let totalPoints = 0, totalHours = 0;

    subjectsArray.forEach(subject => {
        if (subject.grade !== null) {
            let percentage;
            if (subject.hours === 3) {
                percentage = (subject.grade / 150) * 100;
            } else if (subject.hours === 2) {
                percentage = (subject.grade / 100) * 100;
            } else if (subject.hours === 1) {
                percentage = (subject.grade / 50) * 100;
            } else if (subject.hours === 4) {
                percentage = (subject.grade / 200) * 100;
            } else {
                percentage = (subject.grade / (subject.hours * 50)) * 100;
            }

            subject.letterGrade = getSubjectMark(percentage);
            subject.gradeValue = getGradeValue(subject.letterGrade);
        }
    });

    subjectsArray.forEach(subject => {
        if (subject.gradeValue !== undefined) {
            totalPoints += subject.gradeValue * subject.hours;
            totalHours += subject.hours;
        }
    });

    let gpa = totalHours > 0 ? (totalPoints / totalHours).toFixed(2) : "-";
    let finalGrade;

    if (gpa === "-") {
        finalGrade = "-";
    } else {
        let totalGrade = parseFloat(gpa);
        if (totalGrade === 4) {
            finalGrade = "A+";
        } else if (totalGrade >= 3.7 && totalGrade < 4) {
            finalGrade = "A";
        } else if (totalGrade >= 3.4 && totalGrade < 3.7) {
            finalGrade = "A-";
        } else if (totalGrade >= 3 && totalGrade < 3.4) {
            finalGrade = "B+";
        } else if (totalGrade >= 2.7 && totalGrade < 3) {
            finalGrade = "B";
        } else if (totalGrade >= 2.3 && totalGrade < 2.7) {
            finalGrade = "C+";
        } else if (totalGrade >= 2 && totalGrade < 2.3) {
            finalGrade = "C";
        } else {
            finalGrade = "F";
        }
    }

    document.getElementById("gpaResult").textContent = `${gpa} (${finalGrade})`;
}
