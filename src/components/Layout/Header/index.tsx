import React from 'react'
import styled from 'styled-components'

interface HeaderProps {
  mb?: string;
  mt?: string;
}

export const StyledHeader = styled.header<HeaderProps>`  
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${props => props.mb ? `${props.mb}rem` : ''};
  margin-top: ${props => props.mt ? `${props.mt}rem` : ''};

  > button {
    color: #103a53;
    font-size: 1.2rem;
    background: #fff;
    padding: 1.5rem 2rem;
    border: none;
    border: 1px solid #103a53;
    border-radius: 5px;
    text-decoration: none;
    transition: background 0.3s;
    cursor: pointer;

    &:hover, &:disabled {
      color: #fff;
      background: #103a53;
    }

    &:disabled {
      opacity: 0.7;
      cursor: no-drop;
    }

  }

  > a {
    color: #fff;
    font-size: 1.2rem;
    background: #019637;
    padding: 1.5rem 2rem;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    opacity: 1;
    transition: opacity 0.2s;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const Header: React.FC<HeaderProps> = ({ children, mb, mt }) => {
  return (
    <StyledHeader mb={mb} mt={mt}>
      {children}
    </StyledHeader>  
  )
}

export default Header;