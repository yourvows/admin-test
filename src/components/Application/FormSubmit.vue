<script setup lang="ts">
  import { ref } from 'vue'
  import { SponsorType } from '@/types/enums.ts'

  defineProps<{
    sponsorType: number;
  }>()

  const phoneNumber = ref('+998')
  const options = [
    { id: 1, amount: 1 },
    { id: 2, amount: 5 },
    { id: 3, amount: 7 },
    { id: 4, amount: 10 },
    { id: 5, amount: 30 },
    { id: 6, amount: 'boshqa' },
  ]
  const selectedOption = ref(options[0].id)
  const handleSelect = (id: number) => {
    const optionId = options?.find(option => option?.id === id)?.id
    if (optionId) {
      selectedOption.value = optionId
    }
  }

</script>

<template>
  <div>
    <div class="mt-4 text-xs font-medium tracking-wider uppercase text-zinc-900 max-md:max-w-full">
      F.I.Sh. (Familiya Ism Sharifingiz)
    </div>
    <input
      type="text"
      placeholder="Abdullayev Abdulla Abdulla o’g’li"
      class="justify-center w-full items-start px-4 py-2 mt-2.5 text-base rounded-md border border-indigo-100 border-solid bg-indigo-100 bg-opacity-20  max-md:pr-5 max-md:max-w-full"
    >
    <div class="mt-4 text-xs font-medium tracking-wider uppercase text-zinc-900 max-md:max-w-full">
      Telefon raqamingiz
    </div>

    <input type="text" maxlength="17" placeholder="+998 ## ###-##-##" v-model="phoneNumber" v-mask="'+### ## ### ##-##'"
           class="flex w-full gap-1.5 p-2 mt-2.5 text-base rounded-md border border-indigo-100 border-solid bg-indigo-100 bg-opacity-20 max-md:flex-wrap">
    <div class="mt-2 text-xs font-medium tracking-wider uppercase text-zinc-900 max-md:max-w-full">
      To‘lov summasi
    </div>
    <div class="mt-2 items-center justify-center gap-4 uppercase">
      <div class="grid grid-cols-3 flex-auto gap-2">
        <div
          v-for="(option, i) in options"
          :key="i"
          :class="[selectedOption === option.id ? 'border-blue-600 border-solid' : 'text-slate-700']"
          @click="handleSelect(option.id)"
          class="flex relative transition duration-100 flex-col p-2 rounded-md border-2 bg-slate-50">
          <img
            alt="tick"
            v-if="selectedOption === option.id"
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/adc8f5db31fc0885c21c869a436c12b614887efb6a74db627f8714a6d136d6a5?"
            class="absolute -top-2 -right-2 w-5 aspect-square"
          />
          <div v-if="typeof option.amount === 'number'" class="flex items-center justify-center gap-1">
            <div class="text-lg font-medium text-slate-700">{{ (option.amount * 1000000).toLocaleString() }}</div>
            <div class="text-xs leading-5 text-blue-600">UZS</div>
          </div>
          <div v-else class="flex items-center justify-center gap-1">
            <div class="text-lg font-medium text-slate-700">{{ option.amount }}</div>
          </div>
        </div>

      </div>
      <input v-if="selectedOption === 6" type="number" class="p-2 mt-2 rounded-md border-2 bg-slate-50 w-full">
    </div>
    <div v-if="sponsorType === SponsorType.BUSINESS"
         class="mt-4 text-xs font-medium tracking-wider uppercase text-zinc-900 max-md:max-w-full">
      Tashkilot nomi
    </div>
    <input v-if="sponsorType === SponsorType.BUSINESS" placeholder="Orient group" type="text"
           class="justify-center w-full items-start px-4 py-2 mt-3 text-base rounded-md border border-indigo-100 border-solid bg-indigo-100 bg-opacity-20 text-slate-700 text-opacity-30 max-md:pr-5 max-md:max-w-full">
    <div
      class="justify-center items-center px-16 py-2 mt-4 text-base font-medium leading-5 text-center text-white whitespace-nowrap bg-blue-600 rounded-md max-md:px-5 max-md:max-w-full"
    >
      Yuborish
    </div>
  </div>
</template>
