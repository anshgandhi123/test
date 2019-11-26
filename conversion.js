const readlineSync = require("readline-sync");
let value;

do {
  origin = String(readlineSync.question("Enter an origin scale: "));
}  while((origin == "F") || (origin == "C") || (origin == "K") || (origin == "f") || (origin == "c") || (origin == "k"))

do {
  scale = String(readlineSync.question("Enter a destination scale: "));
}  while((scale = "F") || (scale = "C") || (scale = "K"))

  temperature = Number(readlineSync.question("Enter a temperature: "));
temperature

const conversionf1 = (temeprature * (9/5)) + 32
const conversionf2 = (temperature - 273.15) * (9/5) + 32
const conversionc1 = (temperature - 32) * (5/9)
const conversionc2 = (temperature - 273.15)
const conversionk1 = (temperature + 273.15)
const conversionk2 = (temperature - 32) * (5/9) + 273.15

if (origin == "F" || scale == "C" || origin == "f" || scale == "c") {
  let value = (conversionc1) }
  else if (origin == "F" || scale == "K" || origin == "f" || scale == "k") {
    let value = (conversionk2) }
    else  if (origin == "C" || scale == "F"  || origin == "c" || scale == "f") {
      let value = (conversionf1) }
      else if (origin == "K" || scale == "F"  || origin == "k" || scale == "f") {
        let value = (conversionf2) }
         else if (origin == "C" || scale == "K"  || origin == "c" || scale == "k") {
          let value = (conversionk1) }
        else  if (origin == "K" || scale == "C"  || origin == "k" || scale == "c") {
            let value = (conversionc2) }

  console.log("")

  console.log(temperature + "equals" + value + ".")
