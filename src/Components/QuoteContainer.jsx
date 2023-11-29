import { useFetch } from "../hooks/useFetch";
import { PuffLoader } from "react-spinners";

// Este componente utiliza el hook personalizado useFetch para obtener citas de Breaking Bad.
export const QuoteContainer = () => {
  // Definimos la URL de la API de Breaking Bad Quotes.
  const url = "https://api.quotable.io/random";

  // Utilizamos el hook useFetch para obtener datos, estado de carga y posibles errores.
  const { data, isLoading, hasError } = useFetch(url);

  // Desestructuramos los datos para obtener el autor y la cita de la primera posición del array.
  const { author, content } = !!data && data;

  //   console.log({ data, isLoading, hasError });

  // Renderizamos el componente.
  return (
    <section className="w-4/5 grid place-items-center">
      <h2 className="italic m-2 text-2xl font-bold text-indigo-600">
        Random Quotes
      </h2>
      {isLoading ? (
        // Muestra un mensaje de carga mientras los datos se están recuperando.
        <div className="p-10">
          <PuffLoader size={150} color="#4f46e5" />
        </div>
      ) : (
        // Muestra la cita y el autor cuando los datos han sido cargados.
        <blockquote className="border-gray-500 pl-4 text-center m-4 p-4">
          <p className="italic p-2 md:text-3xl">{content}</p>
          <footer className="text-gray-600 text-xs md:text-3xl text-2xl text-right">
            {author}
          </footer>
        </blockquote>
      )}
      <button className="font-bold transition-all duration-200 hover:underline hover:text-indigo-600">
        Next Quote
      </button>
    </section>
  );
};
