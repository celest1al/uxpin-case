import styled from "styled-components";

export const InputContainer = styled.div`
  color: #5e5e5e;
  font-size: 0.875rem;
`;

export const InputLabel = styled.label`
  margin-right: 16px;
`;

export const InputForm = styled.input`
  border: none;
  border-bottom: 1px solid #e6e6e6;
  outline: none;
  color: #5e5e5e;

  &:focus {
    border-bottom: 1px solid #1976d2;
  }
`;

export const InputDescription = styled.p`
  margin: 0;
  margin-top: 2px;
  font-size: 0.75rem;
`
