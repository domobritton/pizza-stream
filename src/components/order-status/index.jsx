import React from 'react';
import styled from '@emotion/styled';
// import Deliver from './images/deliver_icon.png';
// import Make from './images/make_icon.png';
// import Process from './images/process_icon.png';

import OrderStatusItems from './order-status-items';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const items = [
  {
    id: 1,
    status: 'Processing your order',
    message: "Checkin' it twice",
    image: ''
  },
  {
    id: 2,
    status: 'Making the pizza',
    message: "Kneadin', shapin', bakin'",
    image: ''
  },
  {
    id: 3,
    status: 'Delivering your pizza',
    message: "Deliverin'",
    image: ''
  }
];

const OrderStatus = () => {
  return (
    <Wrapper>
      {items.map(({ id, status, message, image}) => (
        <OrderStatusItems
          key={id}
          id={id}
          status={status}
          message={message}
          image={image}
        />
      ))}
    </Wrapper>
  );
};

export default OrderStatus;
