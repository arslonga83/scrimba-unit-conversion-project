const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const lengthConversion = document.querySelector('#length-conversion');
const volumeConversion = document.querySelector('#volume-conversion');
const massConversion = document.querySelector('#mass-conversion');

btn.addEventListener('click', () => {
  let conversions = {};
  conversions.length = input.value * 3.281;
  conversions.volume = input.value * 0.264;
  conversions.mass = input.value * 2.204;
  
  lengthConversion.innerHTML = `${input.value} meters = ${conversions.length} feet`;
  volumeConversion.innerHTML = `${input.value} liters = ${conversions.volume} gallons`;
  massConversion.innerHTML = `${input.value} Kilograms = ${conversions.mass} pounds`;
})



