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

  @media all and (max-width: 767px) {
    padding-bottom: 30px;
  }
`;

const Message = styled.div`
  font-size: 30px;
  line-height: 35px;
`;

const Time = styled.div`
  font-size: 50px;
  line-height: 59px;
`;

const Timer = ({timer}) => {
  const message = timer === 0 ? "Your pizza has arrived!" : "It'll take about";
  return (
    <Wrapper>
      <Message>{message}</Message>
      <Time>{`${timer >= 0 ? timer : 0} minutes`}</Time>
    </Wrapper>
  );
};

Timer.propTypes = {
  timer: PropTypes.number.isRequired
}

export default Timer;
