/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import OrderStatusItems from './order-status-items';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
`;

const items = [
  {
    id: 1,
    status: 'Processing your order',
    message: "Checkin' it twice",
    active: true
  },
  {
    id: 2,
    status: 'Making the pizza',
    message: "Kneadin', shapin', bakin'",
    active: false
  },
  {
    id: 3,
    status: 'Delivering your pizza',
    message: "Deliverin'",
    active: false
  }
];

const OrderStatus = ({ timer }) => {
  const [data, setData] = useState(items);

  const updateField = timer => {
    const newD = [...data];
    if (timer === 30) {
      newD[0].active = false;
      newD[1].active = true;
      return () => setData(newD);
    } 
    if (timer === 10) {
      newD[1].active = false;
      newD[2].active = true;
      return () => setData(newD);
    }
    return null;
  };

  useEffect(() => {
    updateField(timer);
  }, [timer]);

  return (
    <Wrapper>
      {data.map(({ id, status, message, active }) => (
        <OrderStatusItems
          key={id}
          id={id}
          status={status}
          message={message}
          active={active}
        />
      ))}
    </Wrapper>
  );
};

OrderStatus.propTypes = {
  timer: PropTypes.number.isRequired
};

export default OrderStatus;
