import React from 'react'
import styled from "styled-components"
import DrawerToggleButton from "./DrawerToggleButton"
import { COLORS } from '../theme/colors'
import { device } from '../media_query'

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: ${COLORS.PURPLE};
  height: 56px;

  .__navigation {
    display: grid;
    align-items: center;
    grid-template-columns: auto auto 1fr auto auto;
    grid-gap: 2rem;
    height: 100%;
    padding: 0 3rem 0 1rem;

    .__logo a {
      color: white;
      text-decoration: none;
      font-size: 1.5rem;
    }

    &-item {
      @media ${device.mobile} {
        display: none;
      }
      @media ${device.desktop} {
        display: inline-block;
      }
    }

    &-item ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
    }
    &-item a {
      color: white;
      text-decoration: none;
      &:hover,
      &:active {
        color: ${COLORS.ORANGE};
      }
    }
  }
`;

export default function Toolbar(props) {
  return (
    <StyledHeader>
      <nav className="__navigation">
        <div><DrawerToggleButton click={props.drawerToggleClickHandler}/></div>
        <div className="__logo"><a href="/">THE LOGO</a></div>
        <div className="spacer" />
        <div className="__navigation-item"><a href="/">Products</a></div>
        <div className="__navigation-item"><a href="/">Users</a></div>
      </nav>
    </StyledHeader>
  )
}

