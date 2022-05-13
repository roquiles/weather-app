import styled from "styled-components";

export const Container = styled.section`
  width: 45%;
  padding: 2rem;
  min-height: 550px;
  background: linear-gradient(#8d80ad, #4d7298);
  border-radius: 2rem;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);

  h2 {
    font-size: 2rem;
    margin-bottom: 0.25rem;
  }

  img {
    width: 150px;
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
    margin-bottom: 2rem;
    font-weight: 100;
  }

  #temperature {
    margin-top: 5rem;
    font-size: 4rem;
    font-weight: 600;
  }

  #weather-label {
    font-weight: 100;
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 800px) {
    width: 97vw;
    min-height: 250px;

    display: flex;
    flex-direction: column;

    position: relative;

    img {
      position: absolute;
      bottom: 0;
      right: 2rem;
    }

    #temperature {
      position: absolute;
      top: 4rem;
      font-size: 3rem;
    }

    #location {
      margin: 1rem 0 6rem;
    }
  }
`;
