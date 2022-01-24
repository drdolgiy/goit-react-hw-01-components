import styled from "@emotion/styled";

export const ProfileStyled = styled.div`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 15px;

  width: 250px;
  padding: 15px;
  text-align: center;
  border: 1px solid lightgrey;
  border-radius: 8px;
`;
export const Name = styled.div`
  font-style: 16px;
  font-weight: bold;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding-left: 0;
`;

export const StatsLabel = styled.span`
  display: flex;
  justify-content: center;
  /* border: 1px solid grey; */
`;
