<template>
    <div id="cesiumContainer">
        <!-- <button @click="shp2geojsonShowHandle" id="btnId">加载shp数据</button> -->
        <shp2geojson v-show="shp2geojsonShow"></shp2geojson>
    </div>
</template>

<script>
    import Cesium from 'cesium/Cesium'
    import widget from 'cesium/Widgets/widgets.css'

    import shp2geojson from './shp2geojson.vue'
    import Bus from '../js/eventbus/eventBus'

    export default {
        name: 'CesiumViewer',
        components:{shp2geojson},
        data(){
            return{
                _viewer:'',
                shp2geojsonShow:false
            }
        },
        mounted () {
            var _this = this;
            _this._viewer = new Cesium.Viewer('cesiumContainer');

            Bus.$emit('initCesium', _this._viewer);

            Bus.$on('hideShp2Geojson',function(){
                _this.shp2geojsonShow = false;
            });
        },
        methods:{
            shp2geojsonShowHandle:function(){
                this.shp2geojsonShow = true;
            }
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

    #btnId{
        position: absolute;
        right: 100px;
        top: 100px;
        z-index: 100;
    }
</style>