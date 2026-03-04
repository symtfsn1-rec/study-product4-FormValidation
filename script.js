// HTML要素の取得（操作の対象をJSに読み込む）
const contactForm = document.getElementById('contactForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const submitBtn = document.getElementById('submitBtn');

// バリデーション用ルール（正規表現）の定義
// メールアドレスの形式チェック用パターン
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 名前入力のバリデーション関数
const validationName = () => {
  const value = usernameInput.value.trim();

  if (value.length >= 3) {
    nameError.textContent = '';
    return true;
  } else {
    nameError.textContent = '名前は3文字以上で入力してください';
    return false;
  }
};

// メール入力のバリデーション関数
const validationEmail = () => {
  const value = emailInput.value.trim();

  if (emailPattern.test(value)) {
    emailError.textContent = '';
    return true;
  } else {
    emailError.textContent = '正しいメールアドレス形式で入力してください';
    return false;
  }
};

// 全てのバリデーションがOKか判定し、ボタンのdisabledを切り替える関数
const toggleSubmitButton = () => {
  const isNameValid = usernameInput.value.trim().length >= 3;
  const isEmailValid = emailPattern.test(emailInput.value.trim());

  if (isNameValid && isEmailValid) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
};

// 入力イベント（input）に紐付け
usernameInput.addEventListener('input', () => {
  validationName();
  toggleSubmitButton();
});

emailInput.addEventListener('input', () => {
  validationEmail();
  toggleSubmitButton();
});