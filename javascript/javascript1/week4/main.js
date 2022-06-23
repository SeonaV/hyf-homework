// Voice Assistant


let personName = "";
 const todoList = [];

 function getReply(command) {
    if (command === "" || typeof command !== "string") {
        alert("Give some command Please!");
    }
    else if (command.includes("Hello my name is") && personName == "") {
        personName = command.split(" ").pop();
        return `Nice to meet you ${personName}`;

    } else if (command.includes("Hello my name is") && personName != "") {
        return `${personName} Hi again!`;

    } else if (command === "what is my name?") {
        return `Your name is ${personName}`;

     } if (command === "Add fishing to my todo") {
         todoList.push("fishing");
         return todoList[0] + "added to your todoList.";

     } else if (command === "Add singing in the shower to my todo") {
         todoList.push("Singing");
         return todoList[1] + "added to your todoList.";

     } else if (command === "What is on my todo?") {
         return "You have " + todoList.length + " in list to do ' " + todoList + " '";

     } else if (command === "Remove fishing from my todo") {
         const indexOfFishing = todoList.splice(todoList.indexOf("fishing"), 1);
         return "Removed " + indexOfFishing + " from your todoList."
        
        } if (command === "What is on my todo?") {
            return `you have ${todoList.length} - ${todoList}`
        }
        if (command.includes("What day is it")) {
            let date = new Date();
            const month = date.toLocaleString('default', { month: 'long' })
            let fullDate = `${date.getDate()}. of ${month} ${date.getFullYear()}`
            return fullDate;
        }
        if (command.includes("Set a timer for")) {
            let enterMinute = command.match(/\d+/g);
            setTimeout(function () {
                console.log("Time Done!");
            }, enterMinute * 60000);
            return `Timer set for ${enterMinute} minutes`;
        }
        if (command.includes("what is")) {
    
            let matches = command.match(/\d+/g);
            let oprator = command.split(" ");
            let result;
            if (oprator.includes('*')) {
                result = parseInt(matches[0]) * parseInt(matches[1]);
                return result;
            }
            else if (oprator.includes('+')) {
                result = parseInt(matches[0]) + parseInt(matches[1]);
                return result;
            }
            else if (oprator.includes('-')) {
                result = parseInt(matches[0]) - parseInt(matches[1]);
                return result;
            }
            else if (oprator.includes('/')) {
                result = parseInt(matches[0]) / parseInt(matches[1]);
                return result;
            }
            else {
                return "Invalid Operator"
            }
        }
        return `Enter Valid Input`
    }

   
    console.log(getReply("Hello my name is Seona"));
    console.log(getReply("Hello my name is Seona"));
    console.log(getReply("what is my name?"));
    console.log(getReply("Add fishing to my todo"));
    console.log(getReply("Add singing in the shower to my todo"));
    console.log(getReply("What is on my todo?"));
    console.log(getReply("Remove fishing from my todo"));
    console.log(getReply("What day is it today?"));
    console.log(getReply("what is 80 + 90"))
    console.log(getReply("what is 48 * 3"))
    console.log(getReply("what is 90 - 3"))
    console.log(getReply("what is 60 / 3"))
    console.log(getReply("Set a timer for 0.5 minutes"));
    console.log(getReply("Set a timer for 1 minutes"));


   
