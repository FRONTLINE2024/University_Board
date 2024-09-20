// 로그인
document.addEventListener('DOMContentLoaded', function () {
  const loginBtn = document.querySelector('.login_btn');

  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      const idValue = document.getElementById('login_id').value;
      const pwdValue = document.getElementById('login_password').value;

      const checkUserInfo = JSON.parse(localStorage.getItem(idValue));

      if (idValue === checkUserInfo.id && pwdValue === checkUserInfo.password) {
        document.cookie = `user=${idValue}; path=/`;
        location.href = '/src/pages/home/index.html';
      } else {
        alert('아이디 혹은 비밀번호를 확인해주세요');
      }
    });
  }
});

// 회원가입
document.addEventListener('DOMContentLoaded', function () {
  const signupBtn = document.querySelector('.signup_btn');

  if (signupBtn) {
    signupBtn.addEventListener('click', function () {
      const idValue = document.getElementById('signup_id').value;
      const pwdValue = document.getElementById('signup_pwd').value;
      const pwdCheckValue = document.getElementById('signup_pwdCheck').value;

      console.log(idValue, pwdValue, pwdCheckValue);
      const userData = {
        id: idValue,
        password: pwdValue,
      };

      if (pwdValue === pwdCheckValue) {
        localStorage.setItem(`${idValue}`, JSON.stringify(userData));
        alert('회원가입 성공!');
        document.getElementById('signup_id').value = '';
        document.getElementById('signup_pwd').value = '';
        document.getElementById('signup_pwdCheck').value = '';
      } else {
        alert('비밀번호가 다릅니다! 확인해주세요😭');
      }
    });
  }
});

// 비밀번호 보이기 (로그인)
document.addEventListener('DOMContentLoaded', function () {
  const showPwd = document.querySelector('#login_show');

  if (showPwd) {
    showPwd.addEventListener('click', () => {
      const changePwdType = document.querySelector('#login_password');

      if (showPwd.id === 'login_show') {
        changePwdType.setAttribute('type', 'text');
        showPwd.className = 'fa-solid fa-eye-slash';
        showPwd.id = 'login_hide';
      } else {
        changePwdType.setAttribute('type', 'password');
        showPwd.className = 'fa-solid fa-eye';
        showPwd.id = 'login_show';
      }
    });
  }
});

// 비밀번호 보이기 (회원가입)
document.addEventListener('DOMContentLoaded', function () {
  const showPwd = document.querySelector('#signup_show');

  if (showPwd) {
    showPwd.addEventListener('click', () => {
      const changePwdType = document.querySelector('#signup_pwd');
      const changePwdCheckType = document.querySelector('#signup_pwdCheck');

      if (showPwd.id === 'signup_show') {
        changePwdType.setAttribute('type', 'text');
        changePwdCheckType.setAttribute('type', 'text');
        showPwd.className = 'fa-solid fa-eye-slash';
        showPwd.id = 'signup_hide';
      } else {
        changePwdType.setAttribute('type', 'password');
        changePwdCheckType.setAttribute('type', 'password');
        showPwd.className = 'fa-solid fa-eye';
        showPwd.id = 'signup_show';
      }
    });
  }
});

// 블러 이동 (로그인)
document.addEventListener('DOMContentLoaded', function () {
  const signupBtn = document.querySelector('.signup_ment');
  const overlay = document.querySelector('.overlay');

  if (signupBtn && overlay) {
    signupBtn.onclick = moveBlur;
  }

  function moveBlur() {
    let keyframes = [
      { transform: 'translateX(0px)' },
      { transform: 'translateX(422.5px)' },
    ];
    let options = {
      duration: 500, // 애니메이션 시간
      easing: 'ease-in-out',
      fill: 'forwards', // 애니메이션 후 상태 유지
    };
    overlay.animate(keyframes, options);
  }
});

// 블러 이동 (회원가입)
document.addEventListener('DOMContentLoaded', function () {
  const signupBtn = document.querySelector('.login_ment');
  const overlay = document.querySelector('.overlay');

  if (signupBtn && overlay) {
    signupBtn.onclick = moveBlur;
  }

  function moveBlur() {
    let keyframes = [
      { transform: 'translateX(422.5px)' },
      { transform: 'translateX(0px)' },
    ];
    let options = {
      duration: 500, // 애니메이션 시간
      easing: 'ease-in-out',
      fill: 'forwards', // 애니메이션 후 상태 유지
    };
    overlay.animate(keyframes, options);
  }
});
