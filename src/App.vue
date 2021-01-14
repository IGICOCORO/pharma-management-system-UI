<template>
   <div id="body">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <div class="main" v-if="logged_in">
      <NavBar/>
      <router-view/>
      <div class="loggout" @click="loggout">
        <fa icon="power-off" />
      </div>
    </div>
    <div v-else>
      <Login/>
    </div>
  </div>
</template>
<script>
export default {
 import Navbar from '@/components/Navbar'
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
