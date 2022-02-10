import styled from "styled-components";

interface SelectFormProps {
  width?: string;
}

export const SelectContainer = styled.div`
  font-size: 0.875rem;
  color: #5e5e5e;
`;

export const SelectLabel = styled.label`
  margin-right: 16px;
`;

export const SelectForm = styled.select<SelectFormProps>`
  border: none;
  border-bottom: 1px solid #e6e6e6;
  background: transparent;
  width: ${(props) => props.width};
`;

export const SelectDescription = styled.p`
  margin: 0;
  margin-top: 2px;
  font-size: 0.75rem;
`
