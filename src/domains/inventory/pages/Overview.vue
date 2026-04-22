<template>
  <ItemOverview :filter="false" />

  <RouterLink to="/inventory/create">Create Item</RouterLink>
  <RouterLink to="/inventory/restock">Restock</RouterLink>
</template>

<script setup lang="ts">
import ItemOverview from "../components/ItemOverview.vue";
</script>
