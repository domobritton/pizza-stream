import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { GREY, WHITE, DARK_GREY, BLUE } from '../../shared/style/colors';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const Header = styled.div(
  {
    width: '100%',
    padding: '10px 0 5px',
    textAlign: 'center'
  },
  ({ active, completed }) => ({
    background: active ? BLUE : GREY,
    opacity: completed ? 0.5 : 1
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
  ({ active, completed }) => ({
    background: active ? BLUE : GREY,
    opacity: completed ? 0.5 : 1
  })
);

const MessageBox = styled.div({}, ({ active, completed }) => ({
  opacity: active && !completed ? 1 : 0.5
}));

const Message = styled.div`
  font-size: 20px;
  line-height: 23px;
  color: ${DARK_GREY};
  margin-top: 26px;
`;

const OrderStatusItems = ({ id, status, message, active, completed, img }) => {
  return (
    <Wrapper>
      <Header active={active} completed={completed}>
        <Number>{id}</Number>
      </Header>
      <Content>
        <Status>{status}</Status>
        <Box active={active} completed={completed}>
            <img src={img} alt="process order" />
          </Box>
        <MessageBox active={active} completed={completed}>
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
  active: PropTypes.bool.isRequired,
  completed: PropTypes.bool.isRequired,
  img: PropTypes.string.isRequired
};

export default OrderStatusItems;
