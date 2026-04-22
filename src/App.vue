<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/inventory/overview">Overview Page</RouterLink>
    <RouterLink to="/inventory/restock">Restock Page</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
