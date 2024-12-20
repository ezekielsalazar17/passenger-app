// document.getElementById("count-el").innerText = 5;

// let count = 0;
// console.log(count);

// let myAge = 23;

// console.log(myAge);

// function increment() {
//   console.log("the button was clicked");
// }

// function countdown() {
//   console.log(5);
//   console.log(4);
//   console.log(3);
//   console.log(2);
//   console.log(1);
// }

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// function finalLap() {
//   let finalLap = lap1 + lap2 + lap3;
//   console.log(finalLap);
// }

// finalLap();

// let lapsCompleted = 0;

// // Create a function that increments the lapsCompleted variable with one
// // Run it three times

// function incrementLaps() {
//   lapsCompleted = lapsCompleted + 1;
// }

// incrementLaps();
// incrementLaps();
//  incrementLaps();

//   console.log(lapsCompleted);
// let countEl = document.getElementById("count-el");
// let count = 0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

console.log(saveEl);

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  let savedCount = " " + count + " - ";
  saveEl.innerText += savedCount;
  console.log(count);
  countEl.innerText = 0;
  count = 0;
}

// let username = "Ezekiel, ";
// let message = "You have three new notifications";
// let messageToUser = username + message;
// console.log(messageToUser);

// let name = "Ezekiel";
// let greetings = "Hi, my name is ";
// let myGreeting = greetings + name;
// console.log(myGreeting);

//////////////////////////////////
// let welcomeEl = document.getElementById("welcome-el");
// let name = "Ezekiel";
// let greetings = "Welcome back ";
// let myGreetings = greetings + name;

// welcomeEl.innerText = myGreetings;

// welcomeEl.innerText += "👋";
