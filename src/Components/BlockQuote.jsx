import { PropTypes } from "prop-types";

export const QuoteComponent = ({ quote, author }) => {
  return (
    <blockquote className="border-gray-500 pl-4 text-center m-4 p-4">
      <p className="italic p-2 md:text-2xl">{quote}</p>
      <footer className="text-gray-600 text-xs md:text-2xl text-right">
        - {author}
      </footer>
    </blockquote>
  );
};

QuoteComponent.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
