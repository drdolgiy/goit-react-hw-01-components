import styled from "@emotion/styled";

export const StatsSection = styled.section`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* text-align: center; */
  margin: 0 auto;
  margin-bottom: 15px;
  width: 250px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
export const StatsTitle = styled.h2`
  text-align: center;
  font-size: 16px;
  color: grey;
  text-transform: uppercase;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-between;
  /* text-align: center; */
  margin-top: 0px;
  padding: 0px 10px 0 10px;
  list-style: none;
`;
export const StatsLabel = styled.span`
  display: flex;
  /* text-align: center; */
  /* justify-content: space-between; */
  /* align-content: center; */
  margin-bottom: 5px;
  font-size: 14px;
`;
export const StatsPercentage = styled.span`
  font-size: 18px;
  font-weight: bold;
`;
