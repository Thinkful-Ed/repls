// Desired format shoulde be: "The time is: 3:15:47"
let currentHour = "3";
let currentMinutes = "15";
let currentSeconds = "47";

// format the time by concatenating the corresponding strings
let formattedHoursMinutesSeconds = currentHour + ":" + currentMinutes + ":" + currentSeconds; // "3:15:47"
console.log(formattedHoursMinutesSeconds);

// concatenate "The time is" with the formatted time
let timeIsMessage = "The time is:";
console.log(timeIsMessage + " " + formattedHoursMinutesSeconds);