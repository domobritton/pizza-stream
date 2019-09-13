import React from 'react';
import styled from '@emotion/styled';
import { CREAM } from '../../shared/style/colors';
import Logo from './images/logo.svg';

const Wrapper = styled.div`
  background: ${CREAM};
  width: 100%;
  padding: 22px 0 38px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 127px;
  height: 107px;
`;

const Header = () => {
  return (
    <Wrapper>
      <LogoImg src={Logo} alt="Pizzastream" />
    </Wrapper>
  );
};

export default Header;
