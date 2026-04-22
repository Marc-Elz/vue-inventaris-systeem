<template>
  <div>ShortageOverview</div>
  <ItemOverview :items />
</template>

<script setup lang="ts">
import ItemOverview from "../components/ItemOverview.vue";
import { getFilteredItems } from "../store";

const items = getFilteredItems;
</script>
