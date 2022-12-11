<template>
  <!--displays if user exists-->
  <div id="nav" v-if="$store.state.user">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <button @click="$store.dispatch('logout')">Logout</button>
  </div>
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
