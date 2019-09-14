import React from 'react';
import styled from '@emotion/styled';
import { DARK_GREY } from '../../shared/style/colors';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 39px;
`;

const Title = styled.h2`
  margin: 0 0 20px;
  font-size: 40px;
  line-height: 47px;
  color: ${DARK_GREY};
`;

const Status = styled.div`
  font-size: 30px;
  line-height: 35px;
  color: ${DARK_GREY};
`;

const Message = () => {
  return (
    <Wrapper>
      <Title>Thanks for your order!</Title>
      <Status>See below for the status of your pizza.</Status>
    </Wrapper>
  );
};

export default Message;
