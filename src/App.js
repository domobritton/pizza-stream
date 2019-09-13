import React from 'react';
import styled from '@emotion/styled';
import { RED, WHITE } from './shared/style/colors';
import Pizza from './background.png';

import Header from './components/header';
import Message from './components/message';
import OrderStatus from './components/order-status';
import Loading from './components/loading';
import Timer from './components/timer';

const Page = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background: ${RED};
`;

const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr 960px 1fr;
`;

const Content = styled.main`
  background: ${WHITE};
`;

function App() {
  return (
    <Page>
      <Columns>
        <img src={Pizza} alt="pizza slice" />
        <Content>
          <Header />
          <Message />
          <OrderStatus />
          <Loading />
          <Timer />
        </Content>
      </Columns>
    </Page>
  );
}

export default App;
