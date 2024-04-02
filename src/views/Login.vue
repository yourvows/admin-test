<script setup lang="ts">
import {toTypedSchema} from '@vee-validate/yup';
import {useAuthStore} from "@/stores/auth.ts";
import { useRouter } from 'vue-router'
import {Form as VeeForm, Field, ErrorMessage} from 'vee-validate';
import * as yup from 'yup'
import LogoIcon from '@/assets/icons/LogoIcon.vue'
import Cookies from 'js-cookie'

const authStore = useAuthStore();
const router = useRouter()

const schema = toTypedSchema(
    yup.object({
      username: yup.string().required('Username kiriting').lowercase(),
      password: yup.string().min(8, 'Password 8 ta raqam yoki hariflik bolishi kerak').required('Password kiriting'),
    }),
);

async function onSubmit(data: ILoginData) {
  await authStore.login(data).then(() => {
    if (Cookies.get('token')) {
      router.push({ name: 'dashboard' })
    }
  })
}

</script>
<template>
  <div class="flex min-h-[100vh] justify-center items-center whitespace-nowrap bg-neutral-100 ">
    <div class="flex flex-col max-w-full">

      <LogoIcon />
      <VeeForm
        class=" p-8 mt-12 text-base font-medium bg-white rounded-xl border border-violet-100 border-solid shadow-2xl max-md:px-5 max-md:mt-10"
        :validation-schema="schema"
        v-slot="{handleSubmit}"
        as="div"
      >
        <form class="flex flex-col" @submit="handleSubmit($event, onSubmit)">
        <div class="text-2xl font-bold leading-7 text-slate-800">Kirish</div>
          <div class="mt-12 font-bold text-xs tracking-wider uppercase text-zinc-900 max-md:mt-10">
          LOGIN
        </div>
          <Field
              name="username"
            type="text"
            class="px-4 py-2 mt-3 font-normal rounded-md border border-indigo-100 border-solid bg-indigo-100 bg-opacity-20 text-slate-700 max-md:pr-5"
          />
          <ErrorMessage class="text-red-600 text-sm" name="username"/>

          <div class="mt-6 font-bold text-xs tracking-wider uppercase text-zinc-900">
          PASSWORD
        </div>
          <Field
              name="password"
              type="password"
              class="px-4 py-2 mt-3 rounded-md border border-indigo-100 border-solid bg-indigo-100 bg-opacity-20 text-slate-700 max-md:pr-5"
          />
          <ErrorMessage as="div" class="text-red-600 text-sm" name="password"/>
          <button class="px-16 py-2 mt-6 text-center text-white bg-blue-600 rounded-md leading-[140%] max-md:px-5">
          Kirish
        </button>
          <div v-if="authStore.loginError" class="text-sm text-red-600">{{authStore.loginError}}</div>
        </form>
      </VeeForm>
    </div>
  </div>
</template>
