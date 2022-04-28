import styled from "styled-components";

export const Container = styled.section`
  width: 55%;
  height: 100%;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;

  table {
    width: 100%;
    font-size: 1.25rem;

    tr {
      height: 2rem;
    }

    th {
      text-align: left;
    }

    td {
      text-align: right;
      font-weight: 100;
    }
  }

  @media only screen and (max-width: 800px) {
    width: 100%;
    gap: 1.5rem;
  }
`;
