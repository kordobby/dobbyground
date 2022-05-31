import React from "react";
import styled from "styled-components";

const Button = ({ children, ...rest }) => {
  return <StButton {...rest}>{children}</StButton>;
};

export default Button;

const StButton = styled.button`
  height: 40px;
  width: 120px;
  border: none;
  border-radius: 10px;
  background-color: var(--green);
  color: var(--white);
  cursor: pointer;
`;
