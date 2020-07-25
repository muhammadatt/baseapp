<template>
  <div>
    <h3>Login to BaseApp</h3>
    <form @submit.prevent="login">
      <p>{{ error }}</p>
      <label for="email">
        Email:
      </label>
      <input v-model="email" type="email" name="email" value />

      <label for="password">
        Password:
      </label>
      <input v-model="password" type="password" name="password" value />

      <button type="submit" name="button">
        Login
      </button>
    </form>
  </div>
</template>

<script>
import { ErrorLoggingMixin } from '@/components/Mixins.js';

export default {
  mixins: [ErrorLoggingMixin],
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", { email: this.email, password: this.password })
        .then(() => {
          this.$router.push({ name: "dashboard" });
        })
        .catch(
            err => {
                 this.logErrors(err);
                 this.error = err.response.data.error;

            }
            
        );
    },
  }
};
</script>

<style></style>
