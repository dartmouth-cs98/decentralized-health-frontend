import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const CubeWrap = styled.div`
  perspective: 800px;
  perspective-origin: 50% 100px;

`;

const spin = keyframes`
  from {
    transform: rotateY(0) rotateX(0);
  }
  to {
    transform: rotateY(360deg) rotateX(360deg);
  }
`;

const Cube = styled.div`
  animation: ${spin} 3s infinite linear;
  position: relative;
  width: 20px;
  height: 20px;
  transform-style: preserve-3d;
  & > div {
    background: linear-gradient(217deg, #11ADF1, #CC14FA);
    position: absolute;
    width: 20px;
    height: 20px;
  }
`;

const Front = styled.div`
  transform: translateZ(10px);
`;

const Back = styled.div`
  transform: translateZ(-10px) rotateY(180deg);
`;

const Top = styled.div`
  transform: rotateX(-90deg) translateY(-10px);
  transform-origin: top center;
`;

const Bottom = styled.div`
  transform: rotateX(90deg) translateY(10px);
  transform-origin: bottom center;
`;

const Left = styled.div`
  transform: rotateY(270deg) translateX(-10px);
  transform-origin: center left;
`;

const Right = styled.div`
  transform: rotateY(-270deg) translateX(10px);
  transform-origin: top right;
`;

const CustomSpinner = () => (
  <CubeWrap>
    <Cube>
      <Front />
      <Back />
      <Top />
      <Bottom />
      <Left />
      <Right />
    </Cube>
  </CubeWrap>
);

export default CustomSpinner;
