import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Loader from './images/loading.gif';
import Loaded from './images/loading.svg';

const Wrapper = styled.div`
  overflow: hidden;
`;

const Image = styled.img`
  height: 50px;
`;

const Loading = ({timer}) => {
  return (
    <Wrapper>
      {timer > 0 && <Image src={Loader} alt="loading" />}
      {timer <= 0 && <Image src={Loaded} alt="loaded" />}
    </Wrapper>
  );
};

Loading.propTypes = {
  timer: PropTypes.number.isRequired
}

export default Loading;
