import { ref, computed } from "vue";
import type { inventoryItemType } from "./types";

const items = ref<inventoryItemType[]>([
  {
    id: 214,
    name: "DarkSouls1",
    actualAmount: 20,
    minimumAmount: 50,
    price: 60,
  },
  {
    id: 222,
    name: "DarkSouls2",
    actualAmount: 50,
    minimumAmount: 10,
    price: 50,
  },
  {
    id: 213,
    name: "DarkSouls3",
    actualAmount: 23,
    minimumAmount: 20,
    price: 80,
  },
  {
    id: 244,
    name: "NightReign",
    actualAmount: 20,
    minimumAmount: 10,
    price: 40,
  },
  {
    id: 645,
    name: "Hollow Knight",
    actualAmount: 15,
    minimumAmount: 5,
    price: 15.0,
  },
  {
    id: 236,
    name: "Elden Ring",
    actualAmount: 0,
    minimumAmount: 1,
    price: 80.0,
  },
  {
    id: 227,
    name: "Silksong",
    actualAmount: 35,
    minimumAmount: 20,
    price: 24.99,
  },
]);

export const getAllItems = computed(() => items.value);
export const getItemById = (id: number) =>
  computed(() => items.value.find((item) => item.id == id));
export const addItem = (item: inventoryItemType) => items.value.push(item);

export const editItem = (inventoryItem: inventoryItemType) => {
  const oldItem = items.value.find((item) => item.id == inventoryItem.id);

  if (oldItem != undefined) {
    oldItem.name = inventoryItem.name;
    oldItem.actualAmount = inventoryItem.actualAmount;
    oldItem.minimumAmount = inventoryItem.minimumAmount;
  } else {
    console.error("Failed to edit item of " + inventoryItem.id);
  }
};

export const getFilteredItems = computed(() =>
  items.value.filter((item) => item.actualAmount < item.minimumAmount),
);
