import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import tagManager from '../lib/googleTagManager';
import Zetjes from './Zetjes';

const Dashboard = (props) => {
  const {
    setCurrentStep,
    allZetjes,
  } = props;

  return (
    <div className="dashboard">

      <Zetjes
        allZetjes={allZetjes}
      />

      <div
        className="new"
        onClick={() => {
          setCurrentStep(1);
          tagManager({ event: 'pageView', pageName: 'amount' });
        }}
      >
        <FontAwesomeIcon icon={faPlus} size="2x" />
      </div>

    </div>
  );
};

export default Dashboard;
