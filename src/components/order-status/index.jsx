/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { BORDER } from '../../shared/style/colors';

import OrderStatusItems from './order-status-items';
import useCounter from './hooks/useCounter';
import useWindowResize from './hooks/useWindowResize';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));

  > div:nth-of-type(2) {
    border-left: 1px solid ${BORDER};
    border-right: 1px solid ${BORDER};
  }

  @media all and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

const OrderStatus = ({ timer }) => {
  const data = useCounter(timer);
  const { width } = useWindowResize();
  const filteredData =
    width < 768 ? data.filter(item => item.mobile === true) : data;
  return (
    <Wrapper>
      {filteredData.map(({ id, status, message, active, completed, img }) => (
        <OrderStatusItems
          key={id}
          id={id}
          status={status}
          message={message}
          active={active}
          completed={completed}
          img={img}
        />
      ))}
    </Wrapper>
  );
};

OrderStatus.propTypes = {
  timer: PropTypes.number.isRequired
};

export default OrderStatus;
