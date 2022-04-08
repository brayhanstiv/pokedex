<template>
  <nav>
    <router-link to="/">
      <img src="@/assets/img/logo.png" alt="Logo" />
    </router-link>
  </nav>
  <router-view/>
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: #fff url(@/assets/img/container_bg.png) repeat;
    min-height: 100vh;
  }

  nav {
    background-color: white;
    padding: 10px 30px;
  }

  nav img {
    width: 40%;
  }

  @media (min-width: 768px) {
  nav img {
    width: 20%;
  }
}
</style>
