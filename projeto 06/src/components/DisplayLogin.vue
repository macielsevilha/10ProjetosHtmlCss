<template>
  <div class="text-center bg-white py-5 px-1 rounded" >
    <h1>Create account</h1>
    <p>Already have an account? <a href="">Sign in</a></p>
    <div class="my-4 mx-4">
      <b-form>
        <b-form-input placeholder="Kersvers" :formatter="formatter"/>
        <div class="d-flex">
          <b-form-input class="mr-3" placeholder="First name" />
          <b-form-input placeholder="Last name" />
        </div>
        <b-form-input placeholder="E-mail"></b-form-input>
      </b-form>
    </div>
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
  background: white;

  width: 500px;

}
form input {
  margin: 10px 0px;
}
</style>