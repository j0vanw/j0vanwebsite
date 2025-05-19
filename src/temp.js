// src/initAuth.js
import { auth } from "./firebase.js";
import { signOut, onAuthStateChanged } from "firebase/auth";

window.logout = function () {
  signOut(auth)
    .then(() => {
      alert("You've been logged out.");
      window.location.href = "login.html";
    })
    .catch((error) => alert("Error logging out: " + error.message));
};

onAuthStateChanged(auth, (user) => {
  const loginLink = document.getElementById("login-link");
  const signupLink = document.getElementById("signup-link");
  const logoutBtn = document.getElementById("logout-btn");
  const userEmail = document.getElementById("user-email");

  if (user) {
    if (loginLink) loginLink.style.display = "none";
    if (signupLink) signupLink.style.display = "none";
    if (logoutBtn) logoutBtn.style.display = "inline-block";

    if (userEmail) {
      userEmail.style.display = "inline-block";
      const name = user.displayName || user.email.split("@")[0];
      userEmail.textContent = `👋 Welcome, ${name}`;
    }
  } else {
    if (loginLink) loginLink.style.display = "inline-block";
    if (signupLink) signupLink.style.display = "inline-block";
    if (logoutBtn) logoutBtn.style.display = "none";

    if (userEmail) {
      userEmail.style.display = "none";
      userEmail.textContent = "";
    }
  }
});
