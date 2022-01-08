import React, { useState } from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

interface BoxProps {
  allSides: string;
}

const Box = styled.div<BoxProps>`
  height: 200px;
  width: 200px;
  background-color: ${({ theme }) => theme.primary};
  border-radius: ${(props) => props.allSides}px;
`;

const Controllers = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

const Home: NextPage = () => {
  const [allSides, setAllSides] = useState('0');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAllSides(e.target.value);
  };

  return (
    <Container>
      <Box
        allSides={allSides}
      />

      <Controllers>
        <input
          type="range"
          min="0"
          max="100"
          value={allSides}
          onChange={(e) => handleChange(e)}
        />
        <span>
          All Sides
          {' '}
          {allSides}
          {' '}
          px
        </span>
      </Controllers>

    </Container>
  );
};

export default Home;
