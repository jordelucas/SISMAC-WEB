import styled from 'styled-components';

export const List = styled.ul`
  width: 576px;
  display: grid;
  justify-content: center;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  margin: auto;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  
  a {
    margin: 0 auto;
    font-size: 1.8rem;
    color: #6b6b6b;
    text-decoration: none;
    text-transform: uppercase;
    position: relative;

    span {
      display: flex;
    }

    &:after {
      content: '';
      width: 0;
      height: 3px;
      bottom: -5px;
      left: 50%;
      position: absolute;
      background: #103a53;
      transition: width 0.3s, left 0.3s;
    }

    &:hover {
      color: #000;

      &:after {
        width: 100%;
        left: 0;
      }
    }
  }
`;
