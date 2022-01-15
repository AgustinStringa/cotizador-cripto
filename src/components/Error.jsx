import React from "react";
import styled from "@emotion/styled";

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
      <ErrorStyle className="error">{msg}</ErrorStyle>
    </div>
  );
};

export default Error;
