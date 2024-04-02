<script setup lang="ts">
  import { ref } from 'vue'
  import FormSubmit from '@/components/Application/FormSubmit.vue'
  import { SponsorType } from '@/types/enums.ts'

  const forms = ref([
    { id: SponsorType.INDIVIDUAL, name: 'Jismoniy shaxs' },
    { id: SponsorType.BUSINESS, name: 'Yuridik shaxs' },
  ])

  const selectedTab = ref(forms.value[0].id)
  const sponsorType = ref(SponsorType.INDIVIDUAL)

  const changeTab = (id: number) => {
    selectedTab.value = id
    sponsorType.value = id
  }

</script>

<template>
  <div class="h-[100vh] relative flex flex-row">
    <div
      class="flex justify-center items-center px-36 bg-white border border-solid border-black border-opacity-10  max-md:px-5">
      <div class="flex flex-col mt-1">
        <div class="text-4xl font-bold tracking-wide leading-[56px] text-zinc-900 max-md:max-w-full">
          Homiy sifatida ariza topshirish
        </div>
        <div
          class="flex gap-5 mt-4 text-xs font-medium tracking-wider leading-3 text-center uppercase bg-white rounded-md border-2 border-indigo-100 border-solid max-md:flex-wrap max-md:pl-5 max-md:mt-10 max-md:max-w-full">
          <button
            v-for="form in forms"
            :key="form.id"
            @click="changeTab(form.id)"
            :class="[form.id === selectedTab? 'text-white rounded-md bg-blue-600' : 'text-opacity-60']"
            class="flex-auto transition duration-100 uppercase px-16 py-4 my-auto">
            {{ form.name }}
          </button>

        </div>
        <FormSubmit :sponsorType />
      </div>
    </div>
    <div class="flex bg-gray-100 flex-col items-start px-32 py-16">
      <div class="text-xl font-medium">
        Yuqori sinflarda bolalar shaxs boʻlib, jamoa boʻlib shakllanadi. Ayni oʻsha paytda ularni oʻzlari oʻrgangan
        muhitdan ajratib qoʻymaslik kerak.
      </div>
      <div class="flex justify-center items-center">
        <img class="" src="../../assets/icons/President.svg" alt="President">
        <div class="mt-5 font-semibold">Shavkat Mirzoyoyev <br>
          <span class="font-normal text-gray-400">O‘zbekiston Respublikasi Prezidenti</span>
        </div>
      </div>
    </div>
    <img class="w-96 absolute bottom-0 right-0" src="@/assets/icons/RocketHalf.svg">
  </div>
</template>
