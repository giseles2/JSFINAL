document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");

  registerForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;


    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }


    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registration successful. You can now log in with your credentials.");

    window.location.href = "login.html";
  });
});
