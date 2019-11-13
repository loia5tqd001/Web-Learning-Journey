import React from 'react'
import styled from "styled-components";
import { COLORS } from '../theme/colors'

const StyledSideDrawer = styled.nav`
  height: 100%;
  background: white;
  box-shadow: 1px 0 7px rgba(0,0,0,.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 400px;
  z-index: 200;
  transform: translateX(${props => props.show ? 0 : 'calc(-100% - 8px)'});
  transition: transform .3s ease-out;

  ul {
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    li {
      margin: .5rem 0;
    }
    a {
      color: ${COLORS.PURPLE};
      text-decoration: none;
      font-size: 1.2rem;
      &:hover, 
      &:active {
        color: ${COLORS.ORANGE};
      }
    }
  }
`

export default function SideDrawer(props) {
  return (
    <StyledSideDrawer show={props.show}>
      <ul>
        <li><a href="/">Products</a></li>
        <li><a href="/">Users</a></li>
      </ul>
    </StyledSideDrawer>
  )
}
