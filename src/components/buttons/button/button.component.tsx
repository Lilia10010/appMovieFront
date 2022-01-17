import styled, {css} from 'styled-components'

const Primary = css`
  color: ${props => props.theme.palette.typography.primary};
  background: ${props => props.theme.palette.core.primary};
  border-radius: ${props => props.theme.border.radius['5']};

  &:hover{
    background: ${props => props.theme.palette.core.primaryHover}
  }
`

const Secondary = css`
  color: ${props => props.theme.palette.typography.primary};
  background: ${props => props.theme.palette.core.secondary};
  border-radius: none;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  border-bottom: solid 1px white;

  &:hover{
    background: #000;
  }
`



const Button = styled.a<{primary?: boolean, secondary?:boolean}>`  
  width: 100%;
  margin: 1rem 0;
  cursor: pointer;
  display: inline-block;
  padding: 0.5rem 0;
  background: ${props => props.theme.palette.core.baseBackground};
  color: ${props => props.theme.palette.typography.primary};
  transition: ${props => props.theme.animation.primary};
  text-align: center;


  ${props => props.primary && Primary}

  ${props => props.secondary && Secondary}



 
`

export default Button