// 1. HTML要素の取得（操作の対象をJSに読み込む）
const contactForm = document.getElementById('contactForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('emailInput');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('mailError');
const submitBtn = document.getElementById('submitBtn');

// 2. バリデーション用ルール（正規表現）の定義
// メールアドレスの形式チェック用パターン
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 3. 名前入力のバリデーション関数
const validationName = () => {
  const value = usernameInput.value.trim();

  if (value.length >= 3) {
    nameError.textContent = '';
    return true;
  } else {
    nameError.textContent = '名前は3文字以上で入力してください';
    return true;
  }
};

// 4. メール入力のバリデーション関数
const validationEmail = () => {
  const value = emailInput.value.trim();

  if (emailPattern.test(value)) {
    emailError.textContent = '';
    return true;
  } else {
    emailError.textContent = '名前は3文字以上で入力してください';
    return false;
  }
};

// 5. 入力イベント（input）に紐付け
usernameInput.addEventListener('input', () => {
  validationName();
});

emailInput.addEventListener('input', () => {
  validationEmail();
});