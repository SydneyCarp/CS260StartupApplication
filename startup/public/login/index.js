function login() {
  const nameEl = document.querySelector("#name");
  localStorage.setItem("username", nameEl.value);
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

