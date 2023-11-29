import { useEffect, useState } from "react";

// Este es tu custom hook para hacer peticiones fetch.
export const useFetch = (url) => {
  // Estado inicial con data, isLoading y hasError.
  const [state, setState] = useState({
    data: null, // Aquí se almacenarán los datos de la respuesta.
    isLoading: true, // Indica si la solicitud está en curso.
    hasError: null, // Almacenará un posible error en la solicitud.
    fetchData: null,
  });

  // Función para realizar la solicitud fetch.
  const getFetch = async () => {
    // Indicamos que la solicitud está en curso.
    setState({
      ...state,
      isLoading: true,
    });

    await new Promise((resolve) => setTimeout(resolve, 500));

    // Realizamos la solicitud fetch a la URL proporcionada.
    const response = await fetch(url);
    // Convertimos la respuesta a formato JSON.
    const data = await response.json();

    // Actualizamos el estado con los datos obtenidos y marcamos que la carga ha terminado.
    setState({
      data,
      isLoading: false,
      hasError: null,
    });
  };

  // Efecto secundario que se ejecuta cuando la URL cambia.
  useEffect(() => {
    // Llamamos a la función que realiza la solicitud fetch.
    getFetch();
    // La función de limpieza es vacía ya que no necesitamos realizar ninguna acción al desmontar el componente.
    return () => {};
  }, [url]); // Este efecto depende de la URL para volver a ejecutarse cuando cambie.

  // Retornamos el estado actual para que el componente que use este hook pueda acceder a la data, isLoading y hasError.
  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
