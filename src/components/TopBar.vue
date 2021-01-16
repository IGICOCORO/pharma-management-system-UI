
<template>
  <div style="width:100%; position:right; padding-left:300px;" >
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <ul class="nav navbar-nav navbar-right">
 <ul class="nav nav-pills">
  ...
  <li role="presentation" class="dropdown">
    <router-link class="glyphicon glyphicon-off" data-toggle="dropdown" to="/login" aria-haspopup="true" aria-expanded="true" style="font-size:20px;"> 
    </router-link>
  </li>
  ...
</ul>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  created() {

  },
  data() {
    return {
    }
  },
  props: {
   
  },
  methods: {
   
  },
};
</script>

<style scoped>
.router :hover {
   text-decoration: none;
  list-style: none;
}
</style>

