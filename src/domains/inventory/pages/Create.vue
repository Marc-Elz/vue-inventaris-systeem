<template>
  <div>Add product</div>
  <ItemForm
    @submitEvent="updateInventory"
    @cancelEvent="cancelEvent"
    :item="empty_item"
  />
</template>

<script setup lang="ts">
import ItemForm from "../components/ItemForm.vue";
import { useRouter } from "vue-router";
import type { inventoryItemType } from "../store.ts";
import { addItem } from "../store.ts";

const router = useRouter();
let empty_item: inventoryItemType = {
  id: Math.floor(Math.random() * 10000),
  name: "",
  actualAmount: 0,
  minimumAmount: 0,
};

const updateInventory = (newItem: inventoryItemType) => {
  addItem(newItem);
  router.push("/inventory/overview");
};

const cancelEvent = () => {
  router.push("/inventory/overview");
};
</script>
