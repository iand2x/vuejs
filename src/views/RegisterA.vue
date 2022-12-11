<template>
  <main class="register">
    <section class="forms">
      <form class="register" @submit.prevent="register">
        <h2 class="title">Register</h2>
        <div class="field">
          <input
            class="input"
            type="email"
            placeholder="Email address"
            v-model="register_form.email"
          />
          <!-- v-model stores value in real time -->
        </div>
        <div class="field">
          <input
            class="input"
            type="password"
            placeholder="Password"
            v-model="register_form.password"
          />
        </div>
        <div class="field">
          <button class="button is-primary is-pulled-right" value="Register">
            Submit
          </button>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    // const login_form = ref({});
    const register_form = ref({});
    const store = useStore();

    // const login = () => {
    //   store.dispatch("login", login_form.value);
    // };

    const register = () => {
      store.dispatch("register", register_form.value);
    };

    return {
      // login_form,
      register_form,
      // login,
      register,
    };
  },
};
</script>

<style>
.field {
  max-width: 400px;
  margin: 0 auto;
}
h2 {
  text-align: center;
}
</style>
