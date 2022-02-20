import React from 'react';
import Joyride from 'react-joyride';
import steps from './steps';
import BeaconComponent from './BeaconComponent';
import Tooltip from './TooltipComponent';

const Tour = () => {
  const joyrideCallback = (data) => {
    console.log(data);
  };

  return (
    <>
      <Joyride
        beaconComponent={BeaconComponent}
        callback={joyrideCallback}
        continuous
        showProgress
        showSkipButton
        spotlightClicks
        steps={steps}
        tooltipComponent={Tooltip}
      />
    </>
  );
};

export default Tour;
