import styled from 'styled-components';

export const Card = styled.div`
  padding: 1rem;
  background: ${({ theme }) => (theme === 'light' ? '#fff' : '#181717')};
  height: 100%;
`;

export const SkillCard = styled.div`
  padding: 1rem;
  background: ${({ theme }) => (theme === 'light' ? '#fff' : 'linear-gradient(0deg,#1b1b1b,#181717,#1b1b1b)')};
  position: relative;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  border-radius: 4px;
  text-align: center;
  overflow: hidden;
  transition: 0.5s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
  }

  &:hover h3 {
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#fff')};
    font-size: 50px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.03);
    pointer-events: none;
    z-index: 1;
  }
`;
