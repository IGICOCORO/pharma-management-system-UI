/*eslint no-undef: "error"*/
<template>
  <section class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-lg-3">
        <div class="login-panel bg-white text-left">
          <div
            class="alert alert-primary"
            role="alert"
            :style="{ opacity: isAlertShow ? 1 : 0 }"
          >
            Login successful. <small> waiting for redirect.</small>
            <loading width="30"></loading>
          </div>
          <fieldset>
            <h1 class="display-3 font-weight-bold">Login</h1>
            <hr />
            <form action="">
              <div class="form-group">
                <label form="email" class="input-label">Username</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="username"
                />
              </div>
              <div class="form-group">
                <label form="email" class="input-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="password"
                />
              </div>
              <br />
              <div class="form-group d-flex justify-content-center">
                <router-link to="/home">
                  <button
                    class="btn btn-primary btn-lg btn-block"
                    @click="login"
                    v-if="!isLoggingIn"
                  >
                    Login
                  </button>
                </router-link>
                <button
                  class="btn btn-primary btn-lg btn-block"
                  disabled
                  v-if="isLoggingIn"
                >
                  <loading width="30"></loading>
                </button>
              </div>
            </form>
          </fieldset>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import loading from "../components/Loading.vue";
export default {
  components: { loading },
  data() {
    return {
      isLoggingIn: false,
      isAlertShow: false,
    };
  },
  methods: {
    login() {
      this.isLoggingIn = true;
      var self = this;
      setTimeout(function() {
        self.isLoggingIn = false;
      }, 2000);
    },
    redirect() {
      this.router.push({ name: "home" });
    },
  },
};
</script>

<style lang="scss">
label {
  font-family: "Kaushan Script", cursive;
}
h1 {
  text-align: center;
  font-family: "Kaushan Script", cursive;
  font-style: italic;
}
fieldset {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  padding: 1rem;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 1.1rem;
  outline: 0;
  max-width: 500px;
  box-shadow: 5px 1px 1px #0078ff;
}
button {
  border-radius: 50%;
}
.widget {
  margin: 0;
  height: unset;
}
.login-panel {
  padding: 100px 0;
  position: relative;
  .alert {
    opacity: 0;
    positon: absolute;
    top: 20px;
    width: 100%;
    &.alert-primary {
      background-color: #0078ff;
      color: #fff;
      border: none;
      font-size: 18px;
    }
    .widget {
      position: absolute;
      right: 5px;
      top: 0;
      margin: 10px;
    }
  }
}
</style>
