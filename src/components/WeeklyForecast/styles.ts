import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 8rem;
  background: var(--blue-900);
  border-radius: 1rem;

  display: flex;
  justify-content: space-around;
`;

export const DailyForecastCard = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 1rem 0;

  display: grid;
  align-items: center;
  justify-content: center;

  transition: all 0.4s;

  &:hover {
    border-radius: 1rem;
    background: var(--blue-200);
    color: var(--blue-900);
    transform: scale(1.15);
  }

  svg {
    width: 40px;
    height: 40px;
  }

  p {
    margin: 0.25rem 0;
    font-weight: 100;
  }

  span {
    font-size: 1.25rem;
    font-weight: bold;
  }
`;
