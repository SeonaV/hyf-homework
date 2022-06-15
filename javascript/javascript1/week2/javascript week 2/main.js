
//Flight booking

function getFullname(firstname, surname) {
    return firstname + " " + surname;
 }
 console.log(getFullname("Benjamin", "Hughes")); // return "Benjamin Hughes".

 //created two variables 
const fullname1 = getFullname("Seona", "Makasare");
const fullname2 = getFullname("Shaun", "Makasare");
 console.log(fullname1);
 console.log(fullname2);

 //one more parameter
const useFormalName = true;
 function getFullname1(firstname, surname, useFormalName) {
     if (useFormalName) {
         return "Lord " + firstname + " " + surname;
     } else {
         return firstname + " " + surname;
     }
 }
//boolean
 console.log(getFullname1("Benjamin", "Hughes", true));
 
 console.log(getFullname1("Benjamin", "Hughes", false));

 console.log(getFullname1("Benjamin", "Hughes"));

 console.log(getFullname1("", ""));

 // for woman

const useWomanName = true;
 function getFullname2(firstname, surname, useFormalName, ) {
     if (useWomanName) {
         useFormalName = false;
         return "Lady " + firstname + " " + surname;
     } else {
         return firstname + " " + surname;
     }
 }
 console.log(getFullname2("Seona", " Makasare", true, true)); //returns "Lady ".
 console.log(getFullname2("Seona", " Makasare", false, false)); //returns "woman".

 //Event Application

 const weekDays = ["sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 function getEventWeekday(eventdayFromToday) {
     const d = new Date();
     let today = d.getDay();
     let event = [(today + eventdayFromToday- 1) % 7];
     return weekDays[event];
 }
 console.log(getEventWeekday(9));
 console.log(getEventWeekday(3));

 //Weather wear

 function youCreateThisFunctionName(temp) {
     if (temp < 0) {
         return "Wool,Wool and silk are the best natural fibers for cold weather";
     } else if (temp <= 10) {
         return "Leather jackets: A cold weather still";
     } else if (temp <= 15) {
         return "Jeans and shirts. its a pleasant weather";
     } else if (temp <= 20) {
         return "Wear T shirts and jeans. Its a good weather";
     } else if (temp <= 30) {
         return "Cotton clothes. Its a warm weather";
     } else {
         return "Cotton Clothes.Its a hot weather!";
     }
 };
 const clothesToWear = youCreateThisFunctionName(18);
 console.log(clothesToWear); 


 //Student manager


 const class07Students = [];
 function addStudentToClass(studentName) {
     if (class07Students.length >= 6) {
         console.log("Cannot add more students to class 07");
     } else if (class07Students.includes(studentName)) {
         console.log("Student " + studentName + " already in the class");
     } else if (!studentName) {
         console.log("Enter student's name Please!")
     } else {
         return class07Students.push(studentName);
     }
 };

 addStudentToClass("");
 addStudentToClass("Seona");
 addStudentToClass("Urszula");
 addStudentToClass("Jessica");
 addStudentToClass("Yara");
 addStudentToClass("Kremena");
 addStudentToClass("Manisha");
 addStudentToClass("Mahtab"); 
 addStudentToClass("Vi"); 
 addStudentToClass("Victoria"); 

 console.log(class07Students);


 function getNumberOfStudents() {
     console.log("No of students in the class are " + class07Students.length);
 }
 getNumberOfStudents(); 





