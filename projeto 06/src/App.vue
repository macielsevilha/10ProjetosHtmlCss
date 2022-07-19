<template>
  <div id="app">
    <display-login-vue/>
  </div>
  
</template>

<script>
import 'bootstrap-vue/dist/bootstrap-vue.css'
import DisplayLoginVue from './components/DisplayLogin.vue'

export default {
  name: 'App',
  components: {
   DisplayLoginVue,
  
 
  }
}
</script>

<style>
#app {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  background: rgb(246,200,213);
  background: linear-gradient(297deg, rgba(246,200,213,1) 2%, rgba(231,27,27,0.993006993006993) 98%);
}
</style>
