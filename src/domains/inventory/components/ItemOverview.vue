<template>
  <div>Inventory:</div>
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>item</th>
        <th>Actual amount</th>
        <th>Minimal amount</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in items" :key="index">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>
          <input type="number" v-model.number="item.actualAmount" min="0" />
        </td>
        <td>{{ item.minimumAmount }}</td>
        <button @click="redirectToPage(item.id)">Edit</button>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { getAllItems, getFilteredItems } from "../store.ts";
import type { inventoryItemType } from "../store.ts";

const props = defineProps<{ filter: boolean }>();
const router = useRouter();

let items: inventoryItemType[] | undefined;
if (!props.filter) {
  items = getAllItems.value;
} else {
  items = getFilteredItems.value;
}

const redirectToPage = (id: number) => {
  router.push("/inventory/" + id);
};
</script>
