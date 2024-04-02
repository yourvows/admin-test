<script setup lang="ts">
  import {useAuthStore} from '@/stores/auth.ts'
  const authStore = useAuthStore()

</script>
<template>
  <RouterLink to="/">
    <div v-if="authStore.isAuthenticated" class="flex  gap-2">
      <img src="./MetsenatLogo.svg" alt="Metsenat logo" />
      <span class="rounded-md px-2 py-1 uppercase bg-[#E94A47] text-white text-center">CLUB</span>
    </div>
    <div v-else class="flex gap-2">
      <img src="./LogoProIcon.svg" alt="Metsenat logo" />
    </div>
  </RouterLink>
</template>


