import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Deliver from './images/deliver.svg';
import Make from './images/make-icon.svg';
import Process from './images/process-icon.svg';
import { GREY, WHITE, DARK_GREY, BLUE } from '../../shared/style/colors';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 1px solid #d8d8d8;
  border-right: 1px solid #d8d8d8;
  box-sizing: border-box;
`;

const Header = styled.div(
  {
    width: '100%',
    padding: '10px 0 5px',
    textAlign: 'center'
  },
  ({ active }) => ({
    background: active ? BLUE : GREY
  })
);

const Number = styled.div`
  font-size: 30px;
  line-height: 35px;
  color: ${WHITE};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 75px;
`;

const Status = styled.div`
  font-size: 20px;
  line-height: 35px;
  color: ${DARK_GREY};
  font-weight: bold;
  margin-bottom: 20px;
`;

const Box = styled.div(
  {
    width: 200,
    height: 200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  ({ active }) => ({
    background: active ? BLUE : GREY
  })
);

const MessageBox = styled.div({}, ({ active }) => ({
  opacity: active ? 1 : 0.5
}));

const Message = styled.div`
  font-size: 20px;
  line-height: 23px;
  color: ${DARK_GREY};
  margin-top: 26px;
`;

const OrderStatusItems = ({ id, status, message, active }) => {
  return (
    <Wrapper>
      <Header active={active}>
        <Number>{id}</Number>
      </Header>
      <Content>
        <Status>{status}</Status>
        {id === 1 && (
          <Box active={active}>
            <img src={Process} alt="process order" />
          </Box>
        )}
        {id === 2 && (
          <Box active={active}>
            <img src={Make} alt="make order" />
          </Box>
        )}
        {id === 3 && (
          <Box active={active}>
            <img src={Deliver} alt="deliver order" />
          </Box>
        )}
        <MessageBox active={active}>
          <Message>{message}</Message>
        </MessageBox>
      </Content>
    </Wrapper>
  );
};

OrderStatusItems.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired
};

export default OrderStatusItems;
