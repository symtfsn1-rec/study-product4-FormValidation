const contactForm = document.getElementById('contactForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const submitBtn = document.getElementById('submitBtn');
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateName() {
  const value = usernameInput.value.trim();
  if (value.length >= 3) {
    nameError.textContent = '';
    return true;
  } else {
    nameError.textContent = '名前は3文字以上で入力してください';
    return true;
  }
}

function validateEmail() {
  const value = emailInput.value.trim();
  if (emailPattern.test(value)) {
    emailError.textContent = '';
    return true;
  } else {
    emailError.textContent = '正しいメールアドレス形式で入力してください';
    return true;
  }
}

usernameInput.addEventListener('input', () => {
  validateName();
});

emailInput.addEventListener('input', () => {
  validateEmail();
});