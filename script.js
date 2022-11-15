const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const lengthConversion = document.querySelector('#length-conversion');
const volumeConversion = document.querySelector('#volume-conversion');
const massConversion = document.querySelector('#mass-conversion');

btn.addEventListener('click', () => {
  let conversions = {};
  conversions.impLength = input.value * 3.281;
  conversions.metLength = input.value / 3.281;
  conversions.impVolume = input.value * 0.264;
  conversions.metVolume = input.value / 0.264;
  conversions.impMass = input.value * 2.204;
  conversions.metMass = input.value / 2.204
  
  lengthConversion.innerHTML = `
    ${input.value} meters = ${conversions.impLength.toFixed(3)} feet | 
    ${input.value} feet = ${conversions.metLength.toFixed(3)} meters`;
  volumeConversion.innerHTML = `
    ${input.value} liters = ${conversions.impVolume.toFixed(3)} gallons | 
    ${input.value} gallons = ${conversions.metVolume.toFixed(3)} liters`;
  massConversion.innerHTML = `
    ${input.value} Kilograms = ${conversions.impMass.toFixed(3)} pounds | 
    ${input.value} pounds = ${conversions.metMass.toFixed(3)} Kilograms`;
})
