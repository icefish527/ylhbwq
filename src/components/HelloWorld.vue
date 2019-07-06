<template>
  <div id="cesiumContainer">

  </div>
</template>

<script>
    import Cesium from 'cesium/Cesium'
    import widget from 'cesium/Widgets/widgets.css'
export default {
  name: 'HelloWorld',
    mounted () {
        var viewer = new Cesium.Viewer('cesiumContainer')
    }
}
</script>


<style scoped>
    #cesiumContainer {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
</style>