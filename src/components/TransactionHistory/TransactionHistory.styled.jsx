import styled from "@emotion/styled";

export const Transaction = styled.table`
  width: 60%;
  margin: 0 auto;
  border-collapse: collapse;
  text-align: center;

  th {
    text-transform: uppercase;
    color: #fff;
    background-color: #2ac5da;
  }

  tbody tr:nth-of-type(odd) {
    background-color: #fff;
  }

  tbody tr:nth-of-type(even) {
    background-color: #ebeeeb;
  }

  th,
  td {
    padding: 10px;
    border: 1px solid #ececec;
  }
`;
