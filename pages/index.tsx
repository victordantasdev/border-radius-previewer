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

type BoxProps = {
  topLeft: string;
  topRight: string;
  bottomRight: string;
  bottomLeft: string;
}

const Box = styled.div.attrs(({
  topLeft, topRight, bottomRight, bottomLeft,
}: BoxProps) => ({
  style: {
    borderRadius: `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`,
  },
}))<BoxProps>`
  height: 200px;
  width: 200px;
  background-color: ${({ theme }) => theme.primary};
`;

const Controllers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

const Controller = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

const Home: NextPage = () => {
  const [topLeft, setTopLeft] = useState('0');
  const [topRight, setTopRight] = useState('0');
  const [bottomRight, setBottomRight] = useState('0');
  const [bottomLeft, setBottomLeft] = useState('0');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'topLeft') {
      setTopLeft(e.target.value);
    } else if (e.target.id === 'topRight') {
      setTopRight(e.target.value);
    } else if (e.target.id === 'bottomRight') {
      setBottomRight(e.target.value);
    } else if (e.target.id === 'bottomLeft') {
      setBottomLeft(e.target.value);
    }
  };

  return (
    <Container>
      <Box
        topLeft={topLeft}
        topRight={topRight}
        bottomRight={bottomRight}
        bottomLeft={bottomLeft}
      />

      <Controllers>
        {/* topLeft */}
        <Controller>
          <input
            type="range"
            min="0"
            max="100"
            id="topLeft"
            value={topLeft}
            onChange={(e) => handleChange(e)}
          />
          <span>
            Top Left
            {' '}
            {topLeft}
            {' '}
            px
          </span>
        </Controller>
        {/* ============== */}

        {/* topRight */}
        <Controller>
          <input
            type="range"
            min="0"
            max="100"
            id="topRight"
            value={topRight}
            onChange={(e) => handleChange(e)}
          />
          <span>
            Top Right
            {' '}
            {topRight}
            {' '}
            px
          </span>
        </Controller>
        {/* ============== */}

        {/* bottomRight */}
        <Controller>
          <input
            type="range"
            min="0"
            max="100"
            id="bottomRight"
            value={bottomRight}
            onChange={(e) => handleChange(e)}
          />
          <span>
            Bottom Right
            {' '}
            {bottomRight}
            {' '}
            px
          </span>
        </Controller>
        {/* ============== */}

        {/* bottomLeft */}
        <Controller>
          <input
            type="range"
            min="0"
            max="100"
            id="bottomLeft"
            value={bottomLeft}
            onChange={(e) => handleChange(e)}
          />
          <span>
            Bottom Left
            {' '}
            {bottomLeft}
            {' '}
            px
          </span>
        </Controller>
        {/* ============== */}
      </Controllers>
    </Container>
  );
};

export default Home;
