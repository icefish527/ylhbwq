<template>
  <div class="layout">
    <!-- header -->

    <span>我是标题</span>

    <!-- body -->
    <div style="height:100%">
      <div style="float:left;position:relative; height:100%;top:60px;">
        <div style="width:150px;height:100px;margin:10px;padding:5px; background:yellow">
            <Chart id="rader"/>
        </div>
        <div style="width:150px;height:100px;margin:10px;padding:5px; background:yellow"></div>
        <div style="width:150px;height:100px;margin:10px;padding:5px; background:yellow"></div>
      </div>
      <div style="float:right;position:relative; height:100%;top:60px;">
        <div style="width:150px;height:100px;margin:10px;padding:5px; background:yellow"></div>
        <div style="width:150px;height:100px;margin:10px;padding:5px; background:yellow"></div>
        <div style="width:150px;height:100px;margin:10px;padding:5px; background:yellow"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Chart from  '../components/chart.vue';

export default {
        name: 'layout',
        components:{Chart}
};
</script>
<style>
.layout {
  background: transparent;
}
.ivu-layout-header {
  background: transparent;
}
</style>
