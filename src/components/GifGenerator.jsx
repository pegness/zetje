import React from 'react';
import gif1 from '../gifs/animated-penguin.gif';
import gif2 from '../gifs/grandma.gif';
import gif3 from '../gifs/turtles.gif';
import gif4 from '../gifs/thankyou.gif';
import gif5 from '../gifs/world.gif';

const GifGenerator = () => {
  const GIFS = [
    gif1,
    gif2,
    gif3,
    gif4,
    gif5,
  ];

  const getRandomImage = () => {
    const min = 0;
    const max = 5;
    const num = min + Math.floor(Math.random() * (max - min));
    return GIFS[num];
  };

  return (
    <img className="gifje" src={getRandomImage()} alt="zetje-logo" width="100%" />
  );
};

export default GifGenerator;
