import {useEffect, useState} from "react";
import {Layout} from "../components/Layout";
import {Link} from "react-router-dom";

export default function Artists() {
    const [artists, setArtist] = useState([]);

    useEffect(() => {
        fetch('https://api.artic.edu/api/v1/artists?page=2&limit=20')
            .then((response) => response.json())
            .then((data) => {
                if (data && data.data) {
                    setArtist(data.data);
                }
                console.log(data)
            });
    }, []);

    return (
        <div>
            <Layout>
                {artists.map((artist, index) => {
                    return (
                        <div key={index}>
                            <Link to={`/artwork/${artist.title}`}>
                                {artist.title}
                            </Link>
                            {/*<h2>{artist.title || 'No name available'}</h2>*/}

                            <p>Alternate Names: {artist.alt_titles ? artist.alt_titles.join(', ') : 'None'}</p>
                            <p><strong>Birth Date:</strong> {artist.birth_date || 'Unknown'}</p>
                            <p><strong>Death Date:</strong> {artist.death_date || 'Unknown'}</p>
                            <p>Description:  <span dangerouslySetInnerHTML={{__html:artist.description || 'No description available'}}/></p>

                        </div>
                    )
                })}
            </Layout>
        </div>
    )

}