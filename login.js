document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;


    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");


    if (username === storedUsername && password === storedPassword) {

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", username); 

      window.location.href = "index.html";
    } else {
      alert("Invalid username or password. Please try again.");
    }
  });
});
