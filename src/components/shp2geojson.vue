<template>
    <div id="shp2geojson">
        <iframe src="../js/shp2geojson/shp2geojson.html" ref="iframe" @load="loaded">
        </iframe>
    </div>
</template>

<script>
    import Cesium from 'cesium/Cesium'
    import Bus from '../js/eventbus/eventBus'

    export default {
        name: 'shp2geojson',
        components: {},
        data() {
            return {
                _viewer:''
            }
        },
        methods: {
            loaded:function(){
                var _this = this;
                var shp2geojsonStr, item, shpFileName, geojsonData, promise;
                var okDom = this.$refs.iframe.contentWindow.document.getElementById('ok');
                okDom.onmouseup = function(){
                      var inter = window.setInterval(function(){
                        if(window.sessionStorage.getItem('shp2geojson') != null){
                            window.clearInterval(inter);
                            shp2geojsonStr = window.sessionStorage.getItem('shp2geojson');
                            item = JSON.parse(shp2geojsonStr);
                            shpFileName = item.shpFileName;
                            geojsonData = item.geoJsonData;

                            promise = Cesium.GeoJsonDataSource.load(geojsonData);
                            promise.then(function(dataSource) {
                                _this._viewer.dataSources.add(dataSource);

                                Bus.$emit('loadedShpParam',{
                                    isShow:true,
                                    shpFileName:shpFileName,
                                    dataSource:dataSource
                                });
                            }).otherwise(function(error){
                                window.alert('数据有误！');
                            });

                            _this.hideShp2Geojson();
                        }
                    },500);
                };

                var cancleDom = _this.$refs.iframe.contentWindow.document.getElementById('cancle');
                cancleDom.onclick = function(){
                    _this.$refs.iframe.contentWindow.document.getElementById('shp').value = '';
                    Bus.$emit('hideShp2Geojson');
                }
            }
        },
        mounted() {
            var _that = this;
            Bus.$on('initCesium', function(viewer){
                _that._viewer = viewer;
            });
        }
    }
</script>

<style scoped>
    #shp2geojson{
        z-index: 100;
        position: absolute;
        top: 20%;
        left: 45%;
        background-color: #ffffff;
    }
</style>