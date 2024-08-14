import { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterDetail = () => {
    const [selectedHero, setSelectedHero] = useState(null);
    
   



    useEffect(() => {
        const characterId = selectedHero.id;
        const fetchDetails = async () => {
            try {
                const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=97643f15d15c73234f2855d8d24e6072&hash=aef637835a75d2e8206cff8a604dbfc6`);
                console.log(response.data.data.results);
                
            } catch (error) {
                console.error('Error fetching heroes:', error);
            }
        };

        fetchDetails();
    })

    return (
        <div>
            <h2>Character Details</h2>
            <ul>
                {selectedHero && (
                    <>
                    <li>
                        
                        <h3>{selectedHero.name}</h3>
                        <img src={`${selectedHero.thumbnail.path}/portrait_xlarge.${selectedHero.thumbnail.extension}`} alt={selectedHero.name} />
                        
                    </li>

                    <li>
                        <h4>Description</h4>
                        <p>{selectedHero.description}</p>
                    </li>

                    <li>
                        <h4>Comics</h4>
                        <ul>
                            {selectedHero.comics.items.map(comic => (
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