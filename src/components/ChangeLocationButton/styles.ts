import styled from "styled-components";

export const ChangeLocationDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  input {
    color: var(--blue-900);
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
