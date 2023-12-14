import styled from "styled-components";

export const StyledHeaderLogo = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  gap: 0.625rem;
  width: clamp(150px, 90%, 400px);
  height: 6.25rem;

  .back {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-size: 0.75rem;
    font-weight: 600;

    padding: 0rem 1.375rem;
    width: max-content;
    height: 2.5rem;

    background: var(--Color-Grey-3);
    border-radius: 0.2538rem;

    color: var(--Color-Grey-0);

    :hover {
      background-color: var(--Color-Grey-2);
    }
  }
`;
