<template>
  <main>
    <div class="">
      <h1>This is an Home page</h1>
    </div>
    <div v-if="!isAuthenticated">
      <button class="button__sign-up" @click="handleSignUp">Sign Up</button>
      <button class="button__login" @click="handleLogin">Log In</button>
    </div>
    <div v-if="isAuthenticated">
      You logged in 
    </div>
  </main>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue';

export default {
  methods: {
    handleLogin() {
      this.$auth0.loginWithRedirect({
        appState: {
          target: "/profile",
        },
        authorizationParams: {
          prompt: "login",
        }
      });
    },

    handleSignUp() {
      this.$auth0.loginWithRedirect({
        appState: {
          target: "/profile",
        },
        authorizationParams: {
          prompt: "login",
          screen_hint: "signup",
        }
      });
    },

    handleLogout() {
      this.$auth0.logout({
        logoutParams: {
          returnTo: window.location.origin,
        }
      });
    },
  },
  data() {
    return {
      isAuthenticated: this.$auth0.isAuthenticated,
    };
  },

};

</script>


<style>
@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
