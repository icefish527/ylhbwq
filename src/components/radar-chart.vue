//radar-chart.vue （子组件）

<template>
  <div id="myChart" class="container"></div>
</template>

<script>
// 引入基本模板
let echarts = require("echarts/lib/echarts");
// 引入柱状图组件
require("echarts/lib/chart/bar");
require("echarts/lib/chart/radar");
// 引入提示框和title组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");

export default {
  name: "radar-chart",
  props: {
    //接受父组件传递来的数据
    items: {
      type: Array,
      default() {
        //默认数据，没有数剧的情况下启用
        return [
          { name: "生物", value: 95, max: "100" },
          { name: "数学", value: 55, max: "100" },
          { name: "语文", value: 86, max: "100" },
          { name: "物理", value: 54, max: "100" },
          { name: "美术", value: 59, max: "100" }
        ];
      }
    }
  },
  mounted: function() {
    this.$nextTick(() => {
      //初始化
      //   图表

      let values = []; //提炼接收到的数据
      this.items.forEach(el => {
        values.push(el.value);
      });
      let myChart = echarts.init(document.getElementById("myChart"));
      myChart.setOption({
        //覆盖配置数据option
        tooltip: {},
        radar: {
          indicator: this.items,
          center: ["50%", "51%"]
        },
        series: [
          {
            type: "radar",
            itemStyle: { normal: { areaStyle: { type: "default" } } },
            data: [
              {
                value: values,
                name: "各项得分"
                //itemStyle: {normal: {color: '#f0ad4e'}}
              }
            ]
          }
        ]
      });
    });
  }
};
</script>
<style scoped>
.container {
  width: 130px;
  height: 80px;
}
</style>



