<template>
  <apexchart
    height="100%"
    :options="chartOptions"
    :series="series"
    type="line"
  ></apexchart>
</template>

<script>
  import { defineComponent, ref } from "vue";

  export default defineComponent({
    name: "LineChart",
    setup() {
      const chartOptions = ref({
        chart: {
          id: "basic-line",
          height: "100%",
          type: "line",
          toolbar: "false",
          dropShadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 8,
            opacity: 0.2,
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#4C6FFF", "#FF92AE"],
        stroke: {
          curve: "smooth",
          width: 3,
        },
      });

      const series = ref([
        {
          name: "Homiylar",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 14],
        },
        {
          name: "Talabalar",
          data: [125, 55, 47, 100, 67, 85, 95, 10],
        },
      ]);

      return {
        series,
        chartOptions,
      };
    },
  });
</script>