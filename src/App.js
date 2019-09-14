import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { RED, WHITE } from './shared/style/colors';
import Pizzas from './background.svg';

import Header from './components/header';
import Message from './components/message';
import OrderStatus from './components/order-status';
import Loader from './components/loader';
import Timer from './components/timer';

const Page = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background: ${RED};
  display: flex;
  overflow: hidden;
`;

const Background = styled.div`
  position: relative;
  width: 400px;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 960px;

`;

const Content = styled.main`
  background: ${WHITE};
  width: 100%;
  height: 100%;
  max-width: 960px;
`;

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    let id;
    if (delay !== null) {
      id = setInterval(tick, delay);
      return () => clearInterval(id);
    }

    return () => clearInterval(id);
  }, [delay]);
}

const App = () => {
  const [timer, setTimer] = useState(60);


  useInterval(() => {
    setTimer(timer => timer - 1);
  }, timer > 0 ? 500 : null);

  return (
    <Page>
      <Background>
        <img
          src={Pizzas}
          style={{ position: 'absolute', right: 0 }}
          alt="pizza background left"
        />
      </Background>
      <Center>
        <Content>
          <Header />
          <Message />
          <OrderStatus timer={timer} />
          <Loader timer={timer} />
          <Timer timer={timer} />
        </Content>
      </Center>
      <Background>
        <img
          src={Pizzas}
          style={{ position: 'absolute', left: 15 }}
          alt="pizza background right"
        />
      </Background>
    </Page>
  );
}

export default App;
