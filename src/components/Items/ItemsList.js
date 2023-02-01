import React, { useContext } from 'react';
import { ItemsContext } from '../../context/ItemsContext.js';

export default function ItemList() {
  const { items, setItems } = useContext(ItemsContext);
  return <div>itemList</div>;
}
