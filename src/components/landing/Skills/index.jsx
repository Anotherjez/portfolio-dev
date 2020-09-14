import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail, Grid, Item, Content } from './styles';
import skills from './skills.json';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <h1>Skills</h1>
      <Grid>
        {skills.map(({ id, skillname, porcentaje }) => (
          <Item key={id} as="div" theme={theme}>
            <Card theme={theme}>
              <Content>
                <h4>{skillname}</h4>
                <p>{porcentaje}%</p>
              </Content>
            </Card>
          </Item>
        ))}
      </Grid>
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
