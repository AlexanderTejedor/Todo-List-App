import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setIloading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [sincronizedItem, setSincronizedItem] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setIloading(false);
      } catch (error) {
        setIloading(false);
        setSincronizedItem(true);
        setError(error);
      }
    }, 3000);
  }, [sincronizedItem]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  const sincronizeItem = () => {
    setIloading(true);
    setSincronizedItem(false);
  };

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem,
  };
}

export { useLocalStorage };

// localStorage.removeItem("todos_V1");

// const defaultTodos = [
//   { text: "Levantarme a las 5:30 am", completed: false },
//   { text: "Estudiar minimo 2 horas", completed: false },
//   { text: "Hacer tarea de la Universidad", completed: false },
//   { text: "Hacer reto de Fronted Mentor", completed: false },
//   { text: "Lectura de media hora", completed: false },
// ];
// localStorage.setItem("todos_V1", JSON.stringify(defaultTodos));
