import React from 'react'
import { YoutubePlayer} from 'reactjs-media'; 

const Videos = () =>{
    return (
        <>
        <YoutubePlayer
            src="https://www.youtube.com/watch?v=iInWyhmQ6YE"
            // poster="../assets/Homepage.jpeg"
            width={650}
            height={600}
        />

        <YoutubePlayer
            src="https://www.youtube.com/watch?v=1eWeheJFBF4"
            // poster="../assets/Homepage.jpeg"
            width={650}
            height={600}
        />
        </>
    );
};

export default Videos; 
