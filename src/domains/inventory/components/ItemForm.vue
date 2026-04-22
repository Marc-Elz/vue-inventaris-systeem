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
      <li>
        Price:
        <input
          type="number"
          v-model.number="itemCopy.price"
          step="0.01"
          min="0"
        />
      </li>
      <button @click.prevent="emit('cancelEvent')">Cancel</button>
      <button @click.prevent="emit('submitEvent', itemCopy)">Submit</button>
    </ul>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { inventoryItemType } from "../store.ts";

const emit = defineEmits(["submitEvent", "cancelEvent"]);

const props = defineProps<{ item: inventoryItemType }>();

const itemCopy = ref({ ...props.item });
</script>
