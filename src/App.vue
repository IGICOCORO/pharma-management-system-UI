<template>
  <div id="app">
     <div class="main" v-if="logged_in">
        <SideBar/>
        <TopBar/>
        <router-view />
         <div class="loggout" @click="loggout">
        <fa icon="power-off" />
      </div>
   </div>
  </div>
   <div v-else>
      <Login @connected="performLogin"/>
    </div>
</template>
<script>
  import SideBar from './components/Sidebar.vue'
  import TopBar from './components/TopBar.vue'
  import Login from './components/Login'
  export default  {
    components: { SideBar, TopBar, Login},
    data(){
      return {
        logged_in:false
      }
    },
    methods:{
      performLogin(user){
        console.log(user)
        this.logged_in=true;
      }
    }
  };
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
