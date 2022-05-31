import { css } from "styled-components";

export default function flex({
  jutify = "start",
  align = "center",
  direction = "row",
  gap,
}) {
  return css`
    display: flex;
    justify-content: ${jutify};
    align-self: ${align};
    flex-direction: ${direction};
    gap: ${gap};
  `;
}
