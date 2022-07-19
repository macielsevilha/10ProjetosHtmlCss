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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
