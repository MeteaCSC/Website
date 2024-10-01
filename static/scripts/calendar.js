// I know this is bad but hopefully someone fixes this at some point
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

let today = new Date();
let header = document.getElementById("yearmonth");
let currentMonthYear = `${today.getFullYear()} / ${months[today.getMonth()]}`;
console.log(currentMonthYear);
let currentHeader = document.createTextNode(currentMonthYear);
header?.appendChild(currentHeader);