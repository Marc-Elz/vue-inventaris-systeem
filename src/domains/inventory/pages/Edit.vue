<template>
  <div>Edit</div>
  <div>Currently editing {{ $route.params.id }}</div>
  <ItemForm
    @submitEvent="handeSubmit"
    @cancelEvent="cancelEvent"
    :item="selectedItem"
  />
</template>

<script setup>
import { getItemById, editItem } from "../store";
import ItemForm from "../components/ItemForm.vue";
import { useRoute, useRouter } from "vue-router";
import { computed, watch } from "vue";

const route = useRoute();
const router = useRouter();

const paramsId = route.params.id;
const selectedItem = getItemById(paramsId);

const handeSubmit = (changedItem) => {
  editItem(changedItem);
  router.push("/inventory/overview");
};

const cancelEvent = () => {
  router.push("/inventory/overview");
};
</script>
