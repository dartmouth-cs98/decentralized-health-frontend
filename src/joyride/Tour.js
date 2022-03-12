import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Joyride, {
  ACTIONS, EVENTS, STATUS,
} from 'react-joyride';
import { defaultSteps, patientSteps, doctorSteps } from './steps';
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
  const [userSteps, setUserSteps] = useState(defaultSteps);

  useEffect(() => {
    setLoaded(true);
    if (location.pathname === '/signup') {
      dispatch(stepUpdated(4));
    } else if (location.pathname === '/patient') {
      setUserSteps(defaultSteps.concat(patientSteps));
      dispatch(stepUpdated(4));
    } else if (location.pathname === '/admin') {
      setUserSteps(defaultSteps.concat(doctorSteps));
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
        steps={userSteps}
        tooltipComponent={Tooltip}
      />
      )}
    </>
  );
};

export default Tour;
