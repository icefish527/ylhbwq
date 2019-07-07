//chart.vue （父组件）

<template>
  <div id="charid">
    <RadarChart :items="items"></RadarChart>
  </div>
</template>

<script>
import RadarChart from "../components/radar-chart.vue";
export default {
  name: "chart",
  components: { RadarChart },
  data() {
    return {
      items: [
        { name: "体育", value: 95, max: "100" },
        { name: "数学", value: 55, max: "100" },
        { name: "化学", value: 75, max: "100" },
        { name: "劳动", value: 85, max: "100" },
        { name: "烹饪", value: 85, max: "100" }
      ]
    };
  }
};
</script>