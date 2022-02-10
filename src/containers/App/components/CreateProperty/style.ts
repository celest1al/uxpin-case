import styled from "styled-components";

export const CreatePropertySection = styled.section`
  margin-top: 80px;
  max-width: 820px;
`;

export const CreatePropertyHeader = styled.div`
  display: flex;
  align-items: center;
  color: #515151;
`;

export const CreatePropertyTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  margin-right: 16px;
`;

export const CreatePropertyButton = styled.button`
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  text-decoration: underline;
  color: #006cff;
`;

export const CreatePropsButtonIcon = styled.img`
  margin-right: 8px;
`;

export const CreatePropertyForm = styled.form`
  padding: 16px;

  & > * + * {
    margin-top: 16px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  & > * + * {
    margin-left: 8px;
  }
`;
