//first task, remove Name

const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
const nameToRemove = "Ahmad";
names.indexOf(nameToRemove);
names.splice(names.indexOf(nameToRemove), 1);
console.log(names)


//second task Km/h

const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  function timeToDestination(speed, destinationDistance) {
    arrivingTime = destinationDistance / speed;
    diff = arrivingTime - Math.floor(arrivingTime);
    if (diff == 0) {
        return console.log(`You will arrive in ${arrivingTime} hours`);
    }

    else
        return console.log(`You will arrive in ${Math.floor(arrivingTime)} hours and ${Math.round(diff * 60)} minutes`);
}

timeToDestination(50, 432); 


//third task, duration of life
    const seriesDurations = [
        {
          title: "Game of thrones",
          days: 3,
          hours: 1,
          minutes: 0,
        },
        {
          title: "Sopranos",
          days: 3,
          hours: 8,
          minutes: 0,
        },
        {
          title: "The Wire",
          days: 4,
          hours: 6,
          minutes: 0,
        },
      ];
      
      function getSeriesTime() {
        let totalTime = 0;
        for (index = 0; index < seriesDurations.length; index++) {
          let time =
            ((seriesDurations[index].days * 24 * 60 +
              seriesDurations[index].hours * 60 +
              seriesDurations[index].minutes) /
              (80 * 365 * 24 * 60)) * 100;
             
          console.log(
            `${seriesDurations[index].title} took ${time.toFixed(3)}% of my life`
          );
          totalTime += time;
        }
        console.log(`In total that is ${totalTime.toFixed(3)}% of my life`);
      }
      
      getSeriesTime();

      // Fourth SAVE Note

      const note = [];

// fuction to push notes in array

function saveNote(content, id) {
  if (typeof content !== "string" && typeof id !== Number) {
    return "Please enter a valid note type";
  } else {
    note.push({ content, id });
  }
}

// adding notes to array

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Call Dcoctor", 3);
saveNote("Pick up Kids",4)

console.log(note);

// function to find obeject with id number

function getNote(id) {
  if (typeof id !== "number" || id > note.length) {
    return "Error:This is not a valid id";
  } else {
    for (let i = 0; i < note.length; i++) {
      if (id === note[i].id) {
        return note[i];
      }
    }
  }
}

const firstNote = getNote(3);
console.log(firstNote);

// function to log all notes with some stings

function logOutNotesFormatted() {
  for (let i = 0; i < note.length; i++) {
    console.log(
      `The note with id ${note[i].id} has the following note text: ${note[i].content}`
    );
  }
}
logOutNotesFormatted();
