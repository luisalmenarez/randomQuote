import { PropTypes } from "prop-types";

export const Button = ({ func }) => {
  return (
    <button
      onClick={func}
      className="font-bold transition-all duration-200 hover:underline hover:text-indigo-600">
      Next Quote
    </button>
  );
};

Button.propTypes = {
  func: PropTypes.func.isRequired,
};
