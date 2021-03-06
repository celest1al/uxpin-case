import styled from 'styled-components'

export const TitleContainer = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 28px;

  & > * + * {
    margin-left: 8px;
  }
`

export const Title = styled.h1`
  margin: 0;
  font-size: 2.25rem;
  margin-right: 8px;
`

export const TitleIcon = styled.img`
  width: 12px;
  height: 12px;
`

export const TitleButtonContainer = styled.div`
  display: flex;
  align-items: center;
  & > * + * {
    margin-left: 6px;
  }
`
