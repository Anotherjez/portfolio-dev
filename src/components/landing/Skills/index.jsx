import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail, Grid, Item, Content, Porcentaje, Number } from './styles';
import skills from './skills.json';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);
  const myPorcentajes = [40, 60, 65, 30, 40, 10, 70, 45, 50, 30, 30, 15];

  return (
    <Wrapper id="about">
      <Wrapper as={Container} id="skills">
        <h1>Skills</h1>
        <Grid>
          {skills.map(({ id, skillname, porcentaje }) => (
            <Item key={id} as="div" theme={theme}>
              <Card theme={theme}>
                <Content>
                  <Porcentaje theme={theme} porcentajes={myPorcentajes[id]}>
                    <svg>
                      <circle cx="70" cy="70" r="70"></circle>
                      <circle cx="70" cy="70" r="70"></circle>
                    </svg>
                    <Number theme={theme}>
                      <h2>
                        {porcentaje}
                        <span>%</span>
                      </h2>
                    </Number>
                  </Porcentaje>
                  <h2>{skillname}</h2>
                </Content>
              </Card>
            </Item>
          ))}
        </Grid>
      </Wrapper>

      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m Jesus and I’m a Fullstack developer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>Un desarrollador Fullstack con experecia en distintas tecnologias, CI/CD, AWS, Azure y demas.</p>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
