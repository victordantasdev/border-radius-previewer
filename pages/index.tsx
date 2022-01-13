import React, { useState } from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
`;

const Output = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 200px;
  width: 500px;
  border: 1px solid ${({ theme }) => theme.primary};
  padding: 10px;
`;

const Code = styled.pre`
  font-family: courier, monospace;
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
  height: 200px;
  width: 350px;
  border: 1px solid ${({ theme }) => theme.primary};
  padding: 10px;
`;

const Controller = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-right: 10px;
  width: 100%;
`;

const Home: NextPage = () => {
  const [allSides, setAllSides] = useState('0');
  const [topLeft, setTopLeft] = useState('0');
  const [topRight, setTopRight] = useState('0');
  const [bottomRight, setBottomRight] = useState('0');
  const [bottomLeft, setBottomLeft] = useState('0');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.id === 'allSides') {
      setAllSides(e.target.value);
      setTopLeft(e.target.value);
      setTopRight(e.target.value);
      setBottomRight(e.target.value);
      setBottomLeft(e.target.value);
    } else if (e.target.id === 'topLeft') {
      setAllSides('0');
      setTopLeft(e.target.value);
    } else if (e.target.id === 'topRight') {
      setAllSides('0');
      setTopRight(e.target.value);
    } else if (e.target.id === 'bottomRight') {
      setAllSides('0');
      setBottomRight(e.target.value);
    } else if (e.target.id === 'bottomLeft') {
      setAllSides('0');
      setBottomLeft(e.target.value);
    }
  };

  const out = `.box {
  border-radius: ${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px;
}`;

  return (
    <Container>
      <Output>
        <Code>
          {out}
        </Code>
      </Output>

      <Box
        topLeft={topLeft}
        topRight={topRight}
        bottomRight={bottomRight}
        bottomLeft={bottomLeft}
      />

      <Controllers>
        {/* allSides */}
        <Controller>
          <input
            type="range"
            min="0"
            max="100"
            id="allSides"
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
        </Controller>
        {/* ============== */}

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
