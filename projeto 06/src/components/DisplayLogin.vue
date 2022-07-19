<template>
 <div class="login">
  <h1>Create account</h1>
   <form action="">
      <label for="">Already have an account? <a href="">Sign in</a></label>
      <input type="text" name="" placeholder="name">
      <input type="text" name="" placeholder="First name">
      <input type="text" name="" placeholder="Last name">
      <input type="text" name="" placeholder="E-mail">
      <div class="button"> 
        <display-button-vue />
      </div>
      <div class="ckeck">
        <input type="checkbox" name="" id="">
        <label for="">I have read and agree to the Terms of Service</label>
      </div>
      <b-icon-arrow-up></b-icon-arrow-up>
   </form>
 </div>
</template>

<script>
import DisplayButtonVue from './DisplayButton.vue'
export default {
  name: 'DisplayLogin',
  components: {
    DisplayButtonVue,
  
  }
}
</script>

<style>
  .login {
    background: rgb(133, 131, 131);
    
    width: 500px;
   
  }
</style>