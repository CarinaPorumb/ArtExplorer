import {useEffect, useState} from "react";
import {Layout} from "../components/Layout";

export default function Artists() {
    const [arts, setArts] = useState([]);

    useEffect(() => {
        fetch('https://api.artic.edu/api/v1/artists?page=2&limit=20')
            .then((response) => response.json())
            .then((data) => {
                if (data && data.data) {
                    setArts(data.data);
                }
                // console.log(data)
            });
    }, []);

    return (
        <div>
            <Layout>
                {arts.map((art, index) => {
                    return (

                        <div key={index}>
                            <p> {art.title || 'No title available'}</p>
                            <strong>Birth Date:</strong> {art.birth_date || 'N/A'}<br/>
                            <strong>Death Date:</strong> {art.death_date || 'N/A'}
                            <hr/>
                        </div>
                    );
                })}
            </Layout>
        </div>

    );
}