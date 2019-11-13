import React from 'react'
import styled from "styled-components";
import { device } from '../media_query'

const HamburgerButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 30px;
  background: transparent;
  border: none;
  padding: 0;
  box-sizing: border-box;
  cursor: pointer;
  &:focus {
    outline: none;
  }

  @media ${device.desktop} {
    display: none;
  }

  .__line {
    width: 30px;
    height: 2px;
    background: white;
  }
`;

export default function DrawerToggleButton(props) {
  return (
    <HamburgerButton onClick={props.click}>
      <div className="__line"></div>
      <div className="__line"></div>
      <div className="__line"></div>
    </HamburgerButton>
  );
}
