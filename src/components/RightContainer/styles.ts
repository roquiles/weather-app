import styled from "styled-components";

export const Container = styled.section`
  width: 50%;
  height: 475px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
`;
