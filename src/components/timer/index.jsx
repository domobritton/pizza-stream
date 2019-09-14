import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { DARK_GREY } from '../../shared/style/colors';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0 0;
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

const Timer = ({timer}) => {
  return (
    <Wrapper>
      <Wait>It'll take about</Wait>
      <Time>{`${timer >= 0 ? timer : 0} minutes`}</Time>
    </Wrapper>
  );
};

Timer.propTypes = {
  timer: PropTypes.number.isRequired
}

export default Timer;
