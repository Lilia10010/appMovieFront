import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  margin-bottom: 100px;
`
export const WrapperList = styled.div`
  margin-bottom: 75px;

`

export const CardImage = styled.div`
position: relative;
width: 178px;
height: 284px;  

a{
  position: relative;
  margin-left: 37px;
  transition: 0.3s;

  img{
     width: 178px;
     height: 264px;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;     
   }

   &:hover{
     opacity: 0.7;
     box-shadow: rgb(0 0 0) 0px 5px 15px;
     
     .iconplay{
       color: #E31A13;
       opacity: 1;
       -webkit-transform: rotate(360deg); 
        transform:rotate(360deg);

     }
    }  

   .iconplay{
     position: absolute;
     margin: auto;
     left: 0;
     right: 0;
     top: 0;
     bottom: 0;    
     width : 60px;
     height: 60px;
     opacity: 0;
     transition: 0.3s;
     transition-duration: 0.8s;
   }

}
`

export const TitleList = styled.h3`
  color: white;
  font-size: 24px;
`

export const Banner = styled.div`
max-width: 1200px;
margin-top: 110px;
margin-bottom: 100px;
width: 100%;
max-height: 534;

img{
  max-width: 1200px;
  width: 100%;
  border-radius: 65px;
}
`