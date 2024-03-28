<script setup lang="ts">
import {toTypedSchema} from '@vee-validate/yup';
import {useAuthStore} from "@/stores/auth.ts";
import {Form as VeeForm, Field, ErrorMessage} from 'vee-validate';
import * as yup from 'yup'

const authStore = useAuthStore();

const schema = toTypedSchema(
    yup.object({
      username: yup.string().required('Username kiriting').lowercase(),
      password: yup.string().min(8, 'Password 8 ta raqam yoki hariflik bolishi kerak').required('Password kiriting'),
    }),
);

function onSubmit(data: ILoginData) {
  authStore.login(data)
}

</script>
<template>
  <div class="flex min-h-[100vh] justify-center items-center whitespace-nowrap bg-neutral-100 ">
    <div class="flex flex-col max-w-full">
      <div class="flex gap-2.5 self-center text-sm font-semibold leading-4 text-white uppercase">
        <img
            alt="Metsenat logo"
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8953827202e743b9e05e31f953a8017a75062dab1185b9cfbb5cbe001c40373b?"
            class="grow shrink-0 aspect-[7.69] basis-0 w-fit"
        />
        <div class="justify-center px-2.5 py-2 my-auto bg-red-500 rounded-md">
          club
        </div>
      </div>
      <VeeForm class=" p-8 mt-12 text-base font-medium bg-white rounded-xl border border-violet-100 border-solid shadow-2xl max-md:px-5 max-md:mt-10"
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
