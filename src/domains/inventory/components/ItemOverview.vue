<template>
  <div>Inventory:</div>
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>item</th>
        <th>Actual amount</th>
        <th>Minimal amount</th>
        <th>Price</th>
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
        <td>{{ item.price }}</td>
        <button @click="redirectToPage(item.id)">Edit</button>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import type { inventoryItemType } from "../types.ts";

const { items } = defineProps<{ items: inventoryItemType[] }>();
const router = useRouter();

const redirectToPage = (id: number) => {
  // todo :: ${}
  router.push("/inventory/" + id);
};
</script>
