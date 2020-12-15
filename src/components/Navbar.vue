<template>
  <div class="home">
    <header>
      <div class="row nav-header">
        <div class="col-2">
          <div class="header-content">
            <a href="#"> <h1>Pharmacy</h1> </a>
          </div>
        </div>
        <div class="col">
          <nav class="navbar navbar-expand-lg navbar-light"></nav>
        </div>
        <div class="col-1">
          <div class="notification">
            <a href=""> <i class="fa fa-bell" aria-hidden="true"></i></a>
          </div>
          <div class="profile">
            <span class="profile_dropdown"
              ><button
                class="profile_dropdown"
                type="button"
                id="dropdownMenu5"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fa fa-user-circle-o" aria-hidden="true"></i></button
            ></span>
            <div class="dropdown-menu profile_logout">
              <a class="dropdown-item" href="">Profile</a>
              <a class="dropdown-item" href="">Logout</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Home",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style>
body {
  font-family: "muli";
  background-color: #ffffff;
}

.nav-header {
  background-color: #0078ff;
  margin: 0px;
}
.nav-header .header-logo {
  float: left;
  width: 9%;
}
img {
  height: 60px;
  padding-left: 0ch;
}
.header-content {
  width: 100%;
  padding-left: 200px;
  font-size: 26px;
  height: 60px;
}
.header-content a {
  color: #ffffff;
  font-weight: 600;
}

.notification {
  float: left;
  margin-top: 15px;
}
.notification i {
  font-size: 23px;
  color: #ffffff;
  margin-right: 20px;
  margin-top: 3px;
}

.profile {
  float: left;
  margin-top: 15px;
}
.profile i {
  font-size: 23px;
  color: #ffffff;
}
.profile .profile_dropdown {
  float: right;
  background: none;
  border: none;
}
.profile .profile_dropdown i {
  font-size: 25px;
}

.dropdown-menu.profile_logout.show {
  left: -18px !important;
  top: 6px !important;
  min-width: 5rem !important;
}

.banner_content {
  width: 50%;
  height: 300px;
  background-color: #ffffff;
  margin: 0px auto;
  margin-top: 50px;
  text-align: center;
}
.banner_content h2 {
  font-size: 35px;
  padding-top: 40px;
}
.banner_content .select_banner {
  margin-top: 50px;
}
.banner_content .select_banner .branch {
  background: #dddddd;
  border: 1px solid #dddddd;
  padding: 8px 40px;
  font-size: 20px;
}

.select_or {
  background: #ddd;
  padding: 13px 15px;
  border-radius: 50%;
  font-size: 18px;
}

.navbar-light {
  padding: 11px;
  margin-left: 75px;
}
.navbar-light .navbar-nav .nav-link {
  color: #ffffff;
  font-size: 13px;
  padding: 9px 20px;
  font-weight: 600;
}
.navbar-light .navbar-nav .nav-link:hover {
  color: #fbe207;
}
.navbar-light .navbar-nav .nav-item.active {
  color: #fbe207;
  background-color: #fff;
}
</style>
