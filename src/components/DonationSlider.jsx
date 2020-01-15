import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const DonationSlider = (props) => {
  const { onChange, defaultValue } = props;

  const handle = {
    borderColor: 'white',
    borderWidth: 9,
    height: 24,
    width: 24,
    marginLeft: -12,
    marginTop: -9,
    backgroundColor: 'white',
  };

  return (
    <div className="donation-slider">
      <Slider
        max={100}
        min={1}
        onChange={onChange}
        defaultValue={defaultValue}
        trackStyle={[{ background: 'white', height: 5 }]}
        railStyle={{ backgroundColor: '#e9e9e9', height: 5 }}
        handleStyle={handle}
      />
    </div>
  );
};

export default DonationSlider;
