<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <el-menu>
          <router-link to="/">
            <el-menu-item index="1">
              <span slot="title">Go to Home</span>
            </el-menu-item>
          </router-link>
          <router-link to="/todoList">
            <el-menu-item index="2">
              <span slot="title">Todo List</span>
            </el-menu-item>
          </router-link>
          <router-link to="/about">
            <el-menu-item index="3">
              <span slot="title">Go to About</span>
            </el-menu-item>
          </router-link>
          <!-- Aside content -->
        </el-menu>
      </el-aside>
      <el-container>
        <el-header height="">
          <!-- Header content -->
        </el-header>
        <el-main height="">
          <router-view></router-view>
          <!-- Main content -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {}
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}
</style>
