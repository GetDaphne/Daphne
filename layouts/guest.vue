<template>
  <div>
    <div class="w-screen h-12 shadow flex items-center justify-between pl-2 pr-10">
      <div>
        <h1 class="text-xl font-bold">Daphne</h1>
      </div>
      <div>
        <router-link to="/signup" class="button-primary">Sign Up</router-link>
        <router-link to="/login" class="text-purple-600">Login</router-link>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>