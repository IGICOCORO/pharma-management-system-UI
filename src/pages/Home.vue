<template>
  <div class="home">
    <Navbar />
    <br />
    <br />
    <Dashboard />
  </div>
</template>
<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Dashboard from "@/components/Dashboard.vue";

export default {
  name: "home",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Navbar,
    // eslint-disable-next-line vue/no-unused-components
    Dashboard,
  },
};
</script>
