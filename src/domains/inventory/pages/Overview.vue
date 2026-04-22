<template>
  <ItemOverview :items />

  <RouterLink to="/inventory/create">Create Item</RouterLink>
  <RouterLink to="/inventory/restock">Restock</RouterLink>
</template>

<script setup lang="ts">
import ItemOverview from "../components/ItemOverview.vue";
import { getAllItems } from "../store";

const items = getAllItems;
</script>
