import styled from "styled-components";

export const StyledCard = styled.li`
  display: flex;
  background-color: var(--Color-Grey-3);

  border-radius: 5px;
  margin: 15px 0px;

  :hover {
    background-color: var(--Color-Blue-1);
    color: var(--Color-Grey-3);
    transition: 1000ms;

  }

  button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 15px;

    width: 100%;
    height: 100%;
    color: var(--Color-Grey-0);
  }
`;
