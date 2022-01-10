import { useState } from 'react'
import Button from '../buttons/button/button.component'
import { WrapperHeader, WrapperMenu } from './menu.style'


export default function Menu() {
  const [ openMenu, setOpenMenu ] = useState(false)  

  const handleClick = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu)
  };

  const handleRequestClose = () => {
    setOpenMenu(false);
  };


    return (
      <WrapperHeader>
        <WrapperMenu onClick={handleClick} primary={!openMenu}>         
           <div className="openMenuMobile">
              <div className={`icon  ${openMenu ? 'openIcon' : 'closeOneIcon'} `}></div>
              <div className={`icon  ${openMenu ? 'openIcon' : 'closeThreeIcon'} `}></div>
              <div className={`icon  ${openMenu ? 'openIcon' : 'closeTwoIcon'} `}></div>
            </div>
           <div >

           </div>
      </WrapperMenu>
        
      </WrapperHeader>
    )
  
}