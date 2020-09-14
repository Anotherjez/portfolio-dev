import styled from 'styled-components';
import detailsIllustration from 'assets/illustrations/details.svg';

export const Wrapper = styled.div`
  background-image: url(${detailsIllustration});
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
`;

export const SkillsWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-left: 2rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 26pt;
    color: ${({ theme }) => (theme === 'dark' ? '#fff' : '#212121')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }

  p {
    margin-bottom: 2.5rem;
    font-size: 20pt;
    font-weight: normal;
    line-height: 1.3;
    color: ${({ theme }) => (theme === 'dark' ? '#c7c7c7' : '#707070')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`;

export const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  width: 280px;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

  h4 {
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
  }

  p {
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#c7c7c7')};
  }
`;

export const Content = styled.div`
  padding: 1rem 0;

  h2 {
    color: ${({ theme }) => (theme === 'light' ? '#222' : '#fff')};
    position: relative;
    margin-top: 20px;
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 1px;
    text-transfrom: uppercase;
    transition: 0.5s;
  }
`;

export const Porcentaje = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  box-shadow: inset 0 0 50px #000;
  background: ${({ theme }) => (theme === 'light' ? '#F9F9F9' : '#222')};
  z-index: 1000;

  svg {
    position: relative;
    width: 150px;
    height: 150px;
    z-index: 1000;
  }

  svg circle {
    width: 100%;
    height: 100%;
    fill: none;
    stroke: ${({ theme }) => (theme === 'light' ? '#eeeeee' : '#191919')};
    stroke-width: 10;
    stroke-linecap: round;
    transform: translate(5px, 5px);
  }

  svg circle:nth-child(2) {
    stroke-dasharray: 440;
    stroke: #00ff43;
  }
`;

export const Number = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-top: 10px;

  h3 {
    color: ${({ theme }) => (theme === 'light' ? '#222' : '#777')};
    font-weight: 700;
    font-size: 40px;
    transition: 0.5s;
  }

  h3 span {
    font-size: 24px;
    color: ${({ theme }) => (theme === 'light' ? '#222' : '#777')};
  }
`;
