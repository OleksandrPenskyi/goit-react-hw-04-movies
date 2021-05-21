import React from 'react';
import noPicture from '../../img/noPicture.jpg';

const Cast = ({ cast }) => (
  <ul>
    {cast.map(({ name, original_name, id, profile_path, character }) => (
      <li key={id}>
        <img
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w500${profile_path}`
              : noPicture
          }
          alt={name}
        />
        <h2>{name || original_name}</h2>
        <p>Character: {character}</p>
      </li>
    ))}
  </ul>
);

//todo заглушка на фото

export default Cast;
