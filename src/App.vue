<template>
  <RouterView/>
</template>

<script setup>
import {onMounted} from "vue";
import http from "./utils/http";

onMounted(() => {
  http.post('/auth/login/',
      {
        username: 'metsenatadmin',
        password: 'uF9aH1vZ3bV2kN2y'

      }).then(res => {
    console.log(res.data)
  }).catch(err => {
    console.log(err)
  })
});
</script>

