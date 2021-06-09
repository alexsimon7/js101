function getLetterGrade(grade) {
  if (grade >= 90) { //do not need to test for over 100 per problem
    return 'A';
  } else if (grade >= 80 && grade < 90) {
    return 'B';
  } else if (grade >= 70 && grade < 80) {
    return 'C';
  } else if (grade >= 60 && grade < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

function getGrade(gradeOne, gradeTwo, gradeThree) {
  let avgGrade = ((gradeOne + gradeTwo + gradeThree) / 3);
  return getLetterGrade(avgGrade);
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
