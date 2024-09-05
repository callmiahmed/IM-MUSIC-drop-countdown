// Set the target date (23 September)
const targetDate = new Date('September 23, 2024').getTime();

// Function to calculate days left
function updateDaysLeft() {
    const currentDate = new Date().getTime();
    const timeDifference = targetDate - currentDate;

    // Calculate days left
    const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    // Display in the HTML
    document.getElementById('timer').innerText = `${daysLeft} days left until IM MUSIC drops.`;

    // Optional: Stop the timer once the date is passed
    if (daysLeft <= 0) {
        document.getElementById('timer').innerText = "The date has passed!";
        clearInterval(timerInterval);
    }
}

// Update the countdown every day (24 hours)
const timerInterval = setInterval(updateDaysLeft, 1000 * 60 * 60 * 24);

// Initial call to display immediately
updateDaysLeft();
