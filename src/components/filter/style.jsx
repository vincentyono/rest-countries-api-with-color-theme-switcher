import {
  darkBoxShadow,
  lightBoxShadow,
  white,
  veryDarkBlueText,
  veryDarkBlueBackground,
  fontFamily,
} from "../../variables";
import styled, { css } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  gap: 2rem;
  padding-inline: 1.5rem;
  border-radius: 5px;
  cursor: pointer;

  ${(props) => {
    if (props.$dark) {
      return css`
        box-shadow: ${darkBoxShadow};
        background-color: ${veryDarkBlueBackground};
      `;
    } else {
      return css`
        box-shadow: ${lightBoxShadow};
      `;
    }
  }}

  svg {
    width: 1rem;
    height: 1rem;
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
`;

export const OptionText = styled.span`
  font-family: ${fontFamily};
  font-weight: 600;

  ${(props) => {
    if (props.$dark) {
      return css`
        color: ${white};
      `;
    } else {
      return css`
        color: ${veryDarkBlueText};
      `;
    }
  }}
`;

export const DropDownContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  top: 100%;
  left: 0;
  right: 0;
  border-radius: 5px;
  padding: 1rem 1rem;
  
  margin-top: 0.15rem;
  height: fit-content;

  ${(props) => {
    if (props.$dark) {
      return css`
        box-shadow: ${darkBoxShadow};
        background-color: ${veryDarkBlueBackground};
      `;
    } else {
      return css`
        box-shadow: ${lightBoxShadow};
      `;
    }
  }}

  ${(props) => {
    if (props.$open) {
        return css`
            display: flex;
        `;
    } else {
        return css`
            display: none;
        `;
    }
  }}
`;

export const DropDownItem = styled.span`
  font-family: ${fontFamily};
  font-weight: 600;
  padding-inline: 0.5rem;

  &:hover {
    ${(props) => {
        if (props.$dark) {
          return css`
            color: pink;
          `;
        } else {
          return css`
            color: white;
          `;
        }
    }}
  }

  ${(props) => {
    if (props.$dark) {
      return css`
        color: ${white}
      `;
    } else {
      return css`
        color: ${veryDarkBlueText}
      `;
    }
  }}
`
