<template>
  <div id="app">
    <div class="h-100 w-100" style="overflow-y: scroll; opacity: 50;">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand px-3" href="#">Test Desarrollo ITBF</a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link class="nav-link" to="/">Hoteles</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/habitaciones">Habitaciones</router-link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="content-wrapper">
        <div class="container">
          <div class="row mt-3 mb-3 p-3 d-flex justify-content-center abs-center">
            <div class="col-sm-12 mt-3">
              <router-view/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
