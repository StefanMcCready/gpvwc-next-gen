import React from 'react';
import styled from 'styled-components';

const themes = {
  light: {
    default: {
      color: '#fff',
      border: '#fff',
      background: 'transparent'
    },
    hover: {
      color: '#000',
      background: '#fff'
    }
  },
  dark: {
    default: {
      color: '#000',
      border: '#000',
      background: 'transparent'
    },
    hover: {
      color: '#fff',
      background: '#000'
    }
  }
}

const StyledButton = styled.button`
  outline: none;
  width: auto;
  padding: 16px;
  border-radius: 4px;
  color: ${props => themes[props.theme].default.color};
  border: 2px solid ${props => themes[props.theme].default.border};
  background-color: ${props => themes[props.theme].default.background};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: ${props => themes[props.theme].hover.color};
    background-color: ${props => themes[props.theme].hover.background};
  }
`

export const Button = ({ children, theme }) =>
  <StyledButton theme={theme}>{children}</StyledButton>