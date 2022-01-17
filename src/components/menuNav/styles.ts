import styled from 'styled-components'
import { Toolbar } from '@mui/material'

export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`


export const MenuOpen = styled.div`
    position: absolute;
    top: 0px;
    left: 0;
    padding: 100px 5px 0;
    box-sizing: 0 50px 25px rgba(0,0,0, 0.1);
    transition: 0.5s;
    visibility: hidden;
    width: 0;    
    color: red;
    height: 100vh;

    &.active{
    background: #00000063;
    visibility: visible;
    width: 299px;

    svg{
      margin-right: 0.5rem;
    }

}
`
export const WrapperHeader = styled(Toolbar)`
  max-width: 1200px;
  margin-top: 43px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 12px 0px;
  color: #fff;
  background: transparent;
`