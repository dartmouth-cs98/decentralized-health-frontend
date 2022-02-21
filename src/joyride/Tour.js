import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Joyride, {
  ACTIONS, EVENTS, STATUS,
} from 'react-joyride';
import steps from './steps';
import BeaconComponent from './BeaconComponent';
import Tooltip from './TooltipComponent';
import {
  tourEnded, stepUpdated,
} from './tourSlice';

const Tour = () => {
  const location = useLocation();
  const run = useSelector((state) => state.tour.run);
  const stepIndex = useSelector((state) => state.tour.stepIndex);
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    if (location.pathname === '/signup') {
      dispatch(stepUpdated(2));
    }
    if (location.pathname === '/patient') {
      dispatch(stepUpdated(4));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  const joyrideCallback = (data) => {
    const {
      action, index, type, status,
    } = data;

    if (([STATUS.FINISHED, STATUS.SKIPPED]).includes(status)) {
      dispatch(tourEnded());
    } else if (([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND]).includes(type)) {
      const currStepIndex = index + (action === ACTIONS.PREV ? -1 : 1);
      dispatch(stepUpdated(currStepIndex));
    }

    // edge cases
    // forward and backward navigation
    // soln 1: disable back and next and sleep
    // soln 2: currently watching for location changes, keep track of location changes and
    // whether the last action was ACTION.PREV, then navigate(-1), if not, navigate(1)
    // What about two backs? Explore if time
  };

  return (
    <>
      { loaded
      && (
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
      )}
    </>
  );
};

export default Tour;
