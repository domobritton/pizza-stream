import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Loading from './images/loading.gif';
import Loaded from './images/loading.svg';

const Wrapper = styled.div`
  overflow: hidden;
`;

const Image = styled.img`
  height: 50px;
`;

const Loader = ({timer}) => {
  return (
    <Wrapper>
      {timer > 0 && <Image src={Loading} alt="loading" />}
      {timer <= 0 && <Image src={Loaded} alt="loaded" />}
    </Wrapper>
  );
};

Loader.propTypes = {
  timer: PropTypes.number.isRequired
}

export default Loader;
