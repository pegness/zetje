import React from 'react';
import gif1 from '../gifs/animated-penguin.gif';
import gif2 from '../gifs/grandma.gif';
import gif3 from '../gifs/turtles.gif';
import gif4 from '../gifs/thankyou.gif';
import gif5 from '../gifs/world.gif';

const ProfileGenerator = () => {
  const profiles = {
    1: {
      name: 'Siribia',
      url: 'https://s3-us-west-2.amazonaws.com/gdlive-images-prod/uploads/profile_headshot_786f41ec-92be-4543-aca9-5b2dd3338db1',
    },
    2: {
      name: 'Imelda',
      url: 'https://s3-us-west-2.amazonaws.com/gdlive-images-prod/uploads/profile_headshot_82e9c11c-c930-4153-8ac4-8780d9a72e2a',
    },
    3: {
      name: 'Selin',
      url: 'https://s3-us-west-2.amazonaws.com/gdlive-images-prod/uploads/profile_headshot_7dc64bf7-42ee-4b5e-b999-cb84176ad296',
    },
    4: {
      name: 'Lidia',
      url: 'https://s3-us-west-2.amazonaws.com/gdlive-images-prod/uploads/profile_headshot_cd8a3046-b0e6-4db4-9084-508578f1e964',
    }
  };

  const getRandomImage = () => {
    const min = 1;
    const max = 5;
    const num = min + Math.floor(Math.random() * (max - min));
    return profiles[num].url;
  };

  return (
      <img className="profile" src={getRandomImage()} alt="zetje-logo" width="100%" />

  );
};

export default ProfileGenerator;
