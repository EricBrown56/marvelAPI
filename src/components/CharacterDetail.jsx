import { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterDetail = ({characterId}) => {
    const [hero, setHero] = useState(null);
    
   



    useEffect(() => {
       
        const fetchDetails = async () => {
            try {
                const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=97643f15d15c73234f2855d8d24e6072&hash=aef637835a75d2e8206cff8a604dbfc6`);
                console.log(response.data.data.results);
                setHero(response.data.data.results[0]);
            } catch (error) {
                console.error('Error fetching heroes:', error);
            }
        };

        fetchDetails();
    }, [characterId]);

    return (
        <div>
            <h3>Character Details</h3>
            <ul>
                {hero && (
                    <>
                    <li>
                        
                        <h3>{hero.name}</h3>
                        <img src={`${hero.thumbnail.path}/portrait_xlarge.${hero.thumbnail.extension}`} alt={hero.name} />
                        
                    </li>

                    <li>
                        <h4>Description</h4>
                        <p>{hero.description}</p>
                    </li>

                    <li>
                        <h4>Comics</h4>
                        <ul>
                            {hero.comics.items.map(comic => (
                                <li key={comic.name}>{comic.name}</li>
                            ))}
                        </ul>
                    </li>
                    </>
                )}
            </ul>
        </div>
    );
}

export default CharacterDetail;