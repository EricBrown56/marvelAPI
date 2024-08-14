import { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterList = ({onHeroSelect}) => {
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
        <>
            <h3 className="center">Heroes</h3>
            
            <div className='container'>
                
                
                    {heroes.map(hero => (
                        
                        <div key={hero.id} onClick={() => onHeroSelect(hero.id)}>
                            <b>{hero.name}</b><br/>
                            <img src={`${hero.thumbnail.path}/portrait_xlarge.${hero.thumbnail.extension}`} alt={hero.name} />
                        
                        </div>
                    ))}
                
            </div>
        </>
    );
}


export default CharacterList;
