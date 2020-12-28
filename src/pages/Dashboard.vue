<template>
  <div class="home">
    <br />
    <br />
    <Sidebar />
  </div>
</template>
<script>
// @ is an alias to /src
import Sidebar from "@/components/Sidebar.vue";

export default {
  name: "home",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Sidebar,
  },
};
</script>
