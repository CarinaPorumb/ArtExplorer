import {useEffect, useState} from "react";
import {Layout} from "../components/Layout";

export default function Artworks() {

    const [artworks, setArtworks] = useState([]);

    useEffect(() => {
        fetch('https://api.artic.edu/api/v1/artworks?limit=20')
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
                            {<img src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
                                  alt={art.title} style={{maxWidth: '100%'}}/>}

                            <h2>{art.title || 'No title available'}</h2>
                            <p>Artist: {art.artist_display || 'Unknown'}</p>
                            <p>Type: {art.artwork_type_title || 'N/A'}</p>
                            <p>Period: {art.date_display || 'N/A'}</p>
                            <p>Style/Category: {art.category_titles ? art.category_titles.join(', ') : 'N/A'}</p>
                            <p>Place of Origin: {art.place_of_origin || 'N/A'}</p>
                            <p>Description: <span dangerouslySetInnerHTML={{__html: art.description || 'N/A'}}/></p>
                            <p>Viewing Location: {art.on_loan_display ? <span
                                dangerouslySetInnerHTML={{__html: art.on_loan_display}}/> : 'Check with museum'}</p>

                        </div>
                    );
                })}
            </Layout>
        </div>
    );

}