import React, {useState} from 'react';
import '../components/my-navbar-css/Home.css';
import HomeImage from '../assets/Homepage.jpeg'


function Home() {
    return (
        <div className="homeP">
            {/* <br/><p>We are the youth of the city of God Community Church </p>
     
            <p>We are the youth of the city of God</p>
            <p>We beleive in the power of the Holy Spirit and we believe in the power of the word of God</p> */}
            <img id="imghome" src={HomeImage} alt="home Page"/>
            {/* <div class="row">
                <div class="column" >
                    <h2>Column 1</h2>
                    <p>Some text..</p>
                </div>
                <div class="column">
                    <h2>Column 2</h2>
                    <p>Some text..</p>
                </div>
                <div class="column">
                    <h2>Column 3</h2>
                    <p>Some text..</p>
                </div>

                <article>
                    we have multiple activities in our community: 
                    <ul>
                        we do the following activities such as:
                        <li>Bible study</li>
                        <li>Stepping up Youth Talk Show</li>
                    </ul>
                </article>
            </div> */}
        </div>
        
    )
}

export default Home
