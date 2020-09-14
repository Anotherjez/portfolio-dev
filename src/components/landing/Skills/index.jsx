import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, SkillCard } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import {
  Wrapper,
  SkillsWrapper,
  AboutWrapper,
  Details,
  Thumbnail,
  Grid,
  Item,
  Content,
  Porcentaje,
  Number,
} from './styles';
import skills from './skills.json';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container} id="skills">
        <h2>Skills</h2>
        <Grid>
          {skills.map(({ id, skillname, porcentaje }) => (
            <Item key={id} as="div" theme={theme}>
              <SkillCard theme={theme}>
                <Content theme={theme}>
                  <Porcentaje theme={theme} porcentajes={40}>
                    <svg>
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle
                        cx="70"
                        cy="70"
                        r="70"
                        style={{ strokeDashoffset: `calc(440 - (440 * ${porcentaje}) / 100)` }}
                      ></circle>
                    </svg>
                    <Number theme={theme}>
                      <h3>
                        {porcentaje}
                        <span>%</span>
                      </h3>
                    </Number>
                  </Porcentaje>
                  <h2>{skillname}</h2>
                </Content>
              </SkillCard>
            </Item>
          ))}
        </Grid>
      </SkillsWrapper>

      <AboutWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m Jesus and I’m a Fullstack developer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>A Fullstack developer with experience in different technologies, CI / CD, AWS, Azure and others.</p>
        </Details>
      </AboutWrapper>
    </Wrapper>
  );
};
