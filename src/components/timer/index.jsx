import React from 'react';
import styled from '@emotion/styled';
import { DARK_GREY } from '../../shared/style/colors';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  color: ${DARK_GREY};
`;

const Wait = styled.div`
  font-size: 30px;
  line-height: 35px;
`;

const Time = styled.div`
  font-size: 50px;
  line-height: 59px;
`;

const Timer = () => {
  return (
    <Wrapper>
      <Wait>It'll take about</Wait>
      <Time>60 minutes</Time>
    </Wrapper>
  );
};

export default Timer;
