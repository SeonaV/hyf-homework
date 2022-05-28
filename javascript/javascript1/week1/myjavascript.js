// Task 1 Age-ify
const yearOfBirth = 1987;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;
console.log("You will be " + age + " years old in " + yearFuture);

//Task 2 Goodboy- Oldboy

const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const dogYear = dogYearFuture-dogYearOfBirth;
const dogHumanYear = 7 * dogYear ;


let shouldShowResultInDogYears = "true";

if (shouldShowResultInDogYears == "true") {
    console.log("Dog will be " + dogYear + " dog years old in " + dogYearFuture)
} else {
    console.log("My dog will be " + dogHumanYear+ " humuns years old in " + dogYearFuture)
};

//Task 3 Housey price

//housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300; for reference

// Peter house 

const gardenSizeInM2 = 100 ;
 const PWidth = 8;
 const PHeight = 10;
 const PDepth = 10;

 //Calculation for Volume in Meters for Peter

 let PvolumeInMeters = PWidth * PHeight * PDepth;

 //Peter House Price

 const actualPeterPrice = 2500000;

 housePriceforPeter = PvolumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

 if (housePriceforPeter < actualPeterPrice){
     console.log("Peter High price")
 } else if (housePriceforPeter == actualPeterPrice){
    console.log("Peter expected amount")
 } else {
    console.log("Peter low price")
 };

 //Julia house price
 const JgardenSizeInM2 = 70 ;
 const JWidth = 5;
 const JHeight = 8;
 const JDepth = 11;

 //Calculation for Volume in Meters for Julia
 let JvolumeInMeters = JWidth * JHeight * JDepth;

 //Julia House Price

 const actualJuliaPrice = 1000000;

 housePriceforJulia = JvolumeInMeters  * 2.5 * 1000 + JgardenSizeInM2 * 300;

 if (housePriceforJulia < actualJuliaPrice){
     console.log("Julia high pricd")
 } else if (housePriceforJulia == actualJuliaPrice){
    console.log("Julia expected amount")
 } else {
    console.log("Julia low price")
 };


// EZ Namey 

  const firstWords = ['ApexSite', 'MineralBow', 'FloraBloom','BendR', 'FlexBrand', 'GhostLine', 'SKinderLot', 'WhiteMatter', 'Varsity', 'SpeshReel']
  const secondWords = ['Industry', 'Collaborations','Information technology', 'Finance', 'Trading', 'Technology','Artificial Technology','Consultation','Avition', 'Oil & Refineries']


 //Random name
 const randomFirstWords = firstWords[ Math.floor(Math.random() * 10)];
 const randomSecondWords = secondWords [Math.floor(Math.random() * 10)];

 let startupName = randomFirstWords + ' ' + randomSecondWords;

 console.log("The startup: " + startupName + " contains " + startupName.length + " characters");



