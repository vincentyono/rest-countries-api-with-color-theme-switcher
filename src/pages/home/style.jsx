import { darkBoxShadow, lightBoxShadow, paddingInline, veryDarkBlueBackground, veryLightGray } from "../../variables";
import styled,  { css } from "styled-components";

export const Main = styled.main`
  padding: 3rem ${paddingInline};
  ${(props) => {
    if (props.$dark) {
      return css`
        background-color: ${veryDarkBlueBackground};
        `;
      } else {
        return css`
        // background-color: ${veryLightGray};
      `;
    }
  }}
`;

export const FilterContainer = styled.section`
    display: flex;
    justify-content: space-between;
`

export const CountryContainer = styled.section``