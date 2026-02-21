const contactForm = document.getElementById('contactForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const submitBtn = document.getElementById('submitBtn');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;