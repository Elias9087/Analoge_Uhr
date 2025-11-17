// Get the clock hands from the HTML 
const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

// Updates the rotation of each hand based on the current time
function updateClock() {
  // Get the current time
  const now = new Date();

  // Extract seconds, minutes, and hours
  const seconds = now.getSeconds(); // Value from 0 to 59
  const minutes = now.getMinutes(); // Value from 0 to 59
  const hours = now.getHours(); // Value from 0 to 23

  // Calculate rotation for each hand
  const secondsDeg = seconds * 6; // 360° / 60 = 6° per second
  const minutesDeg = minutes * 6 + seconds * 0.1; // 6° per minute + smooth movement
  const hoursDeg = (hours % 12) * 30 + minutes * 0.5; // 30° per hour + minute offset

  // Apply rotation to each hand using CSS transform
  secondHand.style.transform = `rotate(${secondsDeg}deg)`; // Rotate seconds hand
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`; // Rotate minutes hand
  hourHand.style.transform = `rotate(${hoursDeg}deg)`; // Rotate hours hand
}

// Call updateClock every second to keep the clock moving
setInterval(updateClock, 1000);
// Run the function once immediately so the clock starts without delay
updateClock();