<template>
  <div class="home">
    <Navbar />
    <br />
    <br />
    <Content />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Content from "@/components/Content.vue";

export default {
  name: "home",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Navbar,
    // eslint-disable-next-line vue/no-unused-components
    Content,
  },
};
</script>
