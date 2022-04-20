import styled from "styled-components";
import img from "../../assets/Images/rainy.png";

export const Container = styled.section`
  width: 50%;
  padding: 2rem;
  height: 500px;
  background: url(${img});
  border-radius: 2rem;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);

  h2 {
    font-size: 2rem;
    margin-bottom: 0.25rem;
  }

  transition: all 0.5s;

  &:hover {
    transform: scale(1.02);
  }

  #date {
    font-weight: 100;
  }

  #location {
    display: flex;
    height: 1rem;
    margin-top: 2rem;
    margin-bottom: 5rem;
    font-weight: 100;
  }

  #temperature {
    font-size: 4.5rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }

  #weather-label {
    font-weight: 600;
    font-size: 1.5rem;
  }
`;
