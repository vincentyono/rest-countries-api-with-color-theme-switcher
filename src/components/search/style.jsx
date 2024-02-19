import { darkBoxShadow, lightBoxShadow, fontFamily, veryDarkBlueBackground, veryDarkBlueText, white } from "../../variables";
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0.75rem 1.5rem;
  width: fit-content;
  border-radius: 5px;
  svg {
    width: 1.25rem;
    height: 1.25rem;
    ${(props) => {
        if (props.$dark) {
          return css`
            stroke: ${white};
          `;
        } else {
          return css`
            stroke: ${veryDarkBlueText};
          `;
        }
      }}
  }
  ${(props) => {
    if (props.$dark) {
      return css`
        background-color: ${veryDarkBlueBackground};
        box-shadow: ${darkBoxShadow};
      `;
    } else {
      return css`
        background-color: ${white};
        box-shadow: ${lightBoxShadow};
      `;
    }
  }}
`;

export const Input = styled.input`
  outline: none;
  border: none;
  font-family: ${fontFamily};
  width: 50ch;
  ${(props) => {
    if (props.$dark) {
      return css`
        color: ${white};
        background-color: ${veryDarkBlueBackground};
      `;
    } else {
      return css`
        background-color: ${white};
      `;
    }
  }}
`;
