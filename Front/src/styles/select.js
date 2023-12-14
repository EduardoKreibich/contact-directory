import styled from "styled-components";


export const StyledSelect = styled.select`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--Color-Grey-2);
    color: var(--Color-Grey-4);

    border: 1.2182px solid var(--Color-Grey-2);
    border-radius: 4px;

    width: 90%;
    height: 3rem;
    padding: 0.5rem 1rem;
    margin-bottom:10px;

    font-size: 1rem;
    font-weight: 400;

    :focus{
        border: 1.2182px solid var(--Color-Grey-0);
    }

    :hover{
        border: 1.2182px solid var(--Color-Grey-0);
    }
`

export const StyledSelectModal = styled.select`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--Color-Grey-2);
    color: var(--Color-Grey-4);

    border: 1.2182px solid var(--Color-Grey-2);
    border-radius: 4px;

    width: 100%;
    height: 3rem;
    padding: 0.5rem 1rem;
    margin-bottom:10px;

    font-size: 1rem;
    font-weight: 400;

    :focus{
        border: 1.2182px solid var(--Color-Grey-0);
    }

    :hover{
        border: 1.2182px solid var(--Color-Grey-0);
    }
`