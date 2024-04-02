<script setup lang="ts">
  import { defineAsyncComponent, onMounted } from 'vue'
  import { useDashboardStore } from '@/stores/dashboard.ts'

  const dashboardStore = useDashboardStore()
  const Chart = defineAsyncComponent(() => import('@/components/Chart/Chart.vue'))

  onMounted(() => {
    dashboardStore.getDashboard()
  })
</script>

<template>
  <Chart />
</template>