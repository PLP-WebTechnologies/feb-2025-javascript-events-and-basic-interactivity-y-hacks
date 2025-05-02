// Change text on button click
document.getElementById("changeTextBtn").addEventListener("click", function () {
  document.getElementById("text").textContent = "A secret: Vibranium is real! 🎉";
  this.style.backgroundColor = "#4CAF50";
});

// Display key pressed
document.getElementById("keyInput").addEventListener("keyup", function (event) {
  document.getElementById("keyOutput").textContent = `You pressed: ${event.key}`;
});

// Form validation
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const feedback = document.getElementById("formFeedback");

  if (!email.includes("@")) {
    feedback.textContent = "Invalid email format.";
    feedback.style.color = "red";
  } else if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Sign up successful!";
    feedback.style.color = "green";
  }
});

// Double-click secret action
function secretAction() {
  alert("🎉 Surprise! King Tchala invited you for Dinner!");
}
