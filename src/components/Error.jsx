import React from "react";
import PropTypes from "prop-types";

const Error = ({ msg }) => {
  return (
    <div>
      <p className="bg-[#b7322c] p-4 text-center text-[2rem] text-white uppercase">
        {msg}
      </p>
    </div>
  );
};
/**
 * mmsg: mensaje que se quiere presentar como error
 */
Error.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default Error;
