let input;
const btn = document.querySelector('.btn');
const lengthConversion = document.querySelector('#length-conversion');
const volumeConversion = document.querySelector('#volume-conversion');
const massConversion = document.querySelector('#mass-conversion');
let conversions = {};

btn.addEventListener('click', () => {
  input = document.querySelector('.input').value;
  if (input) {
    convert();
    renderConversions();
  }
})

function convert() {
  conversions.impLength = input * 3.281;
  conversions.metLength = input / 3.281;
  conversions.impVolume = input * 0.264;
  conversions.metVolume = input / 0.264;
  conversions.impMass = input * 2.204;
  conversions.metMass = input / 2.204;

  for (num in conversions) {
    conversions[num] = conversions[num].toFixed(3);
  }
}

function renderConversions() {
  lengthConversion.innerHTML = `
  ${input} meters = ${conversions.impLength} feet | 
  ${input} feet = ${conversions.metLength} meters`;
volumeConversion.innerHTML = `
  ${input} liters = ${conversions.impVolume} gallons | 
  ${input} gallons = ${conversions.metVolume} liters`;
massConversion.innerHTML = `
  ${input} Kilograms = ${conversions.impMass} pounds | 
  ${input} pounds = ${conversions.metMass} Kilograms`;
}