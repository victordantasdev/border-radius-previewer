import React from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: ${({ theme }) => theme.primary};
`;

const Home: NextPage = () => (
  <Container>
    <Box>hello</Box>
  </Container>
);

export default Home;
