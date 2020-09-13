import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi There!</h1>
          <h4>I’m Jesus and I’m a Fullstack developer!</h4>
        </Details>
        <Thumbnail>
          <img src={dev} alt="I’m Jesus and I’m a Fullstack developer!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
