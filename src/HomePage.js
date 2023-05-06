import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import { Grid, Button } from 'semantic-ui-react'
import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';

const API_URL = 'https://api.tvmaze.com/search/shows?q=all';

function HomePage() {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        fetch(API_URL + 'all')
            .then(response => response.json())
            .then(data => setShows(data))
            .catch(error => console.log(error));
    }, [])

    return (
        <Container>
                <div><h1 id='main-heading'>INFOTV AT YOUR SERVICE</h1></div>
            <div className='grid-container'>
                {
                    shows.map(show =>
                        <div key={show.show.id} className='grid-item'>
                            <img src={show.show.image.medium} /><br></br>
                            <h1>{show.show.name}</h1>
                            <p><strong>Language:</strong>{show.show.language}</p>
                            <p>
                                <strong>Score: </strong>
                                {show.score}
                            </p>
                            {/* Score:{show.score} */}
                            <p>
                                <strong>Genres: </strong>
                                {show.show.genres ? show.show.genres.join(", ") : "N/A"}
                            </p>
                            <p>
                                <strong>Rating: </strong>
                                {show.show.rating.average ? show.show.rating.average : "N/A"}
                            </p>

                            <a href={`https://www.imdb.com/title/${show.show.externals.imdb}`} target="_blank" rel="">{show.show.externals.imdb ? "IMDb" : "N/A"}</a><br></br>
                            <br />
                            <Link to={`/details/${show.show.id}`} key={show.show.id}>
                                <Button >View Details</Button>
                            </Link>
                        </div>
                    )
                }
            </div>
        </Container>
    );
};

export default HomePage;
