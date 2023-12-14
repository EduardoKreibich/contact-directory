import styled from "styled-components";


export const StyledButtonPrimary = styled.button`
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-size:16px;
    font-weight: 500;

    padding: 0px 22px;
    width: 90%;
    height: 46px;


    background: var(--Color-Primary);
    border: 1.2182px solid var(--Color-Primary);
    border-radius: 4.06066px;

    color:var(--Color-Grey-3);

    :hover{
        background-color:var(--Color-Focus);
        border: 1.2182px solid var(--Color-Focus);
    }
`

export const StyledButtonSecundary = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-size:.75rem;
    font-weight: 600;

    padding: 0rem 1.375rem;
    width: 90%;
    height: 1.875rem;


    background: var(--Color-Grey-3);
    border-radius: .2538rem;

    color:var(--Color-Grey-4);

    :hover{
        background-color:var(--Color-Grey-2);
    }
`

export const StyledButtonTertiary = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-size:.75rem;
    font-weight: 600;

    padding: 0rem 1.375rem;
    width: max-content;
    height: 1.875rem;

    background: var(--Color-Grey-3);
    border-radius: .2538rem;

    color:var(--Color-Grey-1);

    :hover{
        background-color: black;
    }
`   

export const StyledButtonQuaternary = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-size:16px;
    font-weight: 500;

    padding: 0px 22px;
    width: 100%;
    height: 46px;


    background: var(--Color-Primary);
    border: 1.2182px solid var(--Color-Primary);
    border-radius: 4.06066px;

    color:var(--Color-Grey-3);


    :hover{
        background-color:var(--Color-Focus);
        border: 1.2182px solid var(--Color-Focus);
    }
`   