import styled, { css } from 'styled-components'

export const WrapperHeader = styled.div`
position: absolute;
 background: red;

 width: 100vw;
 height: 100px;
`

export const WrapperMenu = styled.div<{primary: boolean}>`
.openMenuMobile{

  ${props => props.primary && css`
  width: 300px;
  background: pink;
  height: 500px;
  animation: fadeIn 0.50s forwards;
  ` }
  ${props => !props.primary && css`
 
  background: blue;
  height: 500px;

  ` }
}
.icon{
   width: 350px;
  height: 5px;
  color: #fff; 
  background-color: #fff;
  margin: 6px 0;
  transition: 0.4s;
  
}

.container-menu-close{
  position: absolute;
  width: 300px;
  height: 100vh;
  background: pink;
  animation: fadeIn 0.50s forwards;
}

.closeOneIcon{
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}
.closeTwoIcon{
  margin-top: 16px;
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}
.closeThreeIcon{
  display: none;
}
 

}  
`