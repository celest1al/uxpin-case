import styled from "styled-components";

export const PropertyListContainer = styled.div`
  max-width: 820px;
`;

export const PropertyFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin-right: 17px;

  & > * + * {
    margin-top: 12px;
  }
`;
