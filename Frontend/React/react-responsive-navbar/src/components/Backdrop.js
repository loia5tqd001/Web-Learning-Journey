import React from 'react'
import styled from "styled-components";

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.3);
  z-index: 100;
`

export default function Backdrop(props) {
  return (
    <StyledBackdrop onClick={props.click}/>
  )
}
