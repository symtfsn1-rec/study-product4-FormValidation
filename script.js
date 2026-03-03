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