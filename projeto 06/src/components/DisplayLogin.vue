<template>
  <div class="login">
    <h1>Create account</h1>
    <form action="">
      <label for="">Already have an account? <a href="">Sign in</a></label>
      <input type="text" name="" placeholder="name" />
      <input type="text" name="" placeholder="First name" />
      <input type="text" name="" placeholder="Last name" />
      <input type="text" name="" placeholder="E-mail" />
      <div class="button">
        <display-button-vue />
      </div>
      <div class="my-4 mx-4">
        <b-form-checkbox v-model="status">
          I have read and agree to the
          <b-link href="#foo" disabled> Terms of Service </b-link>
          <div>
            State: <strong>{{ status }}</strong>
          </div>
        </b-form-checkbox>
      </div>
    </form>
  </div>
</template>

<script>
import DisplayButtonVue from "./DisplayButton.vue";
export default {
  name: "DisplayLogin",
  components: {
    DisplayButtonVue,
  },
  data() {
    return {
      status: false,
    };
  },
};
</script>

<style>
.login {
  background: rgb(133, 131, 131);

  width: 500px;
}
</style>