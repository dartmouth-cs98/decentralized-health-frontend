import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Joyride, {
  ACTIONS, EVENTS, STATUS,
} from 'react-joyride';
import steps from './steps';
import BeaconComponent from './BeaconComponent';
import Tooltip from './TooltipComponent';
import { tourEnded, stepUpdated } from './tourSlice';

const Tour = () => {
  const run = useSelector((state) => state.run);
  const stepIndex = useSelector((state) => state.stepIndex);

  const dispatch = useDispatch();

  // controlled demo-inspired
  const joyrideCallback = (data) => {
    const {
      action, index, type, status,
    } = data;

    if (([STATUS.FINISHED, STATUS.SKIPPED]).includes(status)) {
      dispatch(tourEnded());
    } else if (([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND]).includes(type)) {
      const newStepIndex = index + (action === ACTIONS.PREV ? -1 : 1);
      dispatch(stepUpdated(newStepIndex));
    }

    // handle edge cases
  };

  return (
    <>
      <Joyride
        beaconComponent={BeaconComponent}
        callback={joyrideCallback}
        continuous
        disableOverlayClose
        run={run}
        showProgress
        showSkipButton
        spotlightClicks
        spotlightPadding={0}
        stepIndex={stepIndex}
        steps={steps}
        tooltipComponent={Tooltip}
      />
    </>
  );
};

export default Tour;
