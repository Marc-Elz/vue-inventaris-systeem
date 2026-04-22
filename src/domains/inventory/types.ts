interface inventoryItem {
  id: number;
  name: string;
  actualAmount: number;
  minimumAmount: number;
  price?: number;
}

export type { inventoryItem as inventoryItemType };
