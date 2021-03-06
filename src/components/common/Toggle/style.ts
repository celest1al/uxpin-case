import styled from 'styled-components'

interface IToggleProps {
  isShowed?: boolean
}

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ToggleLabel = styled.p<IToggleProps>`
  margin: 0;
  margin-right: 16px;
  font-size: 0.875rem;
  color: ${props => (props.isShowed ? '#5e5e5e' : '#e6e6e6')};
`

export const ToggleFormContainer = styled.div`
`

export const ToggleFormLabel = styled.label<IToggleProps>`
  color: ${props => (props.isShowed ? '#515151' : '#e6e6e6')};
`

export const ToggleForm = styled.input<IToggleProps>`
  margin: 0 0 1.5rem;
  box-sizing: border-box;
  font-size: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: stretch;
  width: 0;
  height: 0;
  position: absolute;
  left: -9999px;
  color: ${props => (props.isShowed ? '#515151' : '#e6e6e6')};

  & + ${ToggleFormLabel} {
    margin: 0;
    padding: 4px 8px;
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    border: solid 1px #f0f0f0;
    background-color: #fff;
    font-size: 0.875rem;
    line-height: 140%;
    font-weight: 600;
    text-align: center;
    box-shadow: 0 0 0 rgba(255, 255, 255, 0);
    transition: border-color 0.15s ease-out, color 0.25s ease-out,
      background-color 0.15s ease-out, box-shadow 0.15s ease-out;
  }

  &:first-of-type {
    border-radius: 6px 0 0 6px;
    border-right: none;
  }
  &:last-of-type {
    border-radius: 0 6px 6px 0;
    border-left: none;
  }

  &:hover + ${ToggleFormLabel} {
    border-color: #213140;
  }

  &:checked + ${ToggleFormLabel} {
    background-color: ${props => (props.isShowed ? '#e6e6e6' : '#f0f0f0')};
    color: ${props => (props.isShowed ? '#515151' : '#e6e6e6')};
    box-shadow: 0 0 10px rgba(#66b3fb, 0.5);
    border-color: #e6e6e6;
    z-index: 1;
  }
  &:focus + ${ToggleFormLabel} {
    outline: dotted 1px #ccc;
    outline-offset: 0.45rem;
  }
`
