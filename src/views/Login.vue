<template>
    <section class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-lg-3">
                <div  class="login-panel bg-white text-left">
                    <h1 class="display-3 font-weight-bold">Login</h1>
                    <form action="">
                        <div class="form-group">
                            <label form="email" class="input-label">Username</label>
                            <input type="text" class="form-control" placeholder="username">
                        </div>
                         <div class="form-group">
                            <label form="email" class="input-label">Password</label>
                            <input type="password" class="form-control" placeholder="password">
                        </div>
                         <div class="form-group d-flex justify-content-center">
                              <button class="btn btn-primary w-25" @click="login">Login</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
export default {};
</script>

<style></style>
