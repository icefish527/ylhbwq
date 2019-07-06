<template>
  <div id="app">
    <div>
      <CesiumViewer />
      <div
        style="position:fixed;
        left:0;
        top:0; width:100%;height:100%pointer-events:none;"
      >11111</div>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import CesiumViewer from "./components/CesiumViewer.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    CesiumViewer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
</style>
