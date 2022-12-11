<template>
  <main class="login">
    <section class="forms">
      <form class="login" @submit.prevent="login">
        <h2 class="title">Login</h2>
        <div class="field">
          <p class="control has-icons-left has-icons-right">
            <input
              class="input"
              type="email"
              placeholder="Email"
              v-model="login_form.email"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control has-icons-left">
            <input
              class="input"
              type="password"
              placeholder="Password"
              v-model="login_form.password"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-lock"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control">
            <button class="button is-success" value="Login">Login</button>
          </p>
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
    const login_form = ref({});
    // const register_form = ref({});
    const store = useStore();

    const login = () => {
      store.dispatch("login", login_form.value);
    };

    // const register = () => {
    //   store.dispatch("register", register_form.value);
    // };

    return {
      login_form,
      // register_form,
      login,
      // register,
    };
  },
};
</script>

<style>
.field {
  max-width: 400px;
}
</style>
