<template>
  <div>form</div>
  <form>
    <ul>
      <li>
        Name:
        <input v-model="itemCopy.name" placeholder="placeholder" />
      </li>
      <li>
        Current Amount:
        <input type="number" v-model.number="itemCopy.actualAmount" min="0" />
      </li>
      <li>
        Minimum Amount:
        <input type="number" v-model.number="itemCopy.minimumAmount" min="0" />
      </li>
      <button @click.prevent="emit('submitEvent', itemCopy)">submit</button>
    </ul>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { inventoryItemType } from "../store.ts";

const emit = defineEmits(["submitEvent"]);

const item = defineProps<inventoryItemType>();

const itemCopy = ref({ ...item });
</script>
