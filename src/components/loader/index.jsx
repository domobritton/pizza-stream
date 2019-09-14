import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Loading from './images/loading.gif';
import Loaded from './images/loading.svg';

const Wrapper = styled.div`
  overflow: hidden;
`;

const LoadingImg = styled.img({}, ({timer}) =>({
  height: timer > 0 ? 50 : 0
}))

const LoadedImg = styled.img({}, ({timer}) => ({
  height: timer <= 0 ? 50 : 0
}))

const Loader = ({timer}) => {
  return (
    <Wrapper>
      <LoadingImg src={Loading} alt="loading" timer={timer} />
      <LoadedImg src={Loaded} alt="loaded" timer={timer} />
    </Wrapper>
  );
};

Loader.propTypes = {
  timer: PropTypes.number.isRequired
}

export default Loader;
