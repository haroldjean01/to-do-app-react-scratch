import { useEffect } from 'react';
import { createContext, useState } from 'react';
import { getListItems } from '../services/todo.js';

const ItemsContext = createContext();

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const data = await getListItems();
        setItems(data);
      } catch (e) {
        console.error(e.message);
      }
    };
    fetchItem();
  }, []);
  return <ItemsContext.Provider value={{ items, setItems }}>{children}</ItemsContext.Provider>;
};
export { ItemsContext, ItemsProvider };
