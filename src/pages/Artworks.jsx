import {useEffect, useState} from "react";
import {Layout} from "../components/Layout";

export default function Artworks() {

    const [artworks, setArtworks] = useState([]);

    //https://collectionapi.metmuseum.org/public/collection/v1/objects/[objectID]

    useEffect(() => {
        fetch('https://api.artic.edu/api/v1/artworks?limit=10')
            .then((response) => response.json())
            .then((data) => {
                if (data && data.data) {
                    setArtworks(data.data);
                }
                console.log(data)
            });
    }, []);


    return (
        <div>
            <Layout>
            {artworks.map((art, index) => {
                return (
                    <div key={index}>
                        {art.image && <img src={art.image} alt={art.title} style={{maxWidth: '100%'}}/>}
                        <h3>{art.title || 'No title available'}</h3>
                        <p>Artist title: {art.artist_title}</p>
                        <p>Type: {art.artwork_type_title}</p>
                        {/*<p>Description: {art.description}</p>*/}
                        <p>Place of origin: {art.place_of_origin}</p>

                        <p><strong>Period:</strong> {art.period || 'N/A'}</p>
                        <p><strong>Style:</strong> {art.style || 'N/A'}</p>
                        <img src={art.thumbnail.lqip}/>
                        <hr/>
                    </div>
                );
            })}
            </Layout>
        </div>
    );

}