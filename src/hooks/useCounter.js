import { useState } from "react";

// Custom hook para gestionar un contador con funciones de incremento, decremento y reinicio.
// Se puede proporcionar un valor inicial opcional, que por defecto es 0.
export const useCounter = (initialValue = 1) => {
  // Estado del contador utilizando useState de React.
  const [counter, setCounter] = useState(initialValue);

  // Función para incrementar el contador por un valor específico o 1 por defecto.
  const increment = (value = 1) => {
    setCounter(counter + value);
  };

  // Función para decrementar el contador por un valor específico o 1 por defecto,
  // con la condición de que el contador no sea menor que 1.
  const decrement = (value = 1) => {
    if (counter >= 1) {
      setCounter(counter - value);
    }
  };

  // Función para reiniciar el contador al valor inicial.
  const reset = () => {
    setCounter(initialValue);
  };

  // Devuelve el estado actual del contador y las funciones asociadas para manipularlo.
  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
