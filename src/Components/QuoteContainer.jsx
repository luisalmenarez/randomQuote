import { useCounter, useFetch } from "../hooks";
import { Button, Loading, QuoteComponent } from "../Components";

// Este componente utiliza el hook personalizado useFetch para obtener citas de Breaking Bad.
export const QuoteContainer = () => {
  const { counter, increment } = useCounter();

  // Utilizamos el hook useFetch para obtener datos, estado de carga y posibles errores.
  const { data, isLoading } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  const onChangeQuote = () => {
    increment();
  };

  // Desestructuramos los datos para obtener el autor y la cita de la primera posición del array.
  const { author, quote } = !!data && data[0];

  // Renderizamos el componente.
  return (
    <section className="w-4/5 grid place-items-center">
      <h2 className="w-full italic text-center m-2 text-2xl font-bold text-indigo-600">
        Random Quotes
      </h2>
      {isLoading ? (
        <Loading />
      ) : (
        <QuoteComponent author={author} quote={quote} />
      )}
      <Button func={onChangeQuote} />
    </section>
  );
};
