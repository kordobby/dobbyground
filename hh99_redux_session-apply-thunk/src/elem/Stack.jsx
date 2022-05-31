import React from "react";
import styled from "styled-components";

export default function Stack({ children, ...rest }) {
  return <StStack {...rest}>{children}</StStack>;
}

const StStack = styled.div`
  width: 100%;
  height: ${({ h }) => h};
  display: flex;
  justify-content: ${({ justify }) => {
    switch (justify) {
      case "center":
        return "center";
      case "between":
        return "space-between";
      case "start":
        return "start";
      case "end":
        return "end";
      default:
        break;
    }
  }};

  align-items: ${({ align }) => {
    switch (align) {
      case "center":
        return "center";
      case "start":
        return "start";
      case "end":
        return "end";
      default:
        break;
    }
  }};

  flex-direction: ${({ direction }) =>
    direction === "row" ? "row" : direction === "col" ? "column" : "row"};

  gap: ${({ gap }) => gap};
  padding: ${({ pd }) => pd};
  margin: ${({ mg }) => mg};
  flex-wrap: ${({ wrap }) => wrap};
`;
