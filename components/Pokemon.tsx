import axios from 'axios';
import Loading from './Loading';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react';
import { AbilityEffectProps, EffectDataProps, PokemonDataProps } from '../types/PokemonDataProps';


const Pokemon = () => {
  const { pokemonID } = useParams<{ pokemonID: string }>();
  const [loading, setLoading] = useState<boolean>(true);
  const [abilities, setAbilities] = useState<AbilityEffectProps[]>([]);
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      setLoading(true);

      const pokemonResponse = await axios
        .get<PokemonDataProps>(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)
        .catch(err => {
          console.error('Error fetching pokemon data:', err);
          // what else could we do here? log to log svc, stop loading, return to home page or error
          return null;
        });

      if (pokemonResponse) {
        //store pokemon name
        setName(pokemonResponse.data.name);

        //create array of request to send to and get data to save the abilities w/ name from 2 diff apis. 
        const abilityRequests = pokemonResponse.data.abilities.map(a =>
          axios.get(a.ability.url).then(response => {
            const { name } = response.data;
            const filteredEffects = response.data.effect_entries.filter(
              (effect: EffectDataProps) => effect.language.name === 'en'
            );
            return filteredEffects.map((effect: AbilityEffectProps) => ({
              name,
              effect: effect.effect,
            }));
          })
          .catch(err => {
            console.error('Error fetching ability data:', err);
            return [];
          })
        );

        axios.all(abilityRequests).then(axios.spread((...responses) => {
          const abilitiesData = responses.flat();
          setAbilities(abilitiesData);
        }))
        .catch(err => {
          console.error('Error processing abilities:', err);
        });
      }

      setLoading(false);
    };

    fetchPokemonData();
  }, [pokemonID]);

  return (
    loading ? 
      <Loading /> : 
      <section className='w-1/2 m-auto'>
        <p className='mb-2'>Selected Pokemon: {name}</p>
        <table className="table-auto m-auto">
          <thead>
            <tr className='w-full bg-sky-300'>
              <th className='py-2 min-h-2 text-left pl-2'>Abilty</th>
              <th className='py-2 min-h-2 text-left pl-2'>Abilty Effect</th>
            </tr>
          </thead>
          <tbody>
            {abilities.map((ability, index) => (
              <tr key={index} className={`text-black py-2 min-h-2 w-full pl-2 ${index % 2 == 0 ? 'bg-slate-100' : ''}`}>
                <td className='text-left align-middle	p-2 '>{ability.name}</td>
                <td className='text-left align-middle	p-2 '>{ability.effect}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to={'/'} className='flex justify-end text-sky-500'>Back to list view</Link>
      </section>
  );
};

export default Pokemon;
