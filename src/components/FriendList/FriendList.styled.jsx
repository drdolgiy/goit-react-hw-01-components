import styled from "@emotion/styled";

export const FriendListStyled = styled.ul`
  padding: 0px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 150px;
  margin: 0px auto 10px auto;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 5px;
`;

export const FriendName = styled.p`
  /* margin-left: 15px; */
  font-weight: bold;
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background-color: ${(props) => {
    return props.children ? `red` : `green`;
  }};
`;
