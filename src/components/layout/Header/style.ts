import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid #e6e6e6;
  color: #373737;
`;

export const HeaderContent = styled.div`
  display: flex;

  & > * + * {
    margin-left: 8px;
  }
`;

export const HeaderIcon = styled.img`
  width: 14px;
  height: 14px;
`;

export const HeaderIconContainer = styled.button`
  cursor: pointer;
  background: none;
  border: none;
`;

export const IconSeparator = styled.div`
  height: 24px;
  border-right: 1px solid #dadada;
  margin-left: 8px;
`;

export const Breadcrumbs = styled.ul`
  list-style: none;
  padding: 0;
  padding-left: 16px;
  margin: 0;
  & > li:after {
    content: "/";
    padding: 0 8px;
  }
`;

export const Crumb = styled.li`
  display: inline-block;
  font-weight: 700;

  &:last-of-type:after {
    content: "";
    padding: 0;
  }

  a {
    color: #777777;
    font-weight: 400;
    text-decoration: none;
    cursor: pointer;
    &:hover,
    &:active {
      text-decoration: underline;
    }
  }
`;
