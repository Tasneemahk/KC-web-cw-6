//Javascript is not Java!!

alert("Welcome to my website that will calculate your grades!!");
let grade = prompt("Enter Your Grade using numbers:");
alert(grade);
console.log(`%c Your grade is ${grade}`, "color:#3E8989");
if (grade >= 90) {
  console.log(`%c Congrats!, You have got an A!!`, "color:#01BAEF");
} else {
  if (grade >= 80) {
    console.log(`%c Great Job! You have got B!!`, "color:#20BF55");
  } else {
    if (grade >= 70) {
      console.log(`%c You can do it! You have got C!!`, "color:#372549");
    } else {
      if (grade >= 60) {
        console.log(`%c Try harder! You have got D!!`, "color:#8C2F39");
      } else {
        if (grade >= 50) {
          console.log(`%c -D, Be careful, Weak.`, "color:#DB5461");
        } else {
          console.log(`%c Unfortunately an F..(You Failed)`, "color:#E53D00");
        }
      }
    }
  }
}
