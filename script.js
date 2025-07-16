// Set your target date here (change the timestamp as needed)
const targetDate = new Date("July 25, 2025 16:00:00").getTime();

// Update the countdown every second
const countdown = setInterval(function() {

  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the remaining time
  const remainingTime = targetDate - now;

  // Time calculations for days, hours, minutes, and seconds
  const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Display the results
  document.getElementById("days").innerHTML = `${days} <span>Days</span>`;
  document.getElementById("hours").innerHTML = `${hours} <span>Hours</span>`;
  document.getElementById("minutes").innerHTML = `${minutes} <span>Minutes</span>`;
  document.getElementById("seconds").innerHTML = `${seconds} <span>Seconds</span>`;

  // If the countdown is over, display a message
  if (remainingTime < 0) {
    clearInterval(countdown);
    document.getElementById("timer").innerHTML = "TIME'S UP!";
  }

}, 1000);
