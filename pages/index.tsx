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
  width: 450px;
  border: 1px solid ${({ theme }) => theme.primary};
  padding: 10px;
`;

const Code = styled.pre<{ active: boolean }>`
  font-family: courier, monospace;
  padding: 10px;
  border: 1px solid ${({ active, theme }) => (active ? theme.primary : 'transparent')};
  transition: all 0.2s ease-in-out;
`;

const Button = styled.button<{ active: boolean }>`
  background-color: ${({ active, theme }) => (active ? theme.primary : 'transparent')};
  color: ${({ theme }) => theme.color};
  border: 1px solid ${({ theme }) => theme.primary};
  padding: 5px;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
  }
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

  const [active, setActive] = useState(false);

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

  const handleClick = () => {
    navigator.clipboard.writeText(out);
    setActive(true);

    setTimeout(() => setActive(false), 1000);
  };

  return (
    <Container>
      <Output>
        <Code active={active}>
          {out}
        </Code>

        <Button
          active={active}
          onClick={handleClick}
        >
          Copy to clipboard
        </Button>
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
