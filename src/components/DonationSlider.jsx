import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const DonationSlider = (props) => {
  const { onChange, defaultValue, handleColor, trackColor } = props;

  const handle = {
    borderColor: handleColor,
    borderWidth: 9,
    height: 24,
    width: 24,
    marginLeft: -12,
    marginTop: -9,
    backgroundColor: handleColor,
  };

  return (
    <div className="donation-slider">
      <Slider
        max={100}
        min={0}
        onChange={onChange}
        defaultValue={defaultValue}
        trackStyle={[{ background: trackColor, height: 3 }]}
        railStyle={{ backgroundColor: trackColor, height: 3 }}
        handleStyle={handle}
      />
    </div>
  );
};

export default DonationSlider;
