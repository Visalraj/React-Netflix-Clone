import React from 'react';
import Banner from '../Banner/Banner';
import Rowpost from '../RowPost/Rowpost';
import { originalurl,actionurl } from '../../urls';
import { useState } from 'react';

function Home() {
    const [moviePost,setMoviePost] = useState([]);
    const [originals,setOriginals] = useState([]);
  
  return (
    <>
		<Banner moviePost={moviePost} setMoviePost={setMoviePost}/>
		<Rowpost title={'NetFlix Originals'} originals={originals} setOriginals={setOriginals} url={originalurl}/>
		<Rowpost title={'Action Movies'} originals={originals} setOriginals={setOriginals} isSmall url={actionurl}/>

    </>
  )
}

export default Home