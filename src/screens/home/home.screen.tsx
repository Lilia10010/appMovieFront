import { useEffect, useState } from 'react'
import Menu from '../../components/menuNav/index'
import api from '../../modules/axios/api'
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';

import bannerImage from '../../assets/banner-homem-aranha-3-s.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Container, WrapperList, Banner, TitleList, CardImage } from './styles'

export default function Home() {
  const [movieList, setMovieList] = useState([])
  const [tvList, setTVList] = useState([])
/*   const [banner, setBanner] = useState() */
 const urlImage = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2'

/*  const getList = (endpoint: string, setState: (value: any) => { */
  const getList = (endpoint: string, setState: (value: any) => void): void => {
   api
   .get(`/3/trending/${endpoint}/week?api_key=8c9751844a68e8e7105d68bd90f6eb25`)
   .then((response) => {
     setState(response.data.results)
     /* setBanner(response.data.results[0].poster_path) */
    })
    .catch((error) => {
      console.log("erros", error)
    })   


 }
  useEffect(() => {
    getList('movie', setMovieList)
    getList('tv', setTVList)
  }, [])


  return (
    <>
      <Menu />
        <Container>
          <Banner>
            <img src={bannerImage} alt="banner principal" />
         {/*  <img src={urlImage + banner} alt="poster" /> */}
          </Banner>

      <WrapperList>
          <TitleList>
            Filmes
          </TitleList>       
          <Swiper        
            spaceBetween={57}
            slidesPerView={6}    
            loop={true}        
            >
          
            {movieList.length > 0  ? (  
              movieList.map((result, index) => (  
                <SwiperSlide key={index} >
                  <CardImage>
                            <a href="#">
                              <PlayCircleFilledWhiteIcon className='iconplay'/>
                              <img src={urlImage + result['backdrop_path']} alt="poster" />
                          </a>         
                    </CardImage>
                </SwiperSlide>        
                ))
              ): ("nou")}
        </Swiper>
      </WrapperList>

        <TitleList>
            Séries
          </TitleList>       
          <Swiper        
            spaceBetween={57}
            slidesPerView={6}    
            loop={true}        
            >
          
            {tvList.length > 0  ? (  
              tvList.map((result, index) => (  
                <SwiperSlide key={index} >
                    <CardImage>
                            <a href="#">
                              <PlayCircleFilledWhiteIcon className='iconplay'/>
                              <img src={urlImage + result['backdrop_path']} alt="poster" />
                          </a>         
                    </CardImage>
                </SwiperSlide>        
                ))
              ): ("nou")}
        </Swiper>
      </Container>
    </>
    )
}