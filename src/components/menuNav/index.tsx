import { useState } from 'react';
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Button from "../../components/buttons/button/button.component";

import login from '../../assets/icons/logo.svg'
import { Menu, Close, ExitToApp } from '@mui/icons-material';
import { Avatar } from '@mui/material';

import { Container, MenuOpen, WrapperHeader } from './styles'


const MenuNav = () => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }

  const onSubmit = () => {
    console.log('sair')
  }
  return (
    <>     
        <MenuOpen className={`${open ? 'active' : ''}  menu`}>
          <div className='containerbutton'>
            {open && (      
              <Button secondary onClick={onSubmit}> <ExitToApp /> Sair</Button>       
            )}    
          </div>        
        </MenuOpen>    

      <Container>      
          <WrapperHeader className='ceeeeeeee'>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, mt: -2 }}
              onClick={handleClick}
            >
            {open ? (
              <Close className='closemenu' />
              ):(
              <Menu />
            )}
            </IconButton>
           <Box  sx={{ display: { xs: 'none', sm: 'block' }} }>
              <img src={login} alt={'Netflix logo'} />
            </Box>
            <Box  sx={{ display: { xs: 'none', sm: 'block' }} }>
            <Avatar
              alt=""
              src="../../assets/icons/logo.svg"
              sx={{ width: 56, height: 56 }}
            />
            </Box>         
          </WrapperHeader>     
      </Container>
    </>
  );
}

export default MenuNav