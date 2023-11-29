import { QuoteContainer } from "./Components";

export const QuoteApp = () => {
  return (
    <>
      <main className="h-screen grid place-items-center bg-black text-white">
        <section className="grid place-items-center">
          <QuoteContainer />
        </section>
      </main>
    </>
  );
};
