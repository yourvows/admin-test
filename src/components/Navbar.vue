<script setup lang="ts">
  import LogoIcon from '@/assets/icons/LogoIcon.vue'
</script>

<template>
  <div class="flex z-50 justify-center items-center px-16 py-6 bg-white shadow-2xl max-md:px-5">
    <div class="flex items-center gap-5 justify-between w-full max-w-[1198px] max-md:flex-wrap max-md:max-w-full">
      <LogoIcon />
      <div
        class="flex gap-5 justify-between items-center text-sm font-medium leading-5 text-right text-slate-800 max-md:flex-wrap">
        <div class="hover:underline self-stretch my-auto">Asosiy</div>
        <div class="hover:underline self-stretch my-auto">Grantlar</div>
        <div class="hover:underline self-stretch my-auto">Soliq imtiyozlari</div>
        <button @click="$router.push({name:'login'})"
                class="flex gap-1 self-stretch my-auto font-bold leading-5 whitespace-nowrap">
          <img loading="lazy"
               src="../assets/icons/enter.png"
               alt="Kirish" />
          Kirish
        </button>
        <button
          class="justify-center hover:bg-blue-600 hover:text-white transition duration-100 px-8 py-2 leading-6 text-center text-blue-600 rounded-lg border-2 border-blue-600 border-solid max-md:px-5">
          Ro‘yxatdan o’tish
        </button>
      </div>
    </div>
  </div>
</template>
