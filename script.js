//DECLARE VARIABLES
const name = "Alyssa Crechiolo"
const age = 151;
const birthday = "December 29";
let detroitGC = true;
let lifeEvents = [
    "I (if Covid allows) am getting married on October 17",
    "I just got a puppy and his name is Mayor -- he is Satan reincarnated",
    "I graduated from Grand Valley State University",
    "I once broke my wrist while climbing a fence"
];

//IF ELSE STATEMENT
if (detroitGC) {
    console.log(
        `My name is ${name} and I am a Student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}.`
    );
} else {
    console.log(
        `My name is ${name} and I am a Student at Grand Circus in Grand Rapids. I am currently ${age} years old and my birthday is on ${birthday}.`
    );
};

//LIST LIFE EVENTS ARRAY
for (let i = 0; i < lifeEvents.length; i++) {
    console.log(lifeEvents[i]);
}

//RANDOM # EQUAL TO 5
let counter = 0;
while (true) {
    let randomNumber = Math.floor(Math.random() * 10 + 1);
    if (randomNumber !== 5) {
        counter++;
        console.log(`${randomNumber} !== 5`);
    } else {
        counter++;
        console.log(
            `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
        );
        break;
    }
};

//EXTENDED CHALLENGE
let wage = 10;
let hours = 60;
if (hours <= 40) {
    console.log(wage * 40);
} else {
    let overTime = hours - 40;
    let overTimePay = overTime * wage * 1.5 + wage * 40;
    console.log(
        `If you make ${wage}.00 dollars an hour and work ${hours} hours a week, you will receive a paycheck of $${overTimePay}.00`
    );
}
