import styled from "styled-components";

export const ChangeLocationDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  input {
    height: 2rem;
    width: 100%;
    border: none;
    padding-left: 1rem;
    border-radius: 0.25rem 0 0 0.25rem;
  }

  button {
    margin-left: auto;
    height: 2rem;
    width: 2rem;
    border: none;
    background-color: var(--blue-600);
    border-radius: 0 0.25rem 0.25rem 0;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }

    svg {
      height: 2rem;
      width: 2rem;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 100;
  width: 100%;
  height: 2rem;
  background: var(--gradient);
  border: none;

  border-radius: 2rem;
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);

  transition: all 0.5s;

  &:hover {
    transform: scale(1.05);
  }
`;
