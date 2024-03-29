function login() {
  const nameEl = document.querySelector("#name");
  localStorage.setItem("userName", nameEl.value);
  window.location.href = "login.html";
}
export default {
  components: {
    created: async function() {
      const user = await userService.user();
      this.username = user.name;
      this.password = user.password
    },
    data: function() {
      return {
        username: '',
        password: '',
        loginError: '',
      };
    },
    methods: {
      async login() {
        try {
          await userService.login(this.username, this.password);
          router.push('/user');
        } catch(error) {
          this.loginError = error;
        }
      },
    },
  },
};


(async () => {
  const userName = localStorage.getItem('userName');
  if (userName) {
    document.querySelector('#playerName').textContent = userName;
    setDisplay('loginControls', 'none');
    setDisplay('playControls', 'block');
  } else {
    setDisplay('loginControls', 'block');
    setDisplay('playControls', 'none');
  }
})();

async function loginUser() {
  loginOrCreate(`/api/auth/login`);
}

async function createUser() {
  loginOrCreate(`/api/auth/create`);
}

async function loginOrCreate(endpoint) {
  const userName = document.querySelector('#userName')?.value;
  const password = document.querySelector('#userPassword')?.value;
  const response = await fetch(endpoint, {
    method: 'post',
     body: JSON.stringify({ username: userName, password: password }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  if (response.ok) {
    localStorage.setItem('userName', userName);
    window.location.href = 'index.html';
  } else {
    const body = await response.json();
    const modalEl = document.querySelector('#msgModal');
    modalEl.querySelector('.modal-body').textContent = `⚠ Error: ${body.msg}`;
    const msgModal = new bootstrap.Modal(modalEl, {});
    msgModal.show();
  }
}

function play() {
  window.location.href = 'index.html';
}

function logout() {
  localStorage.removeItem('userName');
  fetch(`/api/auth/logout`, {
     method: 'delete',
  }).then(() => (window.location.href = '/'));
}

async function getUser(username) {
  let scores = [];
  // See if we have a user with the given username.
  const response = await fetch(`/api/user/${username}`);
  if (response.status === 200) {
    return response.json();
  }

  return null;
}

function setDisplay(controlId, display) {
  const playControlEl = document.querySelector(`#${controlId}`);
  if (playControlEl) {
    playControlEl.style.display = display;
  }
}
