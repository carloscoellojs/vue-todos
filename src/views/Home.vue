<template>
  <!-- home main container -->
  <div class="container my-5">
    <!-- home header -->
    <header class="jumbotron">
      <h1>Home page</h1>
      <h4 class="lead">
        Create, edite and/or delete your daily todos, keep track of your
        activities
      </h4>
      <p v-if="!login.authenticated">
        Go ahead
        <router-link to="/login">Login</router-link>
        {{ "" }}and start creating todos
      </p>
    </header>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "home",
  computed: {
    ...mapState(["login"]),
  },
};
</script>
