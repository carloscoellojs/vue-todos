<template>
  <!-- main wrapper container -->
  <div class="container my-5">
    <!-- register form -->
    <form v-on:submit="createUser">
      <div class="form-row align-items-center">
        <div class="col-sm-12">
          <div class="form-group">
            <label class="sr-only" for="inlineFormInputGroup">Name</label>
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <i class="fas fa-user-circle"></i>
                </div>
              </div>
              <input
                type="text"
                name="name"
                v-model="name"
                class="form-control"
                :class="{
                  'is-invalid': inputValidation.name,
                  'is-valid': name && !inputValidation.name,
                }"
                v-on:keyup="handleKeyUp"
                placeholder="Name"
              />
            </div>
            <small class="form-text text-muted"
              >Name must be at least 2 characters</small
            >
          </div>
        </div>
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
                type="text"
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
                  'is-valid': password && !inputValidation.password,
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
        <div class="col-sm-12">
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
  name: "register",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      inputValidation: {
        name: false,
        email: false,
        password: false,
      },
    };
  },
  computed: { ...mapState(["register"]) },
  methods: {
    ...mapActions(["registerUser"]),
    handleKeyUp: function (e) {
      const { name, value } = e.target;
      let regex = "";
      switch (name) {
        case "name":
          regex = /[a-z]{2,}$/gi;
          this.inputValidation = {
            ...this.inputValidation,
            name: value.length && !regex.test(value),
          };
          break;
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
    createUser: function (e) {
      e.preventDefault();
      // if no errors, dispatch action
      if (
        !this.inputValidation.name &&
        !this.inputValidation.email &&
        !this.inputValidation.password
      ) {
        this.registerUser({
          name: this.name,
          email: this.email,
          password: this.password,
        }).then(() => {
          // on success
          if (this.register.success) {
            // set form properties to empty strings
            this.name = "";
            this.email = "";
            this.password = "";
            // display message on ui
            this.flash(this.register.message, "alert alert-success", {
              timeout: 2000,
              importante: false,
            });
            // and re route me
            setTimeout(() => this.$router.push("login"), 2000);
          } else {
            // display message on ui
            this.flash(this.register.message, "alert alert-danger", {
              timeout: 2000,
              importante: false,
            });
          }
        });
      }
    },
  },
};
</script>
