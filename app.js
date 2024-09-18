import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD7aLFsr0uj_899qo9YMIlzbKMJL1DxpkI",
  authDomain: "academy-8b450.firebaseapp.com",
  projectId: "academy-8b450",
  storageBucket: "academy-8b450.appspot.com",
  messagingSenderId: "362938343809",
  appId: "1:362938343809:web:ab6d8cdf1129c614c08880",
  measurementId: "G-N2K48P8306"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function showSignUp() {
  document.getElementById('loginScreen').classList.remove('active');
  document.getElementById('signUpScreen').classList.add('active');
}

function showLogin() {
  document.getElementById('signUpScreen').classList.remove('active');
  document.getElementById('loginScreen').classList.add('active');
}

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Logged in successfully!");
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to log in");
    });
}

function signUp() {
  const email = document.getElementById('newEmail').value;
  const password = document.getElementById('newPassword').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Signed up successfully!");
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to sign up");
    });
}
