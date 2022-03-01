import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const pulse = keyframes`
  0% {
    transform: scale(1);
  }

  55% {
    background: linear-gradient(217deg, #11ADF1, #CC14FA);;
    transform: scale(1.6);
  }
`;

const Beacon = styled.span`
  animation: ${pulse} 1s ease-in-out infinite;
  background: linear-gradient(217deg, #11ADF1, #CC14FA);
  border-radius: 50%;
  display: inline-block;
  height: 1rem;
  width: 1rem;
`;

const BeaconComponent = forwardRef((props, ref) => (
  <Beacon {...props} ref={ref} />
));

export default BeaconComponent;
