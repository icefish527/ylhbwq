<template>
  <div>
    <CesiumViewer />
    <div id="container">
      <Layout />
    </div>
  </div>
</template>

<script>
import CesiumViewer from "../components/CesiumViewer.vue";
import Layout from "../components/Layout.vue";
//import Hello from "../components/Hello.vue";

export default {
  name: "app",
  components: {CesiumViewer,Layout
  }
};
</script>

<style>
#container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /* pointer-events: none; */
}
</style>
