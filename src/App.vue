<template>
  <nav
    class="navbar"
    role="navigation"
    aria-label="main navigation"
    v-if="$store.state.user"
  >
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link to="/" class="navbar-item">Home</router-link>
        <router-link to="about" class="navbar-item">About</router-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <button
              class="button is-primary"
              @click="$store.dispatch('logout')"
            >
              Logout
            </button>
            <!-- <a class="button is-light"> Log in </a> -->
          </div>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    onBeforeMount(() => {
      store.dispatch("fetchUser");
    });

    return {
      user: store.state.user,
    };
  },
};
</script>

<style></style>
