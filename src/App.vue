<template>
  <v-app>
    <router-view :key="$route.path" />
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.v-application {
  font-family: Verdana, Geneva, sans-serif !important;
}
</style>