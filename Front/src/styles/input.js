import styled from "styled-components";


export const StyledInput = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--Color-Grey-2);
    color: var(--Color-Grey-0);

    border: 1.2182px solid var(--Color-Grey-2);
    border-radius: 4px;
    
    margin-bottom: .625rem;

    width: 90%;
    height: 3rem;
    padding: 0.5rem 1rem;

    font-size: 1rem;
    font-weight: 400;

    :focus{
        border: 1.2182px solid var(--Color-Grey-0);
    }

    :hover{
        border: 1.2182px solid var(--Color-Grey-0);
    }

`

export const StyledInputModal = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--Color-Grey-2);
    color: var(--Color-Grey-4);

    border: 1.2182px solid var(--Color-Grey-2);
    border-radius: 4px;
    
    margin-bottom: .625rem;

    width: 100%;
    height: 3rem;
    padding: 0.5rem 1rem;

    font-size: 1rem;
    font-weight: 400;

    :focus{
        border: 1.2182px solid var(--Color-Grey-0);
    }

    :hover{
        border: 1.2182px solid var(--Color-Grey-0);
    }
`
