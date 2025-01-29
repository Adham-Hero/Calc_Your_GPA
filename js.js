let btn = document.getElementsByClassName("btn")[0];

btn.onclick = function () {
    let fund1 = Number(document.getElementsByClassName("fund1")[0].value);
    let fund2 = Number(document.getElementsByClassName("fund2")[0].value);
    let anato = Number(document.getElementsByClassName("anato")[0].value);
    let phsyo = Number(document.getElementsByClassName("phsyo")[0].value);
    let eng = Number(document.getElementsByClassName("eng")[0].value);
    let eth = Number(document.getElementsByClassName("eth")[0].value);
    let mic = Number(document.getElementsByClassName("mic")[0].value);
    let chem = Number(document.getElementsByClassName("chem")[0].value);
    
    function calculateMarks(subject, subjectName, maxMarks) {
        let percentage = (subject / maxMarks) * 100;
        let subjectMark;

        if (percentage >= 95 && percentage <= 100) {
            subjectMark = "AP";
        } else if (percentage >= 90 && percentage < 95) {
            subjectMark = "A";
        } else if (percentage >= 85 && percentage < 90) {
            subjectMark = "AN";
        } else if (percentage >= 80 && percentage < 85) {
            subjectMark = "BP";
        } else if (percentage >= 75 && percentage < 80) {
            subjectMark = "B";
        } else if (percentage >= 70 && percentage < 75) {
            subjectMark = "CP";
        } else if (percentage >= 65 && percentage < 70) {
            subjectMark = "C";
        } else if (percentage >= 60 && percentage < 65) {
            subjectMark = "DP";
        } else if (percentage >= 55 && percentage < 60) {
            subjectMark = "D";
        } else if (percentage >= 50 && percentage < 55) {
            subjectMark = "DN";
        } else if (percentage >= 0 && percentage < 50) {
            subjectMark = "F";
        }

        return subjectMark;
    }

    function getGradeValue(grade) {
        switch (grade) {
            case "AP":
                return 4;
            case "A":
                return 3.7;
            case "AN":
                return 3.4;
            case "BP":
                return 3;
            case "B":
                return 2.7;
            case "CP":
                return 2.3;
            case "C":
                return 2;
            case "DP":
                return 1.6;
            case "D":
                return 1.3;
            case "DN":
                return 1;
            case "F":
                return 0;
            default:
                return 0;
        }
    }

    function calculateAdjustedGrade(subjectMark, maxMarks) {
        let gradeValue = getGradeValue(subjectMark);
        if (maxMarks === 100) {
            return (gradeValue * 2) / 19;
        } else if (maxMarks === 150) {
            return (gradeValue * 3) / 19;
        } else if (maxMarks === 50) {
            return (gradeValue * 1) / 19;
        }
        return 0;
    }

    let fund1Mark = calculateMarks(fund1, "Fund1", 150);
    let fund2Mark = calculateMarks(fund2, "Fund2", 150);
    let anatoMark = calculateMarks(anato, "Anatomy", 150);
    let phsyoMark = calculateMarks(phsyo, "Physiology", 150);
    let engMark = calculateMarks(eng, "English", 100);
    let ethMark = calculateMarks(eth, "Ethics", 50);
    let micMark = calculateMarks(mic, "Microbiology", 100);
    let chemMark = calculateMarks(chem, "Chemistry", 100);

    let fund1Adjusted = calculateAdjustedGrade(fund1Mark, 150);
    let fund2Adjusted = calculateAdjustedGrade(fund2Mark, 150);
    let anatoAdjusted = calculateAdjustedGrade(anatoMark, 150);
    let phsyoAdjusted = calculateAdjustedGrade(phsyoMark, 150);
    let engAdjusted = calculateAdjustedGrade(engMark, 100);
    let ethAdjusted = calculateAdjustedGrade(ethMark, 50);
    let micAdjusted = calculateAdjustedGrade(micMark, 100);
    let chemAdjusted = calculateAdjustedGrade(chemMark, 100);

    let totalGrade = fund1Adjusted + fund2Adjusted + anatoAdjusted + phsyoAdjusted + engAdjusted + ethAdjusted + micAdjusted + chemAdjusted;

    let finalGrade;
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

    document.querySelector(".result").innerHTML = `Your GPA is ${totalGrade.toFixed(2)} (${finalGrade})`;
    console.log(`Total Grade: ${totalGrade}, Final Grade: ${finalGrade}`);
}
