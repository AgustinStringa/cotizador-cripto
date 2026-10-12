import React from "react";
import PropTypes from "prop-types";

const Error = ({ msg }) => {
  return (
    <div
      role="alert"
      className="flex items-center gap-3 rounded-xl border border-rose-500/30 bg-rose-950/40 p-4 text-xs font-semibold text-rose-300 shadow-sm"
    >
      <svg className="h-5 w-5 shrink-0 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>{msg}</span>
    </div>
  );
};

Error.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default Error;
