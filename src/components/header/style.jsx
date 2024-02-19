import { darkBoxShadow, lightBoxShadow, veryLightGray, white, paddingInline, veryDarkBlueBackground, veryDarkBlueText } from "../../variables";
import styled, { css } from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem ${paddingInline};
  ${(props) => {
    if(props.$dark) {
        return css`
            background-color: ${veryDarkBlueBackground};
            box-shadow: ${darkBoxShadow};
            
            `
          } else {
            return css`
            background-color: ${veryLightGray};
            box-shadow: ${lightBoxShadow};
        `
    }
  }}
`;

export const Title = styled.h1`
  font-family: "Nunito Sans";
  font-size: 1.5rem;
  ${(props) => {
    if(props.$dark) {
        return css`color: ${white}`
    } else {
        return css`color: ${veryDarkBlueText}`
    }
  }}
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  min-width: fit-content;
  gap: 0.75rem;
  border: none;
  cursor: pointer;
  ${(props) => {
    if(props.$dark) {
        return css`
            background-color: ${veryDarkBlueBackground};
        `
    } else {
        return css`
            background-color: ${veryLightGray};
        `
    }
  }}

  svg {
    min-width: 1.25rem;
    min-height: 1.25rem;
    stroke: ${veryDarkBlueText};
    ${(props) => {
        if(props.$dark) {
            return css`
                fill: ${white};
            `     
        }
    }}
  }

  span {
    min-width: fit-content;
    font-family: "Nunito Sans";
    font-size: 1rem;
    font-weight: 600;
    ${(props) => {
        if(props.$dark) {
            return css`color: ${white}`
        } else {
            return css`color: ${veryDarkBlueText}`
        }
    }}
  }
`;