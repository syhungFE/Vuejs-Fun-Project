<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <img class="logo" src="./assets/build-a-bot-logo.png" alt="logo">
              Build a Bot
          </li>
          <li class="nav-item">
              Build
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
// import RobotsBuilder from './build/RobotsBuilder'

export default {
  name: 'App',
}
</script>

<style>
body{
  background: linear-gradient(bottom,#555,#999);
  background-attachment: fixed;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
main{
  margin: 0 auto;
  padding : 30px;
  background-color: white;
  width: 1024px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1084px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
</style>
