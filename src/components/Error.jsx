import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ErrorStyle = styled.p`
  background-color: #b7322c;
  padding: 1rem;
  color: white;
  font-size: 2rem;
  text-transform: uppercase;

  text-align: center;
`;
const Error = ({ msg }) => {
  return (
    <div>
      <ErrorStyle>{msg}</ErrorStyle>
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
