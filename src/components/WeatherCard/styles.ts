import styled from "styled-components";

export const Container = styled.main`
  max-width: 800px;
  max-height: 550px;
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--blue-800);
  border-radius: 2rem;

  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    width: 95vw;
    max-height: 700px;
  }
`;
