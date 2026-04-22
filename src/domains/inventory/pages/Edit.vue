<template>
  <div>Edit</div>
  <div>Currently editing {{ $route.params.id }}</div>
  <ItemForm
    @submitEvent="handeSubmit"
    @cancelEvent="cancelEvent"
    :item="selectedItem"
  />
</template>

<script setup lang="ts">
import { getItemById, editItem } from "../store";
import ItemForm from "../components/ItemForm.vue";
import { useRoute, useRouter } from "vue-router";
import type { inventoryItemType } from "../types";

const route = useRoute();
const router = useRouter();

const paramsId: any = route.params.id;
let selectedItem: inventoryItemType | undefined = getItemById(paramsId).value;

const handeSubmit = (changedItem: inventoryItemType) => {
  editItem(changedItem);
  router.push("/inventory/overview");
};

const cancelEvent = () => {
  router.push("/inventory/overview");
};

if (selectedItem === undefined) {
  cancelEvent();
  console.warn("Something went wrong selecting the item");
  selectedItem = { id: -1, name: "error", actualAmount: 0, minimumAmount: 0 };
}
</script>
