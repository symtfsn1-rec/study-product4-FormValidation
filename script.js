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
    return false;
  }
}

function toggleSubmitButton() {
  const isNameValid = usernameInput.value.trim().length >= 3;
  const isEmailValid = emailPattern.test(emailInput.value.trim());

  if (isNameValid && isEmailValid) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = false;
  }
}

usernameInput.addEventListener('input', () => {
  validateName();
  toggleSubmitButton();
});

emailInput.addEventListener('input', () => {
  validateEmail();
  toggleSubmitButton();
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  submitBtn.textContent = '送信中';
  submitBtn.disabled = true;

  setTimeout(() => {
    contactForm.reset();
    contactForm.innerHTML = '<h2>お問い合わせありがとうございました！</h2><p>内容を確認後、折り返しご連絡いたします。</p>';
  }, 3000);
});