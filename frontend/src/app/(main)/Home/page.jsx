import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';       

const Home = () => {
  return (
    <Wrapper className="test">Home</Wrapper>
  );
}

const Wrapper = styled.section`
background-color:${({theme}) => theme.colors.bg};
height:20rem;
weight:20rem;
`;
export default Home;
