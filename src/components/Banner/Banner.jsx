import { useEffect } from 'react';
import './Banner.styles.css';
import axios from '../../axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { apiKey } from '../../constants/constants';
import { imageUrl } from '../../constants/constants';



function Banner({moviePost,setMoviePost}) {
 useEffect(() => {
    axios.get(`trending/all/week?api_key=${apiKey}&language=en-US`).then((response) => {

        setMoviePost((previousMovies)=>{
            const newMoviePost = response.data.results.slice(0, 10);
            return [...previousMovies, ...newMoviePost];
        });
    });
  }, []);

  function heroBanneritem(id){
    axios.get(`/movie/${id}/videos?api_key=${apiKey}&language=en-US`).then((response)=>{
        if (response.data.results.length !== 0) {
          window.open( "https://www.youtube.com/watch?v=" + response.data.results[0].key);  
        } else {
          console.log("Trailer Not Available Currently");
        }
    })
  }

  const carouselOptions = {
    autoPlay: true,
    interval: 5000,
    stopOnHover: true,
    showArrows: false,
    infiniteLoop: true,
    showStatus: false,
    showThumbs: false,
  };
 
  return (
    <Carousel {...carouselOptions}>
        {moviePost ? moviePost.map((item,index)=>{
            return (
            <div key={index} className='banner' style={{backgroundImage:`url(${imageUrl+item.backdrop_path})`}}>
                <div className="content">
                    <h1 className="title">{ item.title ? item.title: item.name}</h1>
                    <div className="banner-buttons">
                        <button className="button" onClick={()=>heroBanneritem(item.id)}>Watch Trailer</button>
                        <button className="button">My List</button>
                    </div>
                    <h1 className='description'>{item.overview}</h1>
                </div>
                <div className="fade_bottom"> </div>
            </div>
         )}):''}
    </Carousel>
  )
}

export default Banner