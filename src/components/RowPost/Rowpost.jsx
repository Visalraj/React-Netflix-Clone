import { useEffect, useState } from 'react';
import axios from '../../axios';
import { apiKey, imageUrl } from '../../constants/constants';
import YouTube from 'react-youtube';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './RowPost.styles.css';

function Rowpost({originals,setOriginals,title,isSmall,url}) {
	const [display,setDisplay] = useState(false);
	const [urlId,setUrlid] = useState("");

	useEffect(() => {
		axios.get(url).then((response)=>{
			setOriginals(response.data.results);
		}).catch(err=>{
			alert('NETWORK ERROR');
		})
	}, [])

	const opts = {
		height: '390',
		width: '100%',
		playerVars: {
		  autoplay: 1,
		},
	};

	function handleMovieClick(id){
		axios.get(`/movie/${id}/videos?api_key=${apiKey}&language=en-US`).then((response)=>{
			if(response.data.results.length!==0){
				setUrlid(response.data.results[0].key);
				setDisplay(true);
			}else{
				console.log('Trailer Not Available Currently');
			}
		})

	}
	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="posters" >
				{originals ? originals.map((obj,index)=>
					<img src={`${imageUrl}`+obj.backdrop_path} onClick={()=>handleMovieClick(obj.id)} alt='Posters' key={index} className={isSmall ? 'smallposter poster':'poster'}/>
				):' '}
			</div>
			{display ? <YouTube videoId={urlId} opts={opts}  /> : ' '}
		</div>

 	)
}

export default Rowpost