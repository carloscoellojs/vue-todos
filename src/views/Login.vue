<template>
  <!-- login container wrapper -->
  <div class="container my-5">
    <!-- login form -->
    <form v-on:submit="logMeIn" novalidate>
      <div class="form-row align-items-center">
        <div class="col-sm-12">
          <div class="form-group">
            <label class="sr-only" for="inlineFormInputGroup">Email</label>
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <i class="fas fa-envelope"></i>
                </div>
              </div>
              <input
                type="email"
                name="email"
                v-model="email"
                class="form-control"
                :class="{
                  'is-invalid': inputValidation.email,
                  'is-valid': email && !inputValidation.email,
                }"
                v-on:keyup="handleKeyUp"
                placeholder="Email"
              />
            </div>
            <small class="form-text text-muted"
              >Email format example: john@example.com</small
            >
          </div>
        </div>
        <div class="col-sm-12">
          <div class="form-group">
            <label class="sr-only" for="inlineFormInputGroup">Password</label>
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <i class="fas fa-key"></i>
                </div>
              </div>
              <input
                type="password"
                name="password"
                v-model="password"
                class="form-control"
                :class="{
                  'is-invalid': inputValidation.password,
                  'is-valid': password && !inputValidation.email,
                }"
                v-on:keyup="handleKeyUp"
                placeholder="Password"
              />
            </div>
            <small class="form-text text-muted"
              >Password must be at least 6 characters</small
            >
          </div>
        </div>
        <div class="col-sm-12 col-md-2">
          <button type="submit" class="btn btn-primary mb-2">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
// imports
import { mapState, mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      inputValidation: {
        email: false,
        password: false,
      },
    };
  },
  computed: {
    ...mapState(["login"]),
  },
  methods: {
    ...mapActions(["loginUser"]),
    handleKeyUp: function (e) {
      const { name, value } = e.target;
      let regex = "";
      switch (name) {
        case "email":
          regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/gi;
          this.inputValidation = {
            ...this.inputValidation,
            email: value.length && !regex.test(value),
          };
          break;
        case "password":
          regex = /.{6,}/gi;
          this.inputValidation = {
            ...this.inputValidation,
            password: value.length && !regex.test(value),
          };
          break;
        default:
          break;
      }
    },
    logMeIn: function (e) {
      e.preventDefault();
      // if no errors dispatch loginUser action
      if (!this.inputValidation.email && !this.inputValidation.password) {
        this.loginUser({ email: this.email, password: this.password }).then(
          () => {
            // on login success
            if (this.login.success) {
              // set to empty string
              this.email = "";
              this.password = "";
              // display message on ui
              this.flash(this.login.message, "alert alert-success", {
                timeout: 2000,
                important: false,
              });
              // and re route me
              setTimeout(() => this.$router.push("todos"), 2000);
            } else {
              // display message on ui
              this.flash(this.login.message, "alert alert-danger", {
                timeout: 2000,
                importante: false,
              });
            }
          },
        );
      }
    },
  },
};
</script>
