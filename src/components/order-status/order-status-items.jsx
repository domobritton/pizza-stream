import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Deliver from './images/deliver.svg';
import Make from './images/make-icon.svg';
import Process from './images/process-icon.svg';
import { GREY, WHITE, DARK_GREY } from '../../shared/style/colors';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 1px solid #d8d8d8;
  border-right: 1px solid #d8d8d8;
  box-sizing: border-box;
`;

const Header = styled.div`
  background: ${GREY};
  width: 100%;
  padding: 10px 0 5px;
  text-align: center;
`;

const Number = styled.div`
  font-size: 30px;
  line-height: 35px;
  color: ${WHITE};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 90px;
`;

const Status = styled.div`
  font-size: 20px;
  line-height: 35px;
  color: ${DARK_GREY};
  font-weight: bold;
  margin-bottom: 20px;
`;

const Box = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${GREY};
`;

const Message = styled.div`
  font-size: 20px;
  line-height: 23px;
  color: ${DARK_GREY};
  margin-top: 26px;
`;

const OrderStatusItems = ({ id, status, message }) => {
  return (
    <Wrapper>
      <Header>
        <Number>{id}</Number>
      </Header>
      <Content>
        <Status>{status}</Status>
        {id === 1 && (
          <Box>
            <img src={Process} alt="process" />
          </Box>
        )}
        {id === 2 && (
          <Box>
            <img src={Make} alt="make" />
          </Box>
        )}
        {id === 3 && (
          <Box>
            <img src={Deliver} alt="deliver" />
          </Box>
        )}
        <Message>{message}</Message>
      </Content>
    </Wrapper>
  );
};

OrderStatusItems.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired
};

export default OrderStatusItems;
