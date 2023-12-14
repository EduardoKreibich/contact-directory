import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  inset: 0;
  width: 100%;
  height: 100vh;

  background-color: rgb(0, 0, 0, 0.7);

  z-index: 1000;
`;

export const StyledModalContact = styled.div`
  background-color: var(--Color-Grey-3);

  width: clamp(9.375rem, 95%, 25rem);

  border: none;
  border-radius: 0.3125rem;

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;

    background-color: var(--Color-Grey-2);
    width: 100%;
  }

  .header button {
    color: var(--Color-Grey-0);
    font-weight: 100;
  }

  .submit__button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-size: 16px;
    font-weight: 500;

    padding: 0px 22px;
    width: 50%;
    height: 46px;

    background: var(--Color-Primary);
    border: 1.2182px solid var(--Color-Primary);
    border-radius: 4.06066px;

    color: var(--Color-Grey-3);

    :hover {
      background-color: var(--Color-Focus);
      border: 1.2182px solid var(--Color-Focus);
    }
  }

  .delete__button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-size: 16px;
    font-weight: 500;

    padding: 0rem 1.375rem;
    width: max-content;
    height: 46px;

    background: var(--Color-Grey-2);
    border-radius: 0.2538rem;

    color: var(--Color-Grey-3);

    :hover {
      background-color: var(--Color-Grey-1);
    }
  }

  .cotainer__buttons{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .container__info{
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .name__contact{
    color: var(--Color-Grey-0);
    background-color: var(--Color-Grey-2) ;

    padding: 15px;
    border-radius: 4px;
  }
`;
