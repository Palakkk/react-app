import './DetailsPage.css'
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function DetailsPage() {
    const [show, setShow] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchShow = async () => {
            const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
            const data = await response.json();
            setShow(data);
        };
        fetchShow();
    }, [id]);

    if (!show) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1 className='title'>{show.name}</h1>
            <div className="container">
                <div className="info">
                    <p dangerouslySetInnerHTML={{ __html: show.summary }} />
                    {/* <p>
                    <strong>Summary: </strong>
                    {show.summary}
                </p> */}
                    <p><strong>Language:</strong>{show.language}</p>
                    <p>
                        <strong>Score: </strong>
                        {show.score}
                    </p>
                    <p>
                        <strong>Genres: </strong>
                        {show.genres.join(", ")}
                    </p>
                    <p>
                        <strong>Status: </strong>
                        {show.status}
                    </p>
                    <p>
                        <strong>Schedule: </strong>
                        {show.schedule.days.join(", ")} at {show.schedule.time}
                    </p>
                    <p>
                        <strong>Rating: </strong>
                        {show.rating.average ? show.rating.average : "N/A"}
                    </p>
                    {/* <p>{show.summary}</p> */}

                    <a href={show.officialSite} target="_blank" rel="noreferrer">
                        <strong>Visit Official Site</strong>
                    </a>
                    <p>
                        <strong>Premiered: </strong>
                        {show.premiered ? show.premiered : "N/A"}
                    </p>
                    <p>
                        <strong>Ended: </strong>
                        {show.ended ? show.ended : "N/A"}
                    </p>
                    <p>
                        <strong>Weight: </strong>
                        {show.weight ? show.weight : "N/A"}
                    </p>
                    <p>
                        <strong>Runtime: </strong>
                        {show.runtime ? show.runtime : "N/A"} mins
                    </p>

                    <a href={`https://www.imdb.com/title/${show.externals.imdb}`} target="_blank" rel="noopener noreferrer">IMDb</a><br></br>
                </div>
                <div className="image">
                    <img src={show.image.medium} alt={show.name} />
                </div>
            </div>
            <br />
            <div id="btn">
            <Link to="/" >
                <Button>Back</Button>
            </Link>
            </div>
            
        </div>

    );
}

export default DetailsPage;

