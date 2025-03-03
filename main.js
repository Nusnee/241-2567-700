// String, number ,boolean,Object, Array

//String
// let firstname = 'Haniny';
// const idcard = '1234';

// console.log(firstname)

// //number
// let age = 20;
// let height = 5.9;

// // boolean
// let ismarried = false;

// console.log('My name is ',firstname,'and I am',age,'years old.')

/* + add
 - minus
 * multiple
 / divide
 % mod
 */

//  let number1 = 5;
//  let number2 = 10;
//  let result = number1 + number2;
//  console.log(result);



 /*
 == เท่ากับ
 != ไม่เท่ากับ
 > มากกว่า
 < น้อยกว่า
 >= มากกว่าเท่ากับ
 <= น้อยกว่าเท่ากับ
 */

//  let number3 = 5;
//  let number4 = 5;
//  let condition1 = number3 == number4; // boolean -> value = true or false
//  console.log('The value of condition is ',condition1);


//  // if-else condition
//  if(number3 == number4 )  {
//     console.log('this is if' );
//  } else if(number3 != number4) {
//     console.log('this is else if');
//  } else {
//     console.log('this is else');
//  }
 
/* 
grade
>= 80 A
>= 70 B
>= 60 C
>= 50 D 
*/
//  let score = prompt('Enter your score: ');
//  console.log('Your score is ',score);
//    if(score >= 80) { //false
//       console.log('you are grade A'); 
//    } else if(score >= 70) {
//       console.log('you are grade B');
//    } else if(score >= 60) {
//       console.log('you are grade C');
//    } else if(score >= 50) {
//       console.log('you are grade D');
//    } else {
//       console.log('you are grade F');
//    } 
   // score = 75 -> B เพราะตรวจสอบเงื่อนไขแรกแล้วไม่เป็นจริง เนื่องจาก 75 ไม่มากกว่า 80 จึงไปตรวจสอบเงื่อนไขถัดไป คือ 70 ซึ่ง 75 มากกว่า 70 จึงได้คำตอบว่า B

   /* && and
      || or
      ! not
   */
//    num1 = 5;
//    num2 = 8;
//   // true||false = !(true) = false
//    let condition = ! (num1 >= 3  ||  num2 >= 10); // true
//    console.log('The result of condition is ',condition);

//    let age = 20; 
//    let gender = 'male';

//    if(age >= 18 && gender == 'male') {
//       console.log('You are male and you are adult');
//    }

   // let number = 20;
   // if (!(number % 2 == 0)) {
   //    console.log('you are even number');
   // }

   // loop for 
   //  while

// let counter = 0;

// while(counter < 10) { // true
//    console.log('while loop');
//    counter = counter + 1; 
// }

// for (let counter = 0; counter < 10; counter++) {
//    console.log('for loop');
// }

// // array

// let age = [20, 25, 30, 35, 40];
// console.log('array',age[0],age[1]);   // 20 25 30 35 40
// console.log('age list ',age);   // 30

// // แทนที่ข้อมูลใน array
// age = [45,50];
// console.log('new age list ',age);   // 45 50

// // ต่อข้อมูลใน array
// age.push(55);
// console.log('new age list ',age);   // 45 50 55

// // ลบข้อมูลใน array
// age.pop();
// console.log('new age list ',age);   // 45 50

// let ages = [30, 35, 40, 45, 50];
// if (ages.includes(40)) { // เช็คว่ามี 40 ใน list หรือไม่
//    console.log('you have 40 in the list');
// }

// let ages = [65,40,32,49,21,34,68];
// console.log('ages list ',ages);
// ages.sort(); // เรียงลำดับจากน้อยไปมาก
// console.log('ages list ',ages);

// let name_list = ['Haniny ','Mook','Beam','Nat'];
// name_list.push('Toon');
// console.log(name_list.length);
// console.log(name_list[0]);
// console.log(name_list[1]);
// console.log(name_list[2]);
// console.log(name_list[3]);
// console.log(name_list[4]);

// for (let index = 0; index < name_list.length; index++) {
//    console.log('Name list',name_list[index]);
// }

// object
// let student = [{
//    name: 'Haniny',
//    age: 20,
//    grade: 'A'
// },{name: 'Mook',
//    age: 19,
//    grade: 'A'}];
// student.push({name: 'Beam', // เพิ่มข้อมูลใน array
//       age: 20,
//       grade: 'A'})

// student.pop(); // ลบข้อมูลตัวสุดท้ายออก

// for (let index = 0; index < student.length; index++) {
//    console.log('Student Number',index+1);
//    console.log('Name',student[index].name);
//    console.log('Age',student[index].age);
//    console.log('Grade',student[index].grade);
// }

// object + array

// let score1= 75;
// let score2 = 90;
// let grade = ''


// function calculateGrade(score) { //ประกาศฟังก์ชัน ชื่อฟังก์ชัน calculateGrade รับค่า score
//    if(score >= 80) {
//       grade = 'A';
//    } else if(score >= 70) {
//       grade = 'B';
//    } else if(score >= 60) {
//       grade = 'C';
//    } else if(score >= 50) {
//       grade = 'D';
//    } else {
//       grade = 'F';
//    }
//    return grade; // ส่งค่า grade กลับไป
// }

// // arrow function
// function calculateGrade = (score) => { 
//    if(score >= 80) {
//       grade = 'A';
//    } else if(score >= 70) {
//       grade = 'B';
//    } else if(score >= 60) {
//       grade = 'C';
//    } else if(score >= 50) {
//       grade = 'D';
//    } else {
//       grade = 'F';
//    }
//    return grade; }

// let student1 = calculateGrade(score1); //เรียกใช้ฟังก์ชัน calculateGrade โดยส่งค่า score1 ไปให้ฟังก์ชัน
// let student2 = calculateGrade(score2);
// console.log('Grade ',student1);
// console.log('Grade ',student2);

// array
let scores = [10,20,30,40];
let newScores = []

for (let index = 0; index < scores.length; index++) {
   console.log('Score',scores[index]);
}
   // let newScore = scores.filter((s) => {
   //    return s >= 20;
   // })
   // console.log('New score',newScore);

newScores.forEach((ns) => {
   console.log('New score',ns);
})

// scores = scores.map((s) => { // วนลูป array โดยใช้ map คือจะเอาค่าใน array มาดำเนินการแล้วส่งค่ากลับ
//    return s * 2; // คูณ 2 กับค่าใน array
// })
// scores.forEach((s) => { // วนลูป array โดยใช้ forEach
//    console.log('score:',s);
// })


// let students = [
//    { name: 'Haniny', 
//       score: 89, 
//       grade: 'A' 
//    },
//    { name: 'Mook',
//       score: 91,
//       grade: 'A' 
//    },
//    { name: 'Beam',
//       score: 90,
//       grade: 'A' 
//    }]
//    let student = students.find((s) => {
//       if (s.name == 'Mook') {
//          return true;
//       }

//    }); // หาข้อมูลใน array โดยใช้ find


//    let doubleScore = students.map((s) => {
//       return s.score=s.score * 2;
//    }); // คูณ 2 กับค่าใน array

//    let highscore = students.filter((s) => {
//       if (s.score >= 80) {
//          return true;
//       }
//    });
   
//    console.log('students:',student);
//    console.log('High score:',highscore); 