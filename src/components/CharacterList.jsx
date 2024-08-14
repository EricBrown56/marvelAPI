import { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterList = () => {
    const [heroes, setHeroes] = useState([]);
    

    useEffect(() => {
        const fetchHeroes = async () => {
            try {
                const response = await axios.get('https://gateway.marvel.com/v1/public/characters?limit=5&ts=1&apikey=97643f15d15c73234f2855d8d24e6072&hash=aef637835a75d2e8206cff8a604dbfc6');
                console.log(response.data.data.results);
                setHeroes(response.data.data.results);
            } catch (error) {
                console.error('Error fetching heroes:', error);
            }
        };

        fetchHeroes();

    

    }, []);

   

    

    return (
        <div className='hero-list'>
            <h3>Heroes</h3>
            <ul>
                {heroes.map(hero => (
                    
                    <li key={hero.id}>
                        <b>{hero.name}</b><br/>
                        <img src={`${hero.thumbnail.path}/portrait_xlarge.${hero.thumbnail.extension}`} alt={hero.name} />
                    
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default CharacterList;
