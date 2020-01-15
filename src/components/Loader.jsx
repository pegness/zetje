import React from 'react';

const Loader = (props) => {
  const {
    phone,
  } = props;

  return (
    <div className="Loading">
      <h2 className="LoaderTitle">
        SMS is verzonden naar
        {phone}
      </h2>
      <h3 className="LoaderSubTitle">even geduld</h3>
    </div>
  );
};

export default Loader;
