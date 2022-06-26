console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

//Ex 1 Shortest Danish Word

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function getShortestWord(danishWords){
return danishWords.sort((current, previous) => current.length - previous.length)[0];
}

console.log(getShortestWord(danishWords)); 


// Ex 2 count the Danish letters
//console.log(("str1,str2,str3,str4".match(/,/g) || []).length);

const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med røde bær";


  function stringCount (danishLetters){

    const object = { total: 0 };
    const æCount = (danishLetters.match(/æ/gi) || []).length;
    const åCount = (danishLetters.match(/å/gi) || []).length;
    const øCount = (danishLetters.match(/ø/gi) || []).length;
   
  
    if (æCount > 0) {
      object["æ"] = æCount;
    }
    if (åCount > 0) {
      object["å"] = åCount;
    }
    if (øCount > 0) {
      object["ø"] = øCount;
    }
    object.total = æCount + åCount + øCount;
    return object;
  }
 
  console.log (stringCount (danishString));

  console.log (stringCount (danishString2));


  //Spirit animal name generator

  // document.getElementById("myBtn").addEventListener("click", displayOutput);

const userNameInput = document.getElementById('nameInput');
const inputButton = document.getElementById('inputButton');
const createName = document.getElementById('createName');

function getSpiritAnimal() {
  const spiritAnimal = [
    'Bear : strength, courage, and tenacity',
    'Eagle : freedom, vision, and courage',
    'Butterfly : transformation, change, new beginnings',
    'Cat: independence, intuition, and self-confidence',
    'Deer : gentleness, kindness, and innocence ',
    'Turtle : wisdom, persistence, groundedness',
    'Beaver : hard worker, determination',
    'Possum : adaptability and resilience',
    'Dolphin  : friendly and social',
    'Fox : cunning and clever',
  ];
  if (!userNameInput.value) {
    createName.innerHTML = 'Enter your name';
    return;
  }
  const randomIndex = Math.floor(Math.random() * spiritAnimal.length);
  createName.innerHTML = `${userNameInput.value} - ${spiritAnimal[randomIndex]}`;
}

inputButton.addEventListener('click', getSpiritAnimal);